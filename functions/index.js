const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// Inicialização do Admin SDK
admin.initializeApp();

// Configuração do OAuth2
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  functions.config().gmail.clientid,
  functions.config().gmail.clientsecret,
  'https://developers.google.com/oauthplayground' // Redirect URI
);

// Configura as credenciais
oauth2Client.setCredentials({
  refresh_token: functions.config().gmail.refreshtoken
});

// Cache do token de acesso
let accessTokenCache = {
  token: null,
  expiry: null
};

// Função para obter/renovar o token de acesso
async function getAccessToken() {
  // Verifica se o token em cache ainda é válido (expira em 1 hora)
  if (accessTokenCache.token && accessTokenCache.expiry > Date.now()) {
    return accessTokenCache.token;
  }

  try {
    const { token, expires_in } = await oauth2Client.getAccessToken();
    
    // Atualiza o cache
    accessTokenCache = {
      token: token,
      expiry: Date.now() + (expires_in * 1000) - 30000 // 30s de margem
    };
    
    return token;
  } catch (error) {
    console.error('Erro ao renovar token de acesso:', error);
    throw new Error('Falha ao obter token de acesso');
  }
}

// Cria o transporter do Nodemailer
async function createTransporter() {
  const accessToken = await getAccessToken();
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: functions.config().gmail.email,
      clientId: functions.config().gmail.clientid,
      clientSecret: functions.config().gmail.clientsecret,
      refreshToken: functions.config().gmail.refreshtoken,
      accessToken: accessToken
    }
  });
}

// Cloud Function
exports.sendContactEmail = functions.runWith({
  timeoutSeconds: 60,
  memory: '512MB'
}).https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      const { nome, email, mensagem, recaptchaToken } = req.body;
      
      // Validação dos campos
      if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // Validação do reCAPTCHA
      if (recaptchaToken) {
        const recaptchaResponse = await axios.post(
          'https://www.google.com/recaptcha/api/siteverify',
          `secret=${functions.config().recaptcha.secret}&response=${recaptchaToken}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        
        if (!recaptchaResponse.data.success) {
          return res.status(400).json({ error: 'Validação reCAPTCHA falhou' });
        }
      }

      // Cria o transporter
      const transporter = await createTransporter();

      // Configura o email
      const mailOptions = {
        from: `Formulário de Contato <${functions.config().gmail.email}>`,
        to: 'leful.contato@gmail.com',
        subject: `Nova mensagem de ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
        html: `
          <h2>Nova mensagem de contato</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${mensagem}</p>
        `
      };

      // Envia o email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });

    } catch (error) {
      console.error('Erro no processo de envio:', error);
      return res.status(500).json({ 
        error: 'Erro interno ao processar sua mensagem',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });
});

exports.sendAgendamento = functions.runWith({
  timeoutSeconds: 60,
  memory: '512MB'
}).https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      const { nome, email, telefone, tipoConsulta, descricaoProjeto, data, horario, recaptchaToken } = req.body;
      
      // Validação dos campos
      if (!nome || !email || !telefone || !tipoConsulta || !descricaoProjeto || !data || !horario) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // Validação do reCAPTCHA
      if (recaptchaToken) {
        const recaptchaResponse = await axios.post(
          'https://www.google.com/recaptcha/api/siteverify',
          `secret=${functions.config().recaptcha.secret}&response=${recaptchaToken}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        
        if (!recaptchaResponse.data.success) {
          return res.status(400).json({ error: 'Validação reCAPTCHA falhou' });
        }
      }

      // Salva no Realtime Database
      const agendamentoRef = admin.database().ref('agendamentos').push();
      await agendamentoRef.set({
        nome,
        email,
        telefone,
        tipoConsulta,
        descricaoProjeto,
        data,
        horario,
        status: 'pendente',
        createdAt: admin.database.ServerValue.TIMESTAMP
      });

      // Envia e-mail de confirmação
      const transporter = await createTransporter();
      
      const mailOptions = {
        from: `Agendamento LeFul <${functions.config().gmail.email}>`,
        to: email,
        subject: `Confirmação de Agendamento - ${data} às ${horario}`,
        html: `
          <h2>Agendamento Confirmado!</h2>
          <p>Olá ${nome},</p>
          <p>Seu agendamento para consultoria de <strong>${tipoConsulta}</strong> foi confirmado para:</p>
          <p><strong>Data:</strong> ${data}</p>
          <p><strong>Horário:</strong> ${horario}</p>
          <p>Você receberá um link para a reunião via Zoom/Google Meet em breve.</p>
          <p>Caso precise reagendar ou cancelar, responda este e-mail.</p>
          <p>Atenciosamente,<br>Equipe LeFul Design</p>
        `
      };

      await transporter.sendMail(mailOptions);

      // Envia notificação para o admin
      await transporter.sendMail({
        from: `Agendamento LeFul <${functions.config().gmail.email}>`,
        to: functions.config().gmail.email,
        subject: `Novo Agendamento: ${nome} - ${data} às ${horario}`,
        html: `
          <h2>Novo Agendamento Recebido</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Tipo de Consultoria:</strong> ${tipoConsulta}</p>
          <p><strong>Data:</strong> ${data}</p>
          <p><strong>Horário:</strong> ${horario}</p>
          <p><strong>Descrição do Projeto:</strong></p>
          <p>${descricaoProjeto}</p>
        `
      });

      return res.status(200).json({ success: true });

    } catch (error) {
      console.error('Erro no processo de agendamento:', error);
      return res.status(500).json({ 
        error: 'Erro interno ao processar seu agendamento',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });
});