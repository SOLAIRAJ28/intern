import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'https://shanrucktecknologies-frontend.onrender.com',
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Check if email credentials are configured
const isEmailConfigured = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: parseInt(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 5000, // Reduced from 10s to 5s
  greetingTimeout: 3000,   // 3s for SMTP greeting
  socketTimeout: 5000,     // 5s for socket operations
  pool: true,              // Use connection pooling for faster subsequent sends
  maxConnections: 5,       // Max 5 connections in pool
});

// Verify transporter configuration
if (isEmailConfigured) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email transporter verification failed:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
} else {
  console.log('⚠️  Email credentials not configured. Queries will be logged but not emailed.');
  console.log('   To enable email, create a .env file with EMAIL_USER and EMAIL_PASS');
}

// Validation helper functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

// API endpoint for contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validation
    const errors = [];

    if (!name || name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!email || !validateEmail(email)) {
      errors.push('Valid email is required');
    }

    if (!phone || !validatePhone(phone)) {
      errors.push('Valid phone number is required (minimum 10 digits)');
    }

    if (!course || course.trim().length === 0) {
      errors.push('Please select a course');
    }

    if (!message || message.trim().length === 0) {
      errors.push('Message is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: errors,
      });
    }

    // Email content
    const emailContent = `
New Enquiry from Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Course Interested: ${course}
Message: ${message}

---
This enquiry was submitted on ${new Date().toLocaleString()}
    `.trim();

    // Email options
    const mailOptions = {
      from: `"Shanruck Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'info@shanrucktechnologies.in',
      subject: 'New Enquiry from Website',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">New Enquiry from Website</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Phone:</strong> <a href="tel:${phone}" style="color: #2563eb;">${phone}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Course Interested:</strong> ${course}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #1e293b;">Message:</strong></p>
            <p style="margin: 10px 0; color: #475569; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p style="color: #64748b; font-size: 14px; margin: 0;">
            This enquiry was submitted on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send email
    // Send email asynchronously (don't block response)
    transporter.sendMail(mailOptions)
      .then(() => {
        console.log('✅ Email sent successfully to:', process.env.EMAIL_TO);
      })
      .catch((emailError) => {
        // Log the enquiry even if email fails (useful for development/debugging)
        console.error('❌ Email sending failed, but enquiry received:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(emailContent);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.error('Email error:', emailError.message);
      });

    // Success response (immediate - don't wait for email)
    res.status(200).json({
      success: true,
      message: 'Your enquiry has been successfully submitted. We will contact you soon.',
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later or contact us directly.',
      error: error.message,
    });
  }
});

// API endpoint for chatbot query submission
app.post('/api/chatbot-query', async (req, res) => {
  try {
    const { name, email, phone, query } = req.body;

    // Validation
    const errors = [];

    if (!name || name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (!email || !validateEmail(email)) {
      errors.push('Valid email is required');
    }

    if (!phone || !validatePhone(phone)) {
      errors.push('Valid phone number is required (minimum 10 digits)');
    }

    if (!query || query.trim().length === 0) {
      errors.push('Query is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: errors,
      });
    }

    // Email content for chatbot query
    const emailContent = `
New Query from Chatbot

Name: ${name}
Email: ${email}
Phone: ${phone}
Query: ${query}

---
This query was submitted via chatbot on ${new Date().toLocaleString()}
    `.trim();

    // Email options
    const mailOptions = {
      from: `"Shanruck Chatbot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'info@shanrucktechnologies.in',
      subject: 'New Query from Chatbot',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #10b981; border-bottom: 3px solid #10b981; padding-bottom: 10px;">🤖 New Query from Chatbot</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #1e293b;">Phone:</strong> <a href="tel:${phone}" style="color: #2563eb;">${phone}</a></p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #10b981;">
            <p style="margin: 0;"><strong style="color: #1e293b;">Query:</strong></p>
            <p style="margin: 10px 0; color: #475569; white-space: pre-wrap;">${query}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p style="color: #64748b; font-size: 14px; margin: 0;">
            This query was submitted via chatbot on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send email if configured, otherwise just log
    if (isEmailConfigured) {
      // Send email asynchronously (don't block response)
      transporter.sendMail(mailOptions)
        .then(() => {
          console.log('Chatbot query email sent successfully');
        })
        .catch((error) => {
          console.error('Error sending chatbot query email:', error);
        });
    } else {
      console.log('📝 New Chatbot Query Received (Email not configured):');
      console.log('   Name:', name);
      console.log('   Email:', email);
      console.log('   Phone:', phone);
      console.log('   Query:', query);
      console.log('   Time:', new Date().toLocaleString());
      console.log('---');
    }

    // Success response (immediate - don't wait for email)
    res.status(200).json({
      success: true,
      message: 'Your query has been submitted successfully. Our team will contact you soon.',
    });
  } catch (error) {
    console.error('Error sending chatbot query email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit query. Please try again later.',
      error: error.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/contact`);
});
