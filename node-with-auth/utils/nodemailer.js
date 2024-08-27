import nodeMailer from "nodemailer";

export const userNodemailer = (data) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    type: "SMTP",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: `"GCB" <${process.env.EMAIL}>`,
    to: data.email,
    subject: data.subject,
    html: data.html,
  };
  transporter.sendMail(mailOptions, (err, info) => {});
};

export const adminNodemailer = (data) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    type: "SMTP",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: data.subject,
    html: data.html,
  };
  transporter.sendMail(mailOptions, (err, info) => {});
};
