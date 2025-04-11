const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// Inicialização correta do Admin SDK
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.sendContactEmail = functions
  .runWith({
    timeoutSeconds: 60,
    memory: '512MB'
  })
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      try {
        if (req.method !== 'POST') {
          return res.status(405).send('Method Not Allowed');
        }

        const { nome, email, mensagem, recaptchaToken } = req.body;
        
        if (!nome || !email || !mensagem) {
          return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

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

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });

      } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.status(500).json({ error: 'Erro interno ao processar sua mensagem' });
      }
    });
  });