import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaCode, 
  FaPython, 
  FaWordpress, 
  FaJava, 
  FaReact,
  FaPalette,
  FaShieldAlt,
  FaClock,
  FaArrowLeft,
  FaCheckCircle,
  FaBook,
  FaLaptopCode
} from 'react-icons/fa';
import './ProgramDetail.css';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const programsData = {
    1: {
      icon: <FaCode />,
      title: 'Full Stack Web Development',
      description: 'Master both front-end and back-end technologies. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and build complete web applications from scratch.',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      color: '#667eea',
      modules: [
        {
          id: 1,
          title: 'Module 1: HTML & CSS Fundamentals',
          topics: ['HTML5 Structure & Semantics', 'CSS3 Styling & Layouts', 'Flexbox & Grid', 'Responsive Design', 'CSS Animations']
        },
        {
          id: 2,
          title: 'Module 2: JavaScript Essentials',
          topics: ['JavaScript Fundamentals', 'DOM Manipulation', 'ES6+ Features', 'Async Programming', 'APIs & Fetch']
        },
        {
          id: 3,
          title: 'Module 3: React Framework',
          topics: ['React Components', 'State & Props', 'Hooks', 'React Router', 'Context API']
        },
        {
          id: 4,
          title: 'Module 4: Backend with Node.js',
          topics: ['Node.js Basics', 'Express.js Framework', 'RESTful APIs', 'Authentication & Authorization', 'File Handling']
        },
        {
          id: 5,
          title: 'Module 5: Database & MongoDB',
          topics: ['MongoDB Basics', 'Mongoose ODM', 'CRUD Operations', 'Database Design', 'Data Validation']
        },
        {
          id: 6,
          title: 'Module 6: Full Stack Project',
          topics: ['Project Planning', 'Frontend Integration', 'Backend Development', 'Deployment', 'Best Practices']
        }
      ]
    },
    2: {
      icon: <FaPython />,
      title: 'Python Project-Based Learning',
      description: 'Learn Python programming through real-world projects. Cover fundamentals, data structures, OOP, web scraping, automation, and build practical applications.',
      duration: '4 Months',
      level: 'Beginner Friendly',
      color: '#306998',
      modules: [
        {
          id: 1,
          title: 'Module 1: Python Fundamentals',
          topics: ['Python Syntax & Basics', 'Data Types & Variables', 'Control Flow', 'Functions', 'Modules & Packages']
        },
        {
          id: 2,
          title: 'Module 2: Data Structures',
          topics: ['Lists & Tuples', 'Dictionaries & Sets', 'String Methods', 'List Comprehensions', 'File Operations']
        },
        {
          id: 3,
          title: 'Module 3: Object-Oriented Programming',
          topics: ['Classes & Objects', 'Inheritance', 'Encapsulation', 'Polymorphism', 'Magic Methods']
        },
        {
          id: 4,
          title: 'Module 4: Web Scraping & Automation',
          topics: ['Beautiful Soup', 'Selenium', 'Web Automation', 'Data Extraction', 'Automation Scripts']
        },
        {
          id: 5,
          title: 'Module 5: Final Project',
          topics: ['Project Development', 'Real-world Application', 'Code Optimization', 'Testing', 'Documentation']
        }
      ]
    },
    3: {
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description: 'Build professional websites using WordPress. Learn theme customization, plugin development, SEO optimization, and create responsive, feature-rich websites.',
      duration: '3 Months',
      level: 'Beginner Friendly',
      color: '#21759b',
      modules: [
        {
          id: 1,
          title: 'Module 1: WordPress Basics',
          topics: ['WordPress Installation', 'Dashboard Overview', 'Posts & Pages', 'Media Management', 'Basic Settings']
        },
        {
          id: 2,
          title: 'Module 2: Theme Customization',
          topics: ['Theme Installation', 'Customizer Options', 'Child Themes', 'Template Hierarchy', 'Custom CSS']
        },
        {
          id: 3,
          title: 'Module 3: Plugins & Features',
          topics: ['Essential Plugins', 'Contact Forms', 'SEO Plugins', 'Security Plugins', 'Performance Optimization']
        },
        {
          id: 4,
          title: 'Module 4: WordPress Development',
          topics: ['Custom Post Types', 'Custom Fields', 'Theme Development', 'Plugin Development', 'WordPress Functions']
        },
        {
          id: 5,
          title: 'Module 5: Project & Deployment',
          topics: ['Complete Website Build', 'E-commerce Setup', 'Site Migration', 'Hosting & Deployment', 'Maintenance']
        }
      ]
    },
    4: {
      icon: <FaJava />,
      title: 'Java Programming',
      description: 'Master Java fundamentals and advanced concepts. Learn OOP, collections, multithreading, JDBC, servlets, and develop enterprise-level applications.',
      duration: '5 Months',
      level: 'Beginner to Advanced',
      color: '#007396',
      modules: [
        {
          id: 1,
          title: 'Module 1: Java Fundamentals',
          topics: ['Java Syntax', 'Data Types', 'Operators', 'Control Statements', 'Arrays']
        },
        {
          id: 2,
          title: 'Module 2: Object-Oriented Programming',
          topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Abstraction', 'Encapsulation']
        },
        {
          id: 3,
          title: 'Module 3: Advanced Java',
          topics: ['Collections Framework', 'Exception Handling', 'Multithreading', 'File I/O', 'Generics']
        },
        {
          id: 4,
          title: 'Module 4: Database Connectivity',
          topics: ['JDBC Basics', 'SQL Integration', 'Prepared Statements', 'Connection Pooling', 'Transaction Management']
        },
        {
          id: 5,
          title: 'Module 5: Web Development',
          topics: ['Servlets', 'JSP', 'Session Management', 'Filters', 'MVC Architecture']
        },
        {
          id: 6,
          title: 'Module 6: Enterprise Project',
          topics: ['Project Planning', 'Application Development', 'Testing', 'Deployment', 'Best Practices']
        }
      ]
    },
    5: {
      icon: <FaReact />,
      title: 'JavaScript Frameworks (Angular & React)',
      description: 'Deep dive into modern JavaScript frameworks. Build dynamic single-page applications using Angular and React with hands-on projects.',
      duration: '4 Months',
      level: 'Intermediate',
      color: '#61dafb',
      modules: [
        {
          id: 1,
          title: 'Module 1: Advanced JavaScript',
          topics: ['ES6+ Features', 'Async/Await', 'Promises', 'Closures', 'Prototypes']
        },
        {
          id: 2,
          title: 'Module 2: React Fundamentals',
          topics: ['React Components', 'JSX', 'State & Props', 'Lifecycle Methods', 'Hooks']
        },
        {
          id: 3,
          title: 'Module 3: Advanced React',
          topics: ['Context API', 'Redux', 'React Router', 'Form Handling', 'API Integration']
        },
        {
          id: 4,
          title: 'Module 4: Angular Framework',
          topics: ['Angular Basics', 'Components & Templates', 'Services & Dependency Injection', 'Routing', 'Forms']
        },
        {
          id: 5,
          title: 'Module 5: Framework Projects',
          topics: ['React Project', 'Angular Project', 'State Management', 'Testing', 'Deployment']
        }
      ]
    },
    6: {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Learn user interface and experience design principles. Master Figma, design thinking, prototyping, user research, and create stunning digital experiences.',
      duration: '3 Months',
      level: 'Beginner Friendly',
      color: '#ff6b6b',
      modules: [
        {
          id: 1,
          title: 'Module 1: Design Fundamentals',
          topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout & Composition', 'Visual Hierarchy']
        },
        {
          id: 2,
          title: 'Module 2: UX Research',
          topics: ['User Research Methods', 'User Personas', 'User Journey Mapping', 'Wireframing', 'Information Architecture']
        },
        {
          id: 3,
          title: 'Module 3: Figma Mastery',
          topics: ['Figma Interface', 'Components & Variants', 'Auto Layout', 'Prototyping', 'Collaboration']
        },
        {
          id: 4,
          title: 'Module 4: UI Design',
          topics: ['Interface Design', 'Responsive Design', 'Mobile Design', 'Design Systems', 'Accessibility']
        },
        {
          id: 5,
          title: 'Module 5: Portfolio Project',
          topics: ['Project Brief', 'Research & Ideation', 'Design Execution', 'Prototype', 'Presentation']
        }
      ]
    },
    7: {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity Fundamentals',
      description: 'Build a strong foundation in cybersecurity. Learn network security, ethical hacking, cryptography, vulnerability assessment, and security best practices.',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      color: '#e74c3c',
      modules: [
        {
          id: 1,
          title: 'Module 1: Security Basics',
          topics: ['Information Security', 'CIA Triad', 'Security Threats', 'Risk Management', 'Security Policies']
        },
        {
          id: 2,
          title: 'Module 2: Network Security',
          topics: ['Network Fundamentals', 'Firewalls', 'VPNs', 'IDS/IPS', 'Network Protocols']
        },
        {
          id: 3,
          title: 'Module 3: Ethical Hacking',
          topics: ['Penetration Testing', 'Vulnerability Scanning', 'Social Engineering', 'Password Cracking', 'Web Application Testing']
        },
        {
          id: 4,
          title: 'Module 4: Cryptography',
          topics: ['Encryption Basics', 'Symmetric & Asymmetric Encryption', 'Digital Signatures', 'Hash Functions', 'SSL/TLS']
        },
        {
          id: 5,
          title: 'Module 5: Security Project',
          topics: ['Security Audit', 'Vulnerability Assessment', 'Security Implementation', 'Incident Response', 'Documentation']
        }
      ]
    }
  };

  const program = programsData[id];

  if (!program) {
    return (
      <div className="program-detail">
        <div className="not-found">
          <h2>Program Not Found</h2>
          <Link to="/programs" className="back-btn">
            <FaArrowLeft /> Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="program-detail">
      {/* Hero Section */}
      <section className="program-hero" style={{ borderTopColor: program.color }}>
        <div className="hero-content">
          <button onClick={() => navigate('/programs')} className="back-button">
            <FaArrowLeft /> Back to Programs
          </button>
          
          <div className="hero-header">
            <div className="hero-icon" style={{ background: program.color }}>
              {program.icon}
            </div>
            <div className="hero-text">
              <h1>{program.title}</h1>
              <p>{program.description}</p>
            </div>
          </div>

          <div className="program-meta">
            <div className="meta-item">
              <FaClock />
              <span>{program.duration}</span>
            </div>
            <div className="meta-item">
              <FaBook />
              <span>{program.level}</span>
            </div>
            <div className="meta-item">
              <FaLaptopCode />
              <span>{program.modules.length} Modules</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="modules-section">
        <div className="modules-container">
          <h2>Course Curriculum</h2>
          <p className="modules-subtitle">Comprehensive learning path designed to take you from basics to expert level</p>
          
          <div className="modules-list">
            {program.modules.map((module) => (
              <div key={module.id} className="module-card">
                <div className="module-header">
                  <div className="module-number" style={{ background: program.color }}>
                    {module.id}
                  </div>
                  <h3>{module.title}</h3>
                </div>
                
                <ul className="topics-list">
                  {module.topics.map((topic, index) => (
                    <li key={index}>
                      <FaCheckCircle style={{ color: program.color }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="program-cta">
            <h3>Ready to Start Your Learning Journey?</h3>
            <p>Join thousands of students who have transformed their careers with our programs</p>
            <Link to="/contact" className="enroll-btn" style={{ background: program.color }}>
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
