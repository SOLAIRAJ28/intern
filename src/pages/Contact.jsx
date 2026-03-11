import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaPaperPlane,
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

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const getEmailError = (value) => {
    if (!value.trim()) return 'Email is required';
    if (!validateEmail(value)) return 'Enter a valid email';
    return '';
  };

  const getPhoneError = (value) => {
    if (!value.trim()) return 'Phone number is required';
    if (!/^\d+$/.test(value)) return 'Only numbers allowed';
    if (value.length !== 10) return 'Enter exactly 10 digits';
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
    
    // For phone field, only allow numbers and limit to 10 digits
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormData({ ...formData, [name]: numbersOnly });
        setFieldErrors(prev => ({ ...prev, phone: numbersOnly ? getPhoneError(numbersOnly) : '' }));
      }
      if (errors.length > 0) setErrors([]);
      return;
    }
    
    setFormData({ ...formData, [name]: value });

    if (name === 'email') setFieldErrors(prev => ({ ...prev, email: value ? getEmailError(value) : '' }));
    if (errors.length > 0) setErrors([]);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    if (field === 'email') setFieldErrors(prev => ({ ...prev, email: getEmailError(formData.email) }));
    if (field === 'phone') setFieldErrors(prev => ({ ...prev, phone: getPhoneError(formData.phone) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess(false);

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors([]), 5000);
      return;
    }

    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      // Add timeout to prevent long waits
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 40000); // 40 second timeout

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, phone: `+91${formData.phone}` }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setTouched({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setErrors(data.errors || [data.message || 'Failed to send enquiry. Please try again.']);
        setTimeout(() => setErrors([]), 8000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.name === 'AbortError') {
        setErrors(['Request timed out. Please check your internet connection and try again.']);
      } else {
        setErrors(['Network error. Please check if the server is running and try again.']);
      }
      setTimeout(() => setErrors([]), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {success && (
        <div className="message-banner success-banner">
          <FaCheckCircle className="message-icon" />
          <div className="message-content">
            <strong>Success!</strong>
            <p>Your enquiry has been successfully submitted. We will contact you soon.</p>
          </div>
        </div>
      )}

      {errors.length > 0 && (
        <div className="message-banner error-banner">
          <FaExclamationCircle className="message-icon" />
          <div className="message-content">
            <strong>Please fix the following errors:</strong>
            <ul>
              {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>
          </div>
        </div>
      )}

      <div className="contact-container-modern">
        <div className="contact-header-modern">
          <span className="badge">Get in Touch</span>
          <h1>Let's Connect & <span>Collaborate</span></h1>
        </div>

        <div className="contact-card-modern">
          
          <div className="contact-info-panel">
            <div className="info-panel-content">
              <h3>Contact Info</h3>
              <p className="subtitle">Fill up the form and our friendly team will get back to you within 24 hours.</p>

              <div className="modern-contact-items">
                <div className="modern-info-item">
                  <div className="modern-info-icon"><FaPhoneAlt /></div>
                  <div className="modern-info-text">
                    <h4>Phone Number</h4>
                    <p>+91 72004 31181</p>
                  </div>
                </div>

                <div className="modern-info-item">
                  <div className="modern-info-icon"><FaEnvelope /></div>
                  <div className="modern-info-text">
                    <h4>Email Address</h4>
                    <p>info@shanrucktechnologies.in</p>
                  </div>
                </div>

                <div className="modern-info-item">
                  <div className="modern-info-icon"><FaMapMarkerAlt /></div>
                  <div className="modern-info-text">
                    <h4>Our Location</h4>
                    <p>105 Anna Nagar, Vellakoil<br />Tiruppur - 638111, India</p>
                  </div>
                </div>
              </div>

              <div className="modern-social-links">
                <h4>Follow Our Journey</h4>
                <div className="social-icons-modern">
                  <a href="#" className="social-icon-modern" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="https://www.linkedin.com/company/shanruck-technologies/" className="social-icon-modern" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  <a href="https://www.instagram.com/shanruck_technologies" className="social-icon-modern" aria-label="Instagram"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group-modern">
                  <label className="input-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="Enter full name"
                    disabled={loading}
                    className="input-modern"
                  />
                </div>
                <div className="form-group-modern">
                  <label className="input-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="name@example.com"
                    disabled={loading}
                    className={`input-modern ${touched.email && fieldErrors.email ? 'input-error' : touched.email && formData.email ? 'input-success' : ''}`}
                  />
                  {touched.email && fieldErrors.email && <span className="error-msg">{fieldErrors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-modern">
                  <label className="input-label">Phone Number *</label>
                  <div className={`phone-wrapper-modern ${touched.phone && fieldErrors.phone ? 'input-error' : touched.phone && formData.phone ? 'input-success' : ''}`}>
                    <div className="cc-display">
                      <img 
                        src="https://flagcdn.com/w20/in.png" 
                        alt="India" 
                        className="cc-flag-img-modern" 
                      />
                      <span className="cc-code">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      placeholder="0000000000"
                      disabled={loading}
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                  {touched.phone && fieldErrors.phone && <span className="error-msg">{fieldErrors.phone}</span>}
                </div>
                
                <div className="form-group-modern">
                  <label className="input-label">Interested Course *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    onBlur={() => handleBlur('course')}
                    disabled={loading}
                    className="input-modern"
                  >
                    <option value="" disabled hidden>Select an option</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Python">Python Project-Based</option>
                    <option value="WordPress">WordPress Development</option>
                    <option value="Java">Java Programming</option>
                    <option value="JavaScript Frameworks">JS Frameworks</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>

              <div className="form-group-modern" style={{flex: 1}}>
                <label className="input-label">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="How can we help you achieve your goals?"
                  disabled={loading}
                  className="input-modern"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-modern" disabled={loading}>
                {loading ? <><span className="spinner"></span> <span>Sending...</span></> : <><FaPaperPlane /> <span>Send Message</span></>}
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="map-section-modern">
        <div className="map-wrapper-modern">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=105+Anna+Nagar,+Vellakoil,+Tiruppur,+Tamil+Nadu+638111,+India&zoom=17`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shanruck Technologies Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
