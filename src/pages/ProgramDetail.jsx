import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
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
  FaLaptopCode,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './ProgramDetail.css';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const programsData = {
    1: {
      icon: <FaCode />,
      duration: '20 Weeks',
      level: 'Beginner to Advanced',
      color: '#667eea',
      modules: [
        {
          id: 1,
          title: 'Module 1: Introduction to Web Development',
          topics: [
            'Understanding the web: browsers, servers, and HTTP',
            'Basic HTML: structure, elements, and attributes',
            'Introduction to CSS: selectors, properties, and values'
          ],
          miniProjects: [
            'Create a personal portfolio page using HTML and CSS'
          ]
        },
        {
          id: 2,
          title: 'Module 2: Advanced HTML and CSS',
          topics: [
            'Semantic HTML',
            'CSS Flexbox and Grid',
            'Responsive design with media queries'
          ],
          miniProjects: [
            'Build a responsive multi-section landing page'
          ]
        },
        {
          id: 3,
          title: 'Module 3: JavaScript Fundamentals',
          topics: [
            'Basic syntax and variables',
            'Data types and operators',
            'Control structures: conditionals and loops'
          ],
          miniProjects: [
            'Create a simple interactive quiz'
          ]
        },
        {
          id: 4,
          title: 'Module 4: JavaScript Functions and Objects',
          topics: [
            'Functions and scope',
            'Objects and arrays',
            'DOM manipulation basics'
          ],
          miniProjects: [
            'Build a dynamic to-do list application'
          ]
        },
        {
          id: 5,
          title: 'Module 5: Advanced JavaScript',
          topics: [
            'Modern JavaScript (ES6+): let, const, arrow functions',
            'Template literals, destructuring, spread/rest operators',
            'Classes and modules'
          ],
          miniProjects: [
            'Enhance the to-do list with ES6 features'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Asynchronous JavaScript',
          topics: [
            'Promises and async/await',
            'Fetch API and AJAX'
          ],
          miniProjects: [
            'Build a weather application using a weather API'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Introduction to React JS',
          topics: [
            'Setting up a React environment',
            'JSX, components, props, and state',
            'Functional vs class components'
          ],
          miniProjects: [
            'Create a simple React app with a list and search feature'
          ]
        },
        {
          id: 8,
          title: 'Module 8: React Components and State Management',
          topics: [
            'React component lifecycle',
            'Event handling in React',
            'Managing state with hooks (useState, useEffect)'
          ],
          miniProjects: [
            'Build a CRUD application with React components'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Advanced React Concepts',
          topics: [
            'Context API for state management',
            'React Router for navigation',
            'Integrating third-party libraries (Axios for HTTP requests)'
          ],
          miniProjects: [
            'Develop a multi-page React application with routing'
          ]
        },
        {
          id: 10,
          title: 'Module 10: Backend Development with Node.js',
          topics: [
            'Introduction to Node.js and npm',
            'Creating a basic server with Node.js',
            'Introduction to Express.js'
          ],
          miniProjects: [
            'Set up a basic RESTful API using Express.js'
          ]
        },
        {
          id: 11,
          title: 'Module 11: Express.js and Middleware',
          topics: [
            'Routing and middleware in Express.js',
            'Handling HTTP requests and responses',
            'Error handling in Express.js'
          ],
          miniProjects: [
            'Build a RESTful API for a blog application'
          ]
        },
        {
          id: 12,
          title: 'Module 12: Database Integration with MongoDB',
          topics: [
            'Introduction to MongoDB and Mongoose',
            'CRUD operations with Mongoose',
            'Data modeling and schema design'
          ],
          miniProjects: [
            'Integrate MongoDB with the blog application'
          ]
        },
        {
          id: 13,
          title: 'Module 13: Authentication and Authorization',
          topics: [
            'User authentication with JWT and bcrypt',
            'Role-based access control'
          ],
          miniProjects: [
            'Add user authentication to the blog application'
          ]
        },
        {
          id: 14,
          title: 'Module 14: Advanced React and Backend Integration',
          topics: [
            'Connecting React frontend with Express backend',
            'Handling CORS and API calls',
            'Managing user sessions and state'
          ],
          miniProjects: [
            'Develop a full-stack application with authentication'
          ]
        },
        {
          id: 15,
          title: 'Module 15: Deployment and DevOps Basics',
          topics: [
            'Version control with Git and GitHub',
            'Deploying applications using Heroku, Vercel, or Netlify',
            'Environment variables and configuration'
          ],
          miniProjects: [
            'Deploy the full-stack application to a cloud platform'
          ]
        },
        {
          id: 16,
          title: 'Module 16: Capstone Project – Planning and Design',
          topics: [
            'Project planning and requirements gathering',
            'Application architecture design',
            'Setting up project repository and structure'
          ],
          miniProjects: [
            'Start the capstone project planning and setup'
          ]
        },
        {
          id: 17,
          title: 'Module 17: Capstone Project – Development',
          topics: [
            'Implementing frontend UI features',
            'Developing backend APIs and database interactions',
            'Integrating frontend and backend'
          ],
          miniProjects: [
            'Continue development of the capstone project'
          ]
        },
        {
          id: 18,
          title: 'Module 18: Capstone Project – Finalization and Presentation',
          topics: [
            'Testing and debugging',
            'Preparing for deployment',
            'Presentation skills and code review'
          ],
          miniProjects: [
            'Complete the capstone project and present it'
          ]
        }
      ]
    },
    2: {
      icon: <FaPython />,
      title: 'Python Project-Based Learning',
      description: 'We take a step-by-step approach, with each module building on the previous one. This allows students to progressively master Python, from basics to advanced topics, with hands-on projects to reinforce learning. Students will work on solving latest coding challenges and interview questions commonly asked by top MNCs.',
      duration: '8-12 Weeks',
      level: 'Beginner to Advanced',
      color: '#306998',
      modules: [
        {
          id: 1,
          title: 'Module 1: Python Basics',
          topics: [
            'Python Installation & Setup',
            'Variables, Data Types, and Type Conversion',
            'Operators (Arithmetic, Logical, Comparison)',
            'Strings and String Methods',
            'Lists, Tuples, Sets, and Dictionaries',
            'Conditional Statements (if, elif, else)',
            'Loops (for, while)',
            'Functions & Scope'
          ],
          miniProjects: [
            'Basic Calculator (Using input, operators, and functions)',
            'To-Do List App (Using lists and loops)'
          ]
        },
        {
          id: 2,
          title: 'Module 2: Intermediate Python & OOP Concepts',
          topics: [
            'File Handling (open(), read(), write())',
            'Exception Handling (try-except)',
            'Object-Oriented Programming (OOP)',
            'Classes and Objects',
            'Inheritance & Polymorphism',
            'Encapsulation',
            'Working with Modules & Packages'
          ],
          miniProjects: [
            'File Organizer (Sort files into folders based on extensions)',
            'Student Grade Manager (Use OOP to manage students\' grades)'
          ]
        },
        {
          id: 3,
          title: 'Module 3: Data Handling & APIs',
          topics: [
            'Working with JSON & CSV',
            'Introduction to APIs (requests module)',
            'Web Scraping (BeautifulSoup, Scrapy)',
            'Introduction to Databases (SQLite, MySQL)'
          ],
          miniProjects: [
            'Weather App (Fetch data from an API)',
            'News Scraper (Scrape headlines from a news website)'
          ]
        },
        {
          id: 4,
          title: 'Module 4: GUI Development & Automation',
          topics: [
            'Building GUI Applications (Tkinter or PyQt)',
            'Automating Tasks with Python (os, shutil, subprocess)',
            'Scheduling Tasks (schedule, cron)'
          ],
          miniProjects: [
            'Basic Expense Tracker (GUI with Tkinter)',
            'Automated Email Sender (Using smtplib)'
          ]
        },
        {
          id: 5,
          title: 'Module 5: Advanced Python & AI/ML Introduction',
          topics: [
            'Multi-threading & Multiprocessing',
            'Web Development with Flask/Django',
            'Data Science Basics (pandas, matplotlib, numpy)',
            'Introduction to Machine Learning (scikit-learn, tensorflow)'
          ],
          miniProjects: [
            'Chatbot using Flask (Simple chatbot with an API)',
            'Data Visualization Project (Analyze and visualize dataset)'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Final Project Development & Submission',
          topics: [
            'Student selects an idea and works on a full-fledged project',
            'Core Python concepts integration',
            'Database or API integration',
            'GUI/Web component (optional)',
            'Proper documentation'
          ],
          projectIdeas: [
            'E-commerce Product Price Tracker (Web scraping + API)',
            'Personal Finance Manager (Database + Tkinter GUI)',
            'AI Chatbot for FAQs (NLP + Flask)',
            'Portfolio Website using Flask/Django'
          ],
          submission: [
            'Student submits the Python project',
            'Presentation explaining: Problem statement, Implementation, Challenges faced, Future improvements'
          ]
        }
      ]
    },
    3: {
      icon: <FaWordpress />,
      title: 'WordPress Development',
      description: 'This plan covers WordPress fundamentals, theme customization, plugin usage, website development, and deployment.',
      duration: '9 Weeks',
      level: 'Beginner Friendly',
      color: '#21759b',
      modules: [
        {
          id: 1,
          title: 'Module 1: WordPress Basics',
          topics: [
            'Introduction to WordPress',
            'Posts vs Pages',
            'Categories and Tags',
            'Media management',
            'Menus and navigation'
          ],
          miniProjects: [
            'Create blog posts with categories and images'
          ]
        },
        {
          id: 2,
          title: 'Module 2: Themes and Customization',
          topics: [
            'Understanding WordPress themes',
            'Installing and activating themes',
            'Using the WordPress Customizer',
            'Introduction to page builders (Elementor)'
          ],
          miniProjects: [
            'Design a homepage using a free theme'
          ]
        },
        {
          id: 3,
          title: 'Module 3: Plugins',
          topics: [
            'What are plugins',
            'Installing and managing plugins',
            'Important plugins (SEO, Security, Backup)',
            'Plugin settings and configuration'
          ],
          miniProjects: [
            'Install SEO and security plugins'
          ]
        },
        {
          id: 4,
          title: 'Module 4: WordPress Design',
          topics: [
            'Using Elementor page builder',
            'Designing responsive pages',
            'Typography and layout',
            'Creating landing pages'
          ],
          miniProjects: [
            'Build a professional landing page'
          ]
        },
        {
          id: 5,
          title: 'Module 5: WordPress Development Basics',
          topics: [
            'Introduction to HTML, CSS, and PHP in WordPress',
            'WordPress file structure',
            'Child themes',
            'Basic theme customization'
          ],
          miniProjects: [
            'Create a child theme and modify styles'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Database and Backend',
          topics: [
            'WordPress database structure',
            'Working with MySQL',
            'Understanding wp-config.php',
            'Database backups'
          ],
          miniProjects: [
            'Backup and restore WordPress database'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Security and Performance',
          topics: [
            'WordPress security best practices',
            'SSL certificates',
            'Caching and performance optimization',
            'Image optimization'
          ],
          miniProjects: [
            'Secure and optimize a WordPress site'
          ]
        },
        {
          id: 8,
          title: 'Module 8: E-Commerce with WordPress',
          topics: [
            'Introduction to WooCommerce',
            'Creating products',
            'Payment gateways',
            'Order management'
          ],
          miniProjects: [
            'Build a small online store'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Final WordPress Project',
          topics: [
            'Custom plugin development',
            'WordPress API integration',
            'Advanced theme customization',
            'Website performance optimization'
          ],
          miniProjects: [
            'Develop a Custom WordPress Plugin that manages product inventory, order tracking, and generates automated reports for an online store'
          ]
        }
      ]
    },
    4: {
      icon: <FaJava />,
      title: 'Java Programming',
      description: 'This plan covers Java fundamentals, object-oriented programming concepts, collections, exception handling, database connectivity, and application development.',
      duration: '9 Weeks',
      level: 'Beginner to Advanced',
      color: '#007396',
      modules: [
        {
          id: 1,
          title: 'Module 1: Java Basics',
          topics: [
            'Introduction to Java',
            'Variables and Data Types',
            'Operators in Java',
            'Input and Output',
            'Type casting'
          ],
          miniProjects: [
            'Program to calculate student marks and grade'
          ]
        },
        {
          id: 2,
          title: 'Module 2: Control Statements',
          topics: [
            'If, If-Else, Nested If',
            'Switch statement',
            'For loop, While loop, Do-While loop',
            'Break and Continue'
          ],
          miniProjects: [
            'Program to print multiplication table and number patterns'
          ]
        },
        {
          id: 3,
          title: 'Module 3: Arrays',
          topics: [
            'One dimensional arrays',
            'Two dimensional arrays',
            'Array operations',
            'Searching and sorting basics'
          ],
          miniProjects: [
            'Program to store and display student marks using arrays'
          ]
        },
        {
          id: 4,
          title: 'Module 4: Object Oriented Programming (OOP)',
          topics: [
            'Classes and Objects',
            'Constructors',
            'Methods',
            'Encapsulation'
          ],
          miniProjects: [
            'Create Student Management System using classes'
          ]
        },
        {
          id: 5,
          title: 'Module 5: Inheritance and Polymorphism',
          topics: [
            'Inheritance types',
            'Method overriding',
            'Method overloading',
            'Super keyword'
          ],
          miniProjects: [
            'Program demonstrating inheritance example (Vehicle class)'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Abstraction and Interfaces',
          topics: [
            'Abstract classes',
            'Interfaces',
            'Implementation of interfaces',
            'Difference between abstract class and interface'
          ],
          miniProjects: [
            'Build Bank system using interface'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Exception Handling',
          topics: [
            'Types of exceptions',
            'Try, Catch, Finally',
            'Throw and Throws',
            'Custom exceptions'
          ],
          miniProjects: [
            'Program with exception handling for user input'
          ]
        },
        {
          id: 8,
          title: 'Module 8: Java Collections',
          topics: [
            'List (ArrayList, LinkedList)',
            'Set (HashSet)',
            'Map (HashMap)',
            'Iterators'
          ],
          miniProjects: [
            'Program to store and manage employee records using ArrayList'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Final Java Project',
          topics: [
            'Multi-threading concepts',
            'Database integration using JDBC',
            'File handling and exception management',
            'Application performance optimization'
          ],
          miniProjects: [
            'Develop a Library Management System with features like book issue/return, user management, fine calculation, and database storage'
          ]
        }
      ]
    },
    5: {
      icon: <FaReact />,
      title: 'JavaScript Frameworks (Angular & React)',
      description: 'Deep dive into modern JavaScript frameworks. Build dynamic single-page applications using Angular and React with hands-on projects.',
      duration: '11 Weeks',
      level: 'Intermediate',
      color: '#61dafb',
      modules: [
        {
          id: 1,
          title: 'Module 1: React Fundamentals',
          topics: [
            'Introduction to React',
            'JSX syntax and rendering elements',
            'Components and props',
            'Functional vs class components'
          ],
          miniProjects: [
            'Build a simple React application with reusable components'
          ]
        },
        {
          id: 2,
          title: 'Module 2: React State and Events',
          topics: [
            'State management in React',
            'Event handling in React',
            'Conditional rendering',
            'Lists and keys'
          ],
          miniProjects: [
            'Create a task manager application using React state and events'
          ]
        },
        {
          id: 3,
          title: 'Module 3: React Hooks',
          topics: [
            'Introduction to React Hooks',
            'useState and useEffect',
            'Custom hooks',
            'Component lifecycle with hooks'
          ],
          miniProjects: [
            'Build a dynamic dashboard using React Hooks'
          ]
        },
        {
          id: 4,
          title: 'Module 4: React Routing and API Integration',
          topics: [
            'React Router for navigation',
            'API integration using Axios or Fetch',
            'Handling asynchronous data'
          ],
          miniProjects: [
            'Develop a multi-page React application with API data integration'
          ]
        },
        {
          id: 5,
          title: 'Module 5: Advanced React Concepts',
          topics: [
            'Context API for global state',
            'Performance optimization',
            'Code splitting and lazy loading'
          ],
          miniProjects: [
            'Create a React application with global state management'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Introduction to Angular',
          topics: [
            'Overview of Angular framework',
            'Angular CLI and project structure',
            'Components and templates',
            'Data binding in Angular'
          ],
          miniProjects: [
            'Create a basic Angular application with multiple components'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Angular Directives and Services',
          topics: [
            'Structural directives (ngIf, ngFor)',
            'Attribute directives',
            'Angular services and dependency injection'
          ],
          miniProjects: [
            'Build a dynamic Angular application using directives and services'
          ]
        },
        {
          id: 8,
          title: 'Module 8: Angular Forms and Validation',
          topics: [
            'Template-driven forms',
            'Reactive forms',
            'Form validation techniques'
          ],
          miniProjects: [
            'Create a user registration form with validation in Angular'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Angular Routing and HTTP',
          topics: [
            'Angular routing and navigation',
            'HTTP client for API requests',
            'Observables and RxJS basics'
          ],
          miniProjects: [
            'Develop a multi-page Angular application connected to an API'
          ]
        },
        {
          id: 10,
          title: 'Module 10: Advanced Angular Features',
          topics: [
            'Angular modules',
            'Lazy loading modules',
            'Performance optimization'
          ],
          miniProjects: [
            'Build a feature-rich Angular application with modular architecture'
          ]
        },
        {
          id: 11,
          title: 'Module 11: Framework Integration and Final Project',
          topics: [
            'Testing and debugging',
            'Preparing for deployment',
            'Presentation skills and code review'
          ],
          miniProjects: [
            'Complete the advanced web application project using React or Angular and present the final working application'
          ]
        }
      ]
    },
    6: {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'This plan covers user interface design, user experience principles, design tools, wireframing, prototyping, and usability testing.',
      duration: '9 Weeks',
      level: 'Beginner Friendly',
      color: '#ff6b6b',
      modules: [
        {
          id: 1,
          title: 'Module 1: Design Principles',
          topics: [
            'Introduction to UI/UX',
            'Difference between UI and UX',
            'Basic design principles',
            'Color theory',
            'Typography',
            'Layout and visual hierarchy'
          ],
          miniProjects: [
            'Create color palette and typography guide for a sample website'
          ]
        },
        {
          id: 2,
          title: 'Module 2: User Research',
          topics: [
            'Understanding users',
            'User personas',
            'User journey mapping',
            'User needs analysis'
          ],
          miniProjects: [
            'Create user persona and user journey map'
          ]
        },
        {
          id: 3,
          title: 'Module 3: Wireframing',
          topics: [
            'What is wireframing',
            'Low fidelity wireframes',
            'High fidelity wireframes',
            'Tools for wireframing'
          ],
          miniProjects: [
            'Design wireframe for a mobile app'
          ]
        },
        {
          id: 4,
          title: 'Module 4: Prototyping',
          topics: [
            'Introduction to prototyping',
            'Interactive prototypes',
            'Navigation flow',
            'Prototype testing'
          ],
          miniProjects: [
            'Create interactive prototype using design tools'
          ]
        },
        {
          id: 5,
          title: 'Module 5: UI Design Tools',
          topics: [
            'Design tools overview',
            'Working with components',
            'Creating reusable UI elements',
            'Design systems basics'
          ],
          miniProjects: [
            'Design landing page using UI design tool'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Mobile App Design',
          topics: [
            'Mobile UI guidelines',
            'Responsive design',
            'Grid systems',
            'Mobile interaction patterns'
          ],
          miniProjects: [
            'Design mobile app interface'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Web UI Design',
          topics: [
            'Web layout structures',
            'Responsive web design',
            'UI components (buttons, cards, forms)',
            'Accessibility basics'
          ],
          miniProjects: [
            'Design complete website UI'
          ]
        },
        {
          id: 8,
          title: 'Module 8: Usability Testing',
          topics: [
            'What is usability testing',
            'Gathering user feedback',
            'Improving user experience',
            'Iterative design process'
          ],
          miniProjects: [
            'Conduct usability testing for your design'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Final UI/UX Project',
          topics: [
            'User experience improvement techniques',
            'Interface consistency and design systems',
            'Accessibility and usability evaluation',
            'Design documentation and presentation'
          ],
          miniProjects: [
            'Design a Smart Healthcare Mobile App Interface including patient dashboard, appointment booking, medical records, and notification system'
          ]
        }
      ]
    },
    7: {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity Fundamentals',
      description: 'The plan includes learning networking fundamentals, system security, ethical hacking basics, cryptography, and security tools. Each week will focus on specific cybersecurity concepts with practical exercises.',
      duration: '10 Weeks',
      level: 'Beginner to Intermediate',
      color: '#e74c3c',
      modules: [
        {
          id: 1,
          title: 'Module 1: Introduction to Cybersecurity',
          topics: [
            'Introduction of Cybersecurity',
            'Types of Cyber Attacks (Malware, Phishing, Ransomware)',
            'CIA Triad (Confidentiality, Integrity, Availability)',
            'Basic Security Principles'
          ],
          miniProjects: [
            'Research and create a report on Top 10 Cyber Attacks in recent years'
          ]
        },
        {
          id: 2,
          title: 'Module 2: Networking Fundamentals',
          topics: [
            'Computer Networks basics',
            'IP Address, DNS, DHCP',
            'OSI Model and TCP/IP Model',
            'Common Network Protocols (HTTP, HTTPS, FTP, SMTP)'
          ],
          miniProjects: [
            'Draw and explain the OSI model with real-world examples'
          ]
        },
        {
          id: 3,
          title: 'Module 3: Operating System Security',
          topics: [
            'Linux and Windows basics',
            'File permissions and user management',
            'System vulnerabilities',
            'Hardening operating systems'
          ],
          miniProjects: [
            'Install Kali Linux in Virtual Machine'
          ]
        },
        {
          id: 4,
          title: 'Module 4: Cryptography Basics',
          topics: [
            'Encryption and Decryption',
            'Symmetric vs Asymmetric Encryption',
            'Hashing algorithms (MD5, SHA)',
            'Digital signatures and certificates'
          ],
          miniProjects: [
            'Implement simple encryption and decryption using Python'
          ]
        },
        {
          id: 5,
          title: 'Module 5: Ethical Hacking Fundamentals',
          topics: [
            'What is Ethical Hacking',
            'Types of Hackers',
            'Footprinting and Reconnaissance',
            'Scanning and Enumeration'
          ],
          miniProjects: [
            'Use Nmap tool to scan open ports'
          ]
        },
        {
          id: 6,
          title: 'Module 6: Web Security',
          topics: [
            'Web application vulnerabilities',
            'SQL Injection',
            'Cross Site Scripting (XSS)',
            'Cross Site Request Forgery (CSRF)'
          ],
          miniProjects: [
            'Practice vulnerabilities in DVWA (Damn Vulnerable Web App)'
          ]
        },
        {
          id: 7,
          title: 'Module 7: Security Tools',
          topics: [
            'Kali Linux tools',
            'Nmap',
            'Wireshark',
            'Metasploit Framework'
          ],
          miniProjects: [
            'Capture and analyze network packets using Wireshark'
          ]
        },
        {
          id: 8,
          title: 'Module 8: Penetration Testing Basics',
          topics: [
            'Penetration testing process',
            'Vulnerability scanning',
            'Exploitation basics',
            'Reporting vulnerabilities'
          ],
          miniProjects: [
            'Perform basic vulnerability scan on a test system'
          ]
        },
        {
          id: 9,
          title: 'Module 9: Cybersecurity Defense',
          topics: [
            'Firewalls and IDS/IPS',
            'Antivirus and endpoint security',
            'Security policies',
            'Incident response'
          ],
          miniProjects: [
            'Create a basic security policy for an organization'
          ]
        },
        {
          id: 10,
          title: 'Module 10: Final Cybersecurity Project',
          topics: [
            'Network vulnerability assessment',
            'Penetration testing techniques',
            'Security monitoring and threat detection',
            'Generating security analysis reports'
          ],
          miniProjects: [
            'Develop a Network Vulnerability Scanner that scans a system or network to detect open ports, weak passwords, and potential security threats'
          ]
        }
      ]
    }
  };

  const program = programsData[id];

  if (!program) {
    return (
      <div className="program-detail">
        <Helmet>
          <title>Program Not Found | Shanruck Technologies</title>
        </Helmet>
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
      <Helmet>
        <title>{program.title} | Shanruck Technologies</title>
        <meta name="description" content={`Explore our ${program.title} program. ${program.description}`} />
      </Helmet>
      {/* Course Modules Section */}
      <section className="modules-section">
        <div className="modules-container">
          <button onClick={() => navigate('/programs')} className="back-button">
            <FaArrowLeft /> Back
          </button>
          <h2>Course Curriculum</h2>
          <p className="modules-subtitle">Comprehensive learning path designed to take you from basics to expert level</p>
          
          <div className="modules-list">
            {program.modules.map((module) => (
              <div key={module.id} className={`module-card ${expandedModule === module.id ? 'expanded' : ''}`}>
                <div 
                  className="module-header clickable" 
                  onClick={() => toggleModule(module.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="module-number" style={{ background: program.color }}>
                      {module.id}
                    </div>
                    <h3>{module.title}</h3>
                  </div>
                  <div className="expand-icon">
                    {expandedModule === module.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                
                {expandedModule === module.id && (
                  <div className="module-content">
                    {module.topics && (
                      <div className="module-section">
                        <h4>Topics Covered:</h4>
                        <ul className="topics-list">
                          {module.topics.map((topic, index) => (
                            <li key={index}>
                              <FaCheckCircle style={{ color: program.color }} />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {module.miniProjects && (
                      <div className="module-section">
                        <h4>Mini-Projects:</h4>
                        <ul className="projects-list">
                          {module.miniProjects.map((project, index) => (
                            <li key={index}>
                              <FaLaptopCode style={{ color: program.color }} />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {module.projectIdeas && (
                      <div className="module-section">
                        <h4>Final Project Ideas:</h4>
                        <ul className="projects-list">
                          {module.projectIdeas.map((idea, index) => (
                            <li key={index}>
                              <FaLaptopCode style={{ color: program.color }} />
                              <span>{idea}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {module.submission && (
                      <div className="module-section">
                        <h4>Final Submission:</h4>
                        <ul className="topics-list">
                          {module.submission.map((item, index) => (
                            <li key={index}>
                              <FaCheckCircle style={{ color: program.color }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="program-cta">
            <h3>Ready to Start Your Learning Journey?</h3>
            <p>Join thousands of students who have transformed their careers with our programs</p>
            <Link to="/contact" className="enroll-btn" style={{ background: program.color }} onClick={() => window.scrollTo(0, 0)}>
              Enquiry →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;

