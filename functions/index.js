const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// Configuração do SendGrid (use environment variables ou functions.config())
sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'AIzaSyDWfwBNZrUrnXEKtNOdQOLpNhAdJyGCnl4');

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  // Configuração de CORS
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }

  const msg = {
    to: 'leful.contato@gmail.com', // Substitua pelo seu e-mail
    from: 'notificacao@leful.com',
    subject: `Novo contato de ${nome}`,
    html: `
      <h3>Nova mensagem de contato</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro no SendGrid:', error.response?.body || error.message);
    return res.status(500).json({ error: 'Falha ao enviar e-mail' });
  }
});