// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Configurer Nodemailer avec ton service d'envoi d'e-mails
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // Définis ces variables dans ton fichier .env
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      let info = await transporter.sendMail({
        from: '"Expediteur" <foo@example.com>', // L'adresse de l'expéditeur
        to: email, // Liste des destinataires
        subject: subject, // Sujet du mail
        text: message, // Corps du texte
        // html: "<b>Hello world?</b>", // Corps du mail en HTML
      });

      console.log("Message sent: %s", info.messageId);
      return res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
      console.error("Erreur d'envoi d'email:", error);
      return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
  } else {
    // Gère les méthodes non autorisées
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
