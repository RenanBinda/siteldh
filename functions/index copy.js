const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

// Configuração do transporte de email (substitua pelas suas credenciais)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // 1. Verificar método HTTP
      if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
      }

      // 2. Validar reCAPTCHA
      const { nome, email, mensagem, recaptchaToken } = req.body;
      
      if (!recaptchaToken) {
        return res.status(400).json({ error: 'Token reCAPTCHA ausente' });
      }

      // Verificar com a API do Google
      const recaptchaResponse = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: functions.config().recaptcha.secret, // Sua chave secreta
            response: recaptchaToken
          }
        }
      );

      if (!recaptchaResponse.data.success) {
        console.error('Erro reCAPTCHA:', recaptchaResponse.data);
        return res.status(400).json({ 
          error: 'Falha na verificação reCAPTCHA',
          details: recaptchaResponse.data['error-codes'] 
        });
      }

      // 3. Validar outros campos
      if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // 4. Enviar email
      const mailOptions = {
        from: `"Formulário de Contato" <${functions.config().gmail.email}>`,
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

      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });

    } catch (error) {
      console.error('Erro ao processar contato:', error);
      return res.status(500).json({ error: 'Erro interno ao processar sua mensagem' });
    }
  });
});