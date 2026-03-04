import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="page-title-center">
          <h1>Get In Touch</h1>
          <p className="subtitle">We're here to help you start your learning journey. Reach out to us today!</p>
        </div>
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Course Interested In *</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Python">Python Project-Based Learning</option>
                  <option value="WordPress">WordPress Development</option>
                  <option value="Java">Java Programming</option>
                  <option value="JavaScript Frameworks">JavaScript Frameworks (Angular & React)</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cybersecurity">Cybersecurity Fundamentals</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <h2>Contact Information</h2>
            <p className="info-subtitle">Get in touch with us through any of these channels</p>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Our Location</h3>
                <p>123 Tech Street, Innovation Hub<br />Bangalore, Karnataka 560001<br />India</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <h3>Phone Number</h3>
                <p>+91 9876543210<br />+91 9876543211</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h3>Email Address</h3>
                <p>info@shanrucktech.com<br />support@shanrucktech.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="social-connect">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8476924576384!2d77.59369431482161!3d12.971598890867445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shanruck Technologies Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
