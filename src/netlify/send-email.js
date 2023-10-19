const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);
  const { name, email, message } = data;

  // Access environment variables
  const emailUser = 'your-email@gmail.com'; // Replace with your email
  const emailPassword = process.env.EMAIL_PASSWORD;

  // Create a transporter using your email service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  // Email configuration
  const mailOptions = {
    from: emailUser,
    to: 'curtis@cstudio.ca', // Your email address
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
