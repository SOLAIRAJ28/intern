import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaCertificate, 
  FaBriefcase, 
  FaChartLine,
  FaArrowRight,
  FaBook,
  FaProjectDiagram,
  FaAward,
  FaUsers
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Ignite passion. <span className="highlight">Empower</span> skills. Build <span className="highlight">careers</span>.
            </h1>
            <div className="hero-features">
              <span className="feature">Training Programs</span>
              <span className="divider">•</span>
              <span className="feature">Certification Programs</span>
              <span className="divider">•</span>
              <span className="feature">Placement Support</span>
              <span className="divider">•</span>
              <span className="feature">Career Development</span>
            </div>
            <div className="hero-buttons">
              <Link to="/programs" className="btn btn-primary">
                View Programs <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <FaLaptopCode className="card-icon" />
              <p>Learn</p>
            </div>
            <div className="floating-card card-2">
              <FaProjectDiagram className="card-icon" />
              <p>Build</p>
            </div>
            <div className="floating-card card-3">
              <FaAward className="card-icon" />
              <p>Succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-card">
            <FaLaptopCode className="stat-icon" />
            <h3>7+</h3>
            <p>Programs Offered</p>
          </div>
          <div className="stat-card">
            <FaBriefcase className="stat-icon" />
            <h3>85%</h3>
            <p>Placement Rate</p>
          </div>
          <div className="stat-card">
            <FaCertificate className="stat-icon" />
            <h3>100%</h3>
            <p>Certification</p>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight-section">
        <div className="highlight-content">
          <h2>Ready to take your career to the next level?</h2>
          <p className="highlight-description">
            We provide the support you need to succeed with industry-relevant training programs, 
            real-world projects, and expert mentorship.
          </p>
          
          {/* Learning Journey Timeline */}
          <div className="learning-journey">
            <div className="journey-step">
              <div className="step-icon">
                <FaBook />
              </div>
              <h4>Learn</h4>
              <p>Master fundamentals</p>
            </div>
            <div className="journey-arrow">→</div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaLaptopCode />
              </div>
              <h4>Practice</h4>
              <p>Hands-on coding</p>
            </div>
            <div className="journey-arrow">→</div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaProjectDiagram />
              </div>
              <h4>Build Projects</h4>
              <p>Real-world apps</p>
            </div>
            <div className="journey-arrow">→</div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaCertificate />
              </div>
              <h4>Get Certified</h4>
              <p>Official recognition</p>
            </div>
            <div className="journey-arrow">→</div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaBriefcase />
              </div>
              <h4>Get Placed</h4>
              <p>Land your dream job</p>
            </div>
          </div>

          <div className="highlight-buttons">
            <Link to="/programs" className="btn btn-primary">
              View Programs
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Shanruck Technologies?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaLaptopCode />
            </div>
            <h3>Industry-Relevant Curriculum</h3>
            <p>Learn the latest technologies and frameworks used by top companies worldwide.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>Expert Mentorship</h3>
            <p>Get guidance from experienced professionals with years of industry experience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaProjectDiagram />
            </div>
            <h3>Real-World Projects</h3>
            <p>Build portfolio-worthy projects that showcase your skills to potential employers.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaBriefcase />
            </div>
            <h3>Placement Support</h3>
            <p>Dedicated career support team to help you land your dream job after completion.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaCertificate />
            </div>
            <h3>Official Certification</h3>
            <p>Receive recognized certificates upon successful completion of your program.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Career Growth</h3>
            <p>Continuous learning opportunities to advance your career in technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
