import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const USER = process.env.SMTP_USER;
  const PASS = process.env.SMTP_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server host
    port: 465, // Replace with your SMTP server port
    secure: true, // true for 465, false for other ports
    auth: {
      user: USER, // Your SMTP user
      pass: PASS, // Your SMTP password
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: USER,
      to: "mirimarkovitzbl@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email. Your message was not sent.",
    });
  }
}
