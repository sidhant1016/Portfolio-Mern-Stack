const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// Transporter configuration using SendGrid
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID, // Ensure your .env file has API_SENDGRID defined
    },
  })
);

// Controller function to handle sending email
const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Basic validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields (name, email, msg)",
      });
    }

    // Sending email using Nodemailer transporter
    await transporter.sendMail({
      to: process.env.EMAIL_TO, // Change this to the recipient email address
      from: process.env.EMAIL_FROM, // Change this to your sending email address
      subject: "Regarding Mern Portfolio App", // Email subject
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    // Respond with success message
    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
