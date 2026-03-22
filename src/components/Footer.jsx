import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
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
            <a href="https://www.linkedin.com/company/shanruck-technologies/" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/shanruck_technologies?igsh=bW1wYng0MGFod28y" className="social-icon" aria-label="Instagram">
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
            <li><Link to="/programs">Full Stack</Link></li>
            <li><Link to="/programs">Python</Link></li>
            {/* <li><Link to="/programs">WordPress</Link></li> */}
            <li><Link to="/programs">Java</Link></li>
            <li><Link to="/programs">UI/UX</Link></li>
            <li><Link to="/programs">Others</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/search/?api=1&query=105+Anna+Nagar+Vellakoil+Tiruppur+638111"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <p>105 Anna Nagar, Vellakoil <br/> Tiruppur - 638111<br /></p>
              </a>
            </div>
            <div className="contact-item">
              <FaPhone />
              <p>+91 9944291189<br />+91 7200431189</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p>info@shanrucktechnologies.in</p>
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
