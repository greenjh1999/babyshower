const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { name, message } = JSON.parse(event.body);

  console.log('Received RSVP data:', { name, message });

  const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: 'starttls',
  tls: {
    rejectUnauthorized: false,
  },
});


  const mailOptions = {
    from: 'no_reply_john_green@outlook.com',
    to: 'johngreenmauhs12345@gmail.com',
    subject: `New Babyshower RSVP from ${name}`,
    text: `${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return {
      statusCode: 200,
      body: 'Email Sent!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
