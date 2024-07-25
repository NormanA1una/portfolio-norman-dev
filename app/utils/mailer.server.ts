import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (data: EmailData) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: data.email,
    to: process.env.PERSONAL_EMAIL,

    subject: `Information about service required.`,
    html: `<div>
    <p style="color: #050505; font-size: 36px; font-weight: 700;">Hello!</p>
    <p style="font-size: 24px; font-weight: 600; color: #050505;">
    I am interested in your services!
    </p>
    <p style="font-size: 24px; font-weight: 600; color: #050505;">
    Here are my Contact Details:
    </p>
    
      <ul
      style="font-size: 24px; color: #050505;"
      >
        <li style="color: #050505;"><strong>Name:</strong> ${data.name}</li>
        <li style="color: #050505;"><strong>Email:</strong> ${data.email}</li>
        <li style="color: #050505;"><strong>Message:</strong> ${data.message}</li>
      </ul>
    

      <p style="font-size: 24px; color: #050505; font-weight: 600;">Thank you so much! I hope we talk soon! 🧾</p>

    </div>
  </div>`,
  };

  const message = await transporter.sendMail(mailOptions);
  const confirmRes = message.response.match(/\bOK\b/);
  const messageOk = confirmRes ? confirmRes[0] : undefined;

  if (messageOk === "OK") {
    return new Response(
      JSON.stringify({
        message: "success",
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
      }),
      { status: 500 }
    );
  }
};
