const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Root route for basic welcome message
app.get('/', (req, res) => {
    res.send('Welcome to My Server!');
 });

 

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  host: 'smtp.gmail.com',
  port:587,
  secure:false,
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.e_key // Your email password
  }
});

// Handle POST request
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  console.log(firstName,lastName,email,phone,message)
  try {
    await transporter.sendMail({
      from: 'akshitapatidar19@gmail.com', // Sender address
      to: ['akshitapatidar2000@gmail.com','patidar19@csu.fullerton.edu'], // List of receivers
      subject: 'New Contact Form Submission', // Subject line
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>` // HTML body
    });
    res.status(200).json({ code: 200, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: 'Failed to send email' });
  }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
