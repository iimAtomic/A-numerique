import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Remplacez par votre serveur SMTP
    port: 587,
    secure: false, // true pour 465, false pour les autres ports
    auth: {
      user: 'test@example.com', // votre adresse email
      pass: 'password', // votre mot de passe email
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'contact@example.com', // Destinataire
      subject: subject,
      html: `<p>${message}</p>`,
    });

    console.log('Message envoyé', emailRes.messageId);
    res.status(200).json({ error: "" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
};
