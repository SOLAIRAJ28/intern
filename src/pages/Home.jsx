import { Helmet } from 'react-helmet-async';
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
  FaUsers,
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaRocket,
  FaCube
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home | Shanruck Technologies</title>
        <meta name="description" content="Ignite passion, empower skills, and build careers with Shanruck Technologies. Explore our software capabilities and training programs." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Ignite passion.<br />
              <span className="highlight">Empower</span> skills. Build<br />
              <span className="highlight">careers</span>.
            </h1>
            <div className="hero-features">
              <div className="hero-features-row">
                <span className="feat-dot">•</span>
                <span className="feature-item">Training Programs</span>
                <span className="feat-dot">•</span>
                <span className="feature-item">Certification Programs</span>
                <span className="feat-dot">•</span>
                <span className="feature-item">Placement Support</span>
                
              </div>
              <div className="hero-features-row">
                <span className="feat-dot">•</span>
                <span className="feature-item">Career Development</span>
              </div>
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
          
          {/* Orbiting Icons Section */}
          <div className="orbit-container">
            {/* Outer orbit */}
            <div className="orbit orbit-outer">
              <div className="orbit-icon icon-1" style={{ '--icon-bg': '#fce7f3', '--icon-color': '#e83570' }}>
                <FaLaptopCode />
              </div>
              <div className="orbit-icon icon-2" style={{ '--icon-bg': '#fef3c7', '--icon-color': '#d97706' }}>
                <FaCertificate />
              </div>
              <div className="orbit-icon icon-3" style={{ '--icon-bg': '#f3f4f6', '--icon-color': '#1f2937' }}>
                <FaGraduationCap />
              </div>
              <div className="orbit-icon icon-4" style={{ '--icon-bg': '#fce7f3', '--icon-color': '#db2777' }}>
                <FaBriefcase />
              </div>
              <div className="orbit-icon icon-5" style={{ '--icon-bg': '#fdf2f8', '--icon-color': '#be185d' }}>
                <FaCube />
              </div>
              <div className="orbit-icon icon-6" style={{ '--icon-bg': '#fce7f3', '--icon-color': '#9d174d' }}>
                <FaRocket />
              </div>
            </div>
            
            {/* Inner orbit */}
            <div className="orbit orbit-inner">
              <div className="orbit-icon-inner inner-1" style={{ '--icon-bg': '#fef9c3', '--icon-color': '#ca8a04' }}>
                <FaChartLine />
              </div>
              <div className="orbit-icon-inner inner-2" style={{ '--icon-bg': '#ede9fe', '--icon-color': '#7c3aed' }}>
                <FaTrophy />
              </div>
              <div className="orbit-icon-inner inner-3" style={{ '--icon-bg': '#fee2e2', '--icon-color': '#dc2626' }}>
                <FaCode />
              </div>
              <div className="orbit-icon-inner inner-4" style={{ '--icon-bg': '#ccfbf1', '--icon-color': '#0d9488' }}>
                <FaProjectDiagram />
              </div>
            </div>
            
            {/* Center logo */}
            <div className="orbit-center">
              <img src={logo1} alt="Shanruck Technologies" className="center-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section">
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
      </section> */}

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
            <div className="journey-arrow"></div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaLaptopCode />
              </div>
              <h4>Practice</h4>
              <p>Hands-on coding</p>
            </div>
            <div className="journey-arrow"></div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaProjectDiagram />
              </div>
              <h4>Build Projects</h4>
              <p>Real-world apps</p>
            </div>
            <div className="journey-arrow"></div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaCertificate />
              </div>
              <h4>Get Certified</h4>
              <p>Official recognition</p>
            </div>
            <div className="journey-arrow"></div>
            
            <div className="journey-step">
              <div className="step-icon">
                <FaBriefcase />
              </div>
              <h4>Get Placed</h4>
              <p>Land your dream job</p>
            </div>
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
            <h3>Certification</h3>
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
