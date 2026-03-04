import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shanruck Technologies</h3>
          <p>
            Empowering individuals with industry-relevant skills and career support 
            to build successful futures in technology.
          </p>
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

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/learners">Learners</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><Link to="/programs">Full Stack Web Development</Link></li>
            <li><Link to="/programs">Python</Link></li>
            <li><Link to="/programs">WordPress</Link></li>
            <li><Link to="/programs">Java</Link></li>
            <li><Link to="/programs">UI/UX Design</Link></li>
            <li><Link to="/programs">Cybersecurity</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>123 Tech Street, Innovation Hub<br />Bangalore, Karnataka 560001</p>
            </div>
            <div className="contact-item">
              <FaPhone />
              <p>+91 9876543210</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p>info@shanrucktech.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shanruck Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
