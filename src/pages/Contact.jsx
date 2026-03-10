import { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
];
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle
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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({ email: '', phone: '' });
  const [countryCode, setCountryCode] = useState('India');

  const selectedCountry = COUNTRY_CODES.find(c => c.country === countryCode) || COUNTRY_CODES[0];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const getEmailError = (value) => {
    if (!value.trim()) return 'Email is required';
    if (!validateEmail(value)) return 'Enter a valid email (e.g. name@example.com)';
    return '';
  };

  const getPhoneError = (value) => {
    if (!value.trim()) return 'Phone number is required';
    if (!/^[\d\s\-()]+$/.test(value)) return 'Phone number can only contain digits, -, spaces';
    const digits = value.replace(/[^\d]/g, '');
    if (digits.length < 6 || digits.length > 15) return 'Enter a valid phone number (6–15 digits)';
    return '';
  };

  const validateForm = () => {
    const newErrors = [];

    if (!formData.name.trim()) newErrors.push('Name is required');

    const emailErr = getEmailError(formData.email);
    if (emailErr) newErrors.push(emailErr);

    const phoneErr = getPhoneError(formData.phone);
    if (phoneErr) newErrors.push(phoneErr);

    if (!formData.course) newErrors.push('Please select a course');
    if (!formData.message.trim()) newErrors.push('Message is required');

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live inline validation for email and phone
    if (name === 'email') {
      setFieldErrors(prev => ({ ...prev, email: value ? getEmailError(value) : '' }));
    }
    if (name === 'phone') {
      setFieldErrors(prev => ({ ...prev, phone: value ? getPhoneError(value) : '' }));
    }

    if (errors.length > 0) setErrors([]);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    if (field === 'email') {
      setFieldErrors(prev => ({ ...prev, email: getEmailError(formData.email) }));
    }
    if (field === 'phone') {
      setFieldErrors(prev => ({ ...prev, phone: getPhoneError(formData.phone) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setErrors([]);
    setSuccess(false);

    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, phone: `${selectedCountry.code}${formData.phone}` }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
        setTouched({});
        
        // Scroll to top to see success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Hide success message after 8 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 8000);
      } else {
        setErrors(data.errors || ['Failed to send enquiry. Please try again.']);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(['Network error. Please check if the server is running and try again.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      {/* Success Message */}
      {success && (
        <div className="message-banner success-banner">
          <FaCheckCircle className="message-icon" />
          <div className="message-content">
            <strong>Success!</strong>
            <p>Your enquiry has been successfully submitted. We will contact you soon.</p>
          </div>
        </div>
      )}

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="message-banner error-banner">
          <FaExclamationCircle className="message-icon" />
          <div className="message-content">
            <strong>Please fix the following errors:</strong>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Section Header */}
          <div className="section-header">
            <div className="header-badge">Contact Us</div>
            <h1>Let's Connect</h1>
            <p>Ready to start your tech journey? Reach out to us and we'll help you find the perfect program</p>
          </div>
          
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Get In Touch With Us</h2>
                <p>We'd love to hear from you. Submit your enquiry and our team will respond within 24 hours.</p>
              </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="Enter your full name"
                  disabled={loading}
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
                  onBlur={() => handleBlur('email')}
                  placeholder="Enter your email (e.g. name@example.com)"
                  disabled={loading}
                  className={touched.email && fieldErrors.email ? 'input-error' : touched.email && !fieldErrors.email && formData.email ? 'input-success' : ''}
                />
                {touched.email && fieldErrors.email && (
                  <span className="field-error-msg">&#9888; {fieldErrors.email}</span>
                )}
                {touched.email && !fieldErrors.email && formData.email && (
                  <span className="field-success-msg">&#10003; Valid email</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div className={`phone-input-wrapper ${touched.phone && fieldErrors.phone ? 'input-error' : touched.phone && !fieldErrors.phone && formData.phone ? 'input-success' : ''}`}>
                  <div className="cc-display">
                    <span className="cc-flag">{selectedCountry.flag}</span>
                    <select
                      className="country-code-select"
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      disabled={loading}
                      title="Select country code"
                    >
                      {COUNTRY_CODES.map((c, i) => (
                        <option key={i} value={c.country}>
                          {c.flag} {c.code} {c.country}
                        </option>
                      ))}
                    </select>
                    <span className="cc-code">{selectedCountry.code}</span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    placeholder="Enter phone number"
                    disabled={loading}
                    maxLength={10}
                  />
                </div>
                {touched.phone && fieldErrors.phone && (
                  <span className="field-error-msg">&#9888; {fieldErrors.phone}</span>
                )}
                {touched.phone && !fieldErrors.phone && formData.phone && (
                  <span className="field-success-msg">&#10003; Valid phone number</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="course">Course Interested In *</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onBlur={() => handleBlur('course')}
                  disabled={loading}
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
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows="5"
                  placeholder="Tell us more about your requirements..."
                  disabled={loading}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <div className="info-header">
              <h2>Contact Information</h2>
              <p>Get in touch with us through any of these channels</p>
            </div>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-card-content">
                  <h3>Our Location</h3>
                  <p>105 Anna Nagar, Vellakoil<br />Tiruppur - 638111</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-card-content">
                  <h3>Phone Number</h3>
                  <p>+91 7200431181</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-card-content">
                  <h3>Email Address</h3>
                  <p>info@shanrucktechnologies.in</p>
                </div>
              </div>

              <div className="info-card social-card">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebookF />
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=105+Anna+Nagar,+Vellakoil,+Tiruppur,+Tamil+Nadu+638111,+India&zoom=17`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shanruck Technologies Location - 105 Anna Nagar, Vellakoil, Tiruppur"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
