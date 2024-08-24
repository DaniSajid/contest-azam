import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ammarmalik8583@gmail.com", //reciever gmail address
    pass: process.env.APP_PASSWORD, //receiver gamil password
  },
});

const handleContact = async (req, res) => {
  const { name, email, phoneno, subject, message } = req.body;
  const info = transporter.sendMail(
    {
      from: name,
      email,
      to: "ammarmalik8583@gmail.com,daniyalsajid128@gmail.com",
      subject: subject,
      text: subject,
      html: `<p>${message}</p>`,
    },
    (error) => {
      res.status(500).json({ message: "Error sending message!", error });
    }
  );
  console.log("Message sent: %s", info.messageId);
};

export { handleContact };
