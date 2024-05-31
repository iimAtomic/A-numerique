// app/api/sendGrid/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Configurez le transporteur avec vos informations SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre adresse Gmail
        pass: process.env.GMAIL_PASS, // Votre mot de passe ou App Password
      },
    });

    // Définissez les options de l'e-mail
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: message,
      html: `<strong>Destinataire : ${email} <br> Sujet choisis : <br/>Message : ${message}</strong>`,
    };

    // Envoyez l'e-mail
    await transporter.sendMail(mailOptions);

    console.log('Email envoyé:', mailOptions); // Log du message envoyé
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error); // Log de l'erreur
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
