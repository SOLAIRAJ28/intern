import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaPython, 
  FaWordpress, 
  FaJava, 
  FaReact,
  FaPalette,
  FaShieldAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Full Stack Web Development',
      description: 'Master both front-end and back-end technologies. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and build complete web applications from scratch.',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      color: '#667eea'
    },
    {
      id: 2,
      icon: <FaPython />,
      title: 'Python Project-Based Learning',
      description: 'Learn Python programming through real-world projects. Cover fundamentals, data structures, OOP, web scraping, automation, and build practical applications.',
      duration: '4 Months',
      level: 'Beginner Friendly',
      color: '#306998'
    },
    {
      id: 3,
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description: 'Build professional websites using WordPress. Learn theme customization, plugin development, SEO optimization, and create responsive, feature-rich websites.',
      duration: '3 Months',
      level: 'Beginner Friendly',
      color: '#21759b'
    },
    {
      id: 4,
      icon: <FaJava />,
      title: 'Java Programming',
      description: 'Master Java fundamentals and advanced concepts. Learn OOP, collections, multithreading, JDBC, servlets, and develop enterprise-level applications.',
      duration: '5 Months',
      level: 'Beginner to Advanced',
      color: '#007396'
    },
    {
      id: 5,
      icon: <FaReact />,
      title: 'JavaScript Frameworks (Angular & React)',
      description: 'Deep dive into modern JavaScript frameworks. Build dynamic single-page applications using Angular and React with hands-on projects.',
      duration: '4 Months',
      level: 'Intermediate',
      color: '#61dafb'
    },
    {
      id: 6,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Learn user interface and experience design principles. Master Figma, design thinking, prototyping, user research, and create stunning digital experiences.',
      duration: '3 Months',
      level: 'Beginner Friendly',
      color: '#ff6b6b'
    },
    {
      id: 7,
      icon: <FaShieldAlt />,
      title: 'Cybersecurity Fundamentals',
      description: 'Build a strong foundation in cybersecurity. Learn network security, ethical hacking, cryptography, vulnerability assessment, and security best practices.',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      color: '#e74c3c'
    }
  ];

  return (
    <div className="programs">
      {/* Programs Grid */}
      <section className="programs-section">
        <div className="programs-container">
          <div className="section-intro">
            <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>Our Training Programs</h1>
            <h2 style={{fontSize: '2rem', fontWeight: '400', color: '#666', marginBottom: '20px', marginTop: '0'}}>Choose Your Path</h2>
            <p>
              All our programs include hands-on projects, expert mentorship, certification, and placement assistance
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-icon" style={{ background: program.color }}>
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-info">
                  <div className="info-item">
                    <FaClock />
                    <span>{program.duration}</span>
                  </div>
                  <div className="program-level">{program.level}</div>
                </div>

                <Link to="/contact" className="learn-more-btn">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="benefits-section">
        <h2>What You'll Get With Every Program</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-number">01</div>
            <h3>Live Interactive Classes</h3>
            <p>Learn from industry experts through engaging live sessions with Q&A</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">02</div>
            <h3>Hands-On Projects</h3>
            <p>Build real-world projects to add to your portfolio and showcase your skills</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">03</div>
            <h3>Expert Mentorship</h3>
            <p>Get personalized guidance and support from experienced professionals</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">04</div>
            <h3>Official Certification</h3>
            <p>Receive recognized certificates upon successful program completion</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">05</div>
            <h3>Career Support</h3>
            <p>Resume building, interview prep, and dedicated placement assistance</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">06</div>
            <h3>Lifetime Access</h3>
            <p>Get lifetime access to course materials and community support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who have transformed their careers with us</p>
          <Link to="/contact" className="cta-button">
            Enroll Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
