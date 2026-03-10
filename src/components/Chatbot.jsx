import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaEllipsisV, FaTrash, FaPlus, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  
  // Query collection state
  const [isCollectingQuery, setIsCollectingQuery] = useState(false);
  const [queryStep, setQueryStep] = useState(0); // 0: not collecting, 1: name, 2: email, 3: phone, 4: confirm
  const [userQuery, setUserQuery] = useState('');
  const [queryFormData, setQueryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmittingQuery, setIsSubmittingQuery] = useState(false);
  
  const welcomeMessage = {
    text: "Hello! I'm the Shanruck Assistant, here to help you.\n\nI can assist you with:\n- All 7 training programs\n- Enrollment & fees\n- Placement support\n- Course details\n- Student reviews\n\nUse the quick buttons below or type your question.",
    sender: 'bot',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Track asked questions
  const [askedQuestions, setAskedQuestions] = useState(() => {
    const saved = localStorage.getItem('askedQuestions');
    return saved ? JSON.parse(saved) : [];
  });

  // Load chat history from localStorage or start with welcome message
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      return JSON.parse(savedMessages);
    }
    return [welcomeMessage];
  });
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  // Save asked questions to localStorage
  useEffect(() => {
    localStorage.setItem('askedQuestions', JSON.stringify(askedQuestions));
  }, [askedQuestions]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.header-actions')) {
        setShowMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  // Quick reply buttons - Updated for better guidance
  const quickReplies = [
    "What programs do you offer?",
    "Tell me about Full Stack course",
    "How do I enroll?",
    "What are the fees?",
    "Do you provide placement?",
    "Submit a Query"
  ];

  // Bot responses database - Comprehensively trained for your website
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Full Stack Web Development
    if (message.includes('full stack') || message.includes('fullstack') || message.includes('mern') || message.includes('mean')) {
      return "Full Stack Web Development (6 Months)\n\nWhat You'll Learn:\n- Front-end: HTML, CSS, JavaScript, React\n- Back-end: Node.js, Express, MongoDB\n- Build complete web applications\n- RESTful APIs & Database Design\n\nLevel: Beginner to Advanced\n\nIncludes:\n- Live interactive classes\n- Hands-on projects\n- Expert mentorship\n- Placement assistance\n- Official certification\n\nContact us: +91 9876543210";
    }

    // Python Programming
    if (message.includes('python') && !message.includes('course') && !message.includes('program')) {
      return "Python Project-Based Learning (4 Months)\n\nWhat You'll Learn:\n- Python fundamentals & syntax\n- Data structures & OOP\n- Web scraping & automation\n- Real-world project development\n\nLevel: Beginner Friendly\n\nPerfect for:\n- Complete beginners\n- Career switchers\n- Automation enthusiasts\n- Data science aspirants\n\nContact: +91 9876543210";
    }

    // WordPress Development
    if (message.includes('wordpress') || message.includes('wp') || message.includes('website')) {
      return "WordPress Development (3 Months)\n\nWhat You'll Learn:\n- WordPress setup & configuration\n- Theme customization & development\n- Plugin development\n- SEO optimization\n- Build responsive websites\n\nLevel: Beginner Friendly\n\nCareer Options:\n- Freelance web developer\n- WordPress specialist\n- Digital agency roles\n\nContact: info@shanrucktech.com";
    }

    // Java Programming
    if (message.includes('java') && !message.includes('javascript')) {
      return "Java Programming (5 Months)\n\nWhat You'll Learn:\n- Java fundamentals & OOP concepts\n- Collections & data structures\n- Multithreading & concurrency\n- JDBC & database integration\n- Servlets & enterprise applications\n\nLevel: Beginner to Advanced\n\nBuild:\n- Desktop applications\n- Web applications\n- Enterprise systems\n\nContact: +91 9876543210";
    }

    // JavaScript Frameworks (React & Angular)
    if (message.includes('javascript') || message.includes('react') || message.includes('angular') || message.includes('framework')) {
      return "JavaScript Frameworks - Angular & React (4 Months)\n\nWhat You'll Learn:\n- Advanced JavaScript (ES6+)\n- React fundamentals & hooks\n- Angular architecture\n- State management\n- Build dynamic SPAs\n\nLevel: Intermediate\n\nPrerequisites:\n- Basic JavaScript knowledge\n- HTML & CSS basics\n\nContact: +91 9876543210";
    }

    // UI/UX Design
    if (message.includes('ui') || message.includes('ux') || message.includes('design') || message.includes('figma')) {
      return "UI/UX Design (3 Months)\n\nWhat You'll Learn:\n- Design thinking & principles\n- Figma & design tools mastery\n- Prototyping & wireframing\n- User research & testing\n- Create stunning digital experiences\n\nLevel: Beginner Friendly\n\nPerfect for:\n- Creative professionals\n- Career switchers\n- Developers wanting design skills\n\nContact: +91 9876543210";
    }

    // Cybersecurity
    if (message.includes('cyber') || message.includes('security') || message.includes('ethical') || message.includes('hacking')) {
      return "Cybersecurity Fundamentals (4 Months)\n\nWhat You'll Learn:\n- Network security basics\n- Ethical hacking techniques\n- Cryptography essentials\n- Vulnerability assessment\n- Security best practices\n\nLevel: Beginner to Intermediate\n\nCareer Paths:\n- Security analyst\n- Penetration tester\n- Security consultant\n\nContact: +91 9876543210";
    }

    // General Courses/Programs Query
    if (message.includes('course') || message.includes('program') || message.includes('training') || message.includes('learn')) {
      return "Our 7 Comprehensive Programs:\n\n1. Full Stack Web Development - 6 months\n2. Python Project-Based Learning - 4 months\n3. WordPress Development - 3 months\n4. Java Programming - 5 months\n5. JavaScript Frameworks (React & Angular) - 4 months\n6. UI/UX Design - 3 months\n7. Cybersecurity Fundamentals - 4 months\n\nEvery program includes:\n- Live interactive classes\n- Hands-on projects\n- Expert mentorship\n- Official certification\n- Placement assistance\n\nAsk about any specific course for more details.";
    }

    // About Shanruck Technologies
    if (message.includes('about') || message.includes('who are you') || message.includes('company') || message.includes('shanruck')) {
      return "About Shanruck Technologies:\n\nWe provide immersive training programs to help you develop practical skills for today's competitive job market.\n\nOur Focus:\n- Hands-on project-based learning\n- Real-world industry guidance\n- Career development support\n- Especially for freshers & beginners\n\nOur Vision:\nEvery individual discovers their potential and builds a meaningful career.\n\nOur Mission:\nProvide structured career support & skill-based training to empower individuals.\n\nContact: +91 9876543210";
    }

    // Benefits / What You Get
    if (message.includes('benefit') || message.includes('feature') || message.includes('what will i get') || message.includes('include')) {
      return "What You Get With Every Program:\n\n1. Live Interactive Classes\n- Learn from industry experts\n- Engaging sessions with live Q&A\n\n2. Hands-On Projects\n- Build real-world applications\n- Create impressive portfolio\n\n3. Expert Mentorship\n- Personalized guidance\n- One-on-one support\n\n4. Official Certification\n- Industry-recognized certificate\n- Digital & physical copies\n\n5. Placement Assistance\n- Resume preparation\n- Interview coaching\n- Job referrals\n\n6. Career Support\n- Industry connections\n- Professional guidance\n\nContact: +91 9876543210";
    }

    // Enrollment/Registration
    if (message.includes('enroll') || message.includes('register') || message.includes('join') || message.includes('admission') || message.includes('apply')) {
      return "Easy Enrollment Process:\n\n1. Visit our Contact page\n2. Fill out the enquiry form with your details\n3. Our team contacts you within 24 hours\n4. Schedule a free counseling session\n5. Complete your enrollment\n6. Start learning!\n\nQuick Contact:\nPhone: +91 9876543210\nEmail: info@shanrucktech.com\n\nOr click Contact Us on our website!";
    }

    // Duration
    if (message.includes('duration') || message.includes('how long') || message.includes('time period')) {
      return "Program Durations:\n\n3 Months:\n- WordPress Development\n- UI/UX Design\n\n4 Months:\n- Python Project-Based Learning\n- JavaScript Frameworks\n- Cybersecurity Fundamentals\n\n5 Months:\n- Java Programming\n\n6 Months:\n- Full Stack Web Development\n\nAll programs have:\n- Flexible schedules\n- Weekend batches available\n- Part-time & full-time options\n\nWhich program interests you?";
    }

    // Contact/Location
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('location') || message.includes('address') || message.includes('reach')) {
      return "Contact Shanruck Technologies:\n\nOffice Address:\n123 Tech Street, Innovation Hub\nBangalore, Karnataka 560001\nIndia\n\nPhone Numbers:\n+91 9876543210\n+91 9876543211\n\nEmail Addresses:\ninfo@shanrucktech.com\nsupport@shanrucktech.com\n\nWorking Hours:\nMonday - Saturday\n9:00 AM - 6:00 PM\n\nOr fill our contact form on the website!";
    }

    // Fees/Price
    if (message.includes('fee') || message.includes('cost') || message.includes('price') || message.includes('charge') || message.includes('payment')) {
      return "Course Fees & Payment:\n\nFor detailed fee structure and payment plans:\n\nCall: +91 9876543210\nEmail: info@shanrucktech.com\n\nWe Offer:\n- Flexible payment options\n- Installment facilities\n- Special discounts for early birds\n- Group enrollment benefits\n- Scholarship opportunities\n\nContact our admissions team for personalized fee details based on your chosen program.";
    }

    // Placement/Job/Career Support
    if (message.includes('placement') || message.includes('job') || message.includes('career') || message.includes('hire') || message.includes('salary')) {
      return "Placement & Career Support:\n\nDedicated Placement Cell:\n- Resume building & optimization\n- Mock interviews & preparation\n- LinkedIn profile enhancement\n- Portfolio development guidance\n\nIndustry Connections:\n- Hiring partner network\n- Job referrals\n- Company tie-ups\n- Campus drives\n\nCareer Counseling:\n- One-on-one guidance\n- Career path planning\n- Skill gap analysis\n- Professional development\n\nOur Track Record:\n- 500+ students trained\n- 85% placement rate\n- Average 40% salary hike\n- 100+ hiring partners\n\nContact: +91 9876543210";
    }

    // Certification
    if (message.includes('certificate') || message.includes('certification') || message.includes('credential')) {
      return "Certification Details:\n\nWhat You'll Receive:\n- Official program completion certificate\n- Industry-recognized credential\n- Both digital & physical copies\n- Verifiable online\n- Add to LinkedIn profile\n\nCertification Criteria:\n- Complete all course modules\n- Submit all assignments\n- Finish hands-on projects\n- Pass final assessment\n\nCertificate Benefits:\n- Boost your resume\n- Showcase your skills\n- Gain employer trust\n- Stand out in job market\n\nContact: +91 9876543210";
    }

    // Mentorship/Instructors
    if (message.includes('mentor') || message.includes('teacher') || message.includes('instructor') || message.includes('trainer') || message.includes('faculty')) {
      return "Expert Mentorship:\n\nOur Instructors:\n- Industry professionals with 5-15 years experience\n- Working at top tech companies\n- Real-world project experience\n- Passionate about teaching\n\nLearning Experience:\n- Live interactive classes\n- One-on-one guidance sessions\n- Personalized feedback\n- Doubt clearing support\n- Project code reviews\n- Career advice\n\nSmall Batch Sizes:\n- Individual attention\n- Interactive learning\n- Better engagement\n\nContact: +91 9876543210";
    }

    // Online/Offline/Mode
    if (message.includes('online') || message.includes('offline') || message.includes('mode') || message.includes('class') || message.includes('batch')) {
      return "Learning Modes & Batches:\n\nFlexible Options:\n- Online live classes\n- Offline classroom training\n- Hybrid mode available\n\nBatch Timings:\n- Weekday batches\n- Weekend batches\n- Morning & evening slots\n\nFeatures:\n- Recorded sessions available\n- Lifetime access to materials\n- Interactive whiteboard\n- Screen sharing\n- Live coding sessions\n\nPhone: +91 9876543210\nEmail: info@shanrucktech.com\n\nChoose what fits your schedule!";
    }

    // Prerequisites/Requirements
    if (message.includes('prerequisite') || message.includes('requirement') || message.includes('beginner') || message.includes('need to know') || message.includes('experience')) {
      return "Prerequisites & Requirements:\n\nMost Courses Are Beginner-Friendly!\n\nNo Experience Needed:\n- Full Stack Development\n- Python Programming\n- WordPress Development\n- UI/UX Design\n- Java Programming\n- Cybersecurity Fundamentals\n\nBasic Knowledge Helpful:\n- JavaScript Frameworks (HTML, CSS, JS basics)\n\nGeneral Requirements:\n- Basic computer knowledge\n- Internet connection\n- Laptop/Desktop\n- Dedication & practice\n\nDon't worry if you're a complete beginner - we'll guide you step by step!\n\nContact: +91 9876543210";
    }

    // Student Reviews/Testimonials
    if (message.includes('review') || message.includes('testimonial') || message.includes('feedback') || message.includes('student') || message.includes('alumni')) {
      return "What Our Students Say:\n\nPriya Sharma (Full Stack Developer):\n\"Shanruck transformed my career! Hands-on approach and expert mentorship helped me land my dream job.\"\n\nRahul Kumar (Python Developer):\n\"Best decision ever! Went from zero coding to building real applications in 4 months.\"\n\nSneha Patel (UI/UX Designer):\n\"Exceeded expectations! Portfolio projects helped me get hired immediately after graduation.\"\n\nArjun Reddy (Java Developer):\n\"Excellent training! Instructors share practical industry knowledge.\"\n\nOur Results:\n- 500+ students trained\n- 85% placement rate\n- 5-star rating\n- 100+ hiring partners\n\nContact: +91 9876543210";
    }

    // Batch/Schedule
    if (message.includes('batch') || message.includes('timing') || message.includes('schedule') || message.includes('when start')) {
      return "Batch Information:\n\nMultiple Batches Available:\n- Morning batch: 8 AM - 11 AM\n- Afternoon batch: 2 PM - 5 PM\n- Evening batch: 6 PM - 9 PM\n- Weekend batch: Sat-Sun 10 AM - 5 PM\n\nFlexibility:\n- New batches every month\n- Can switch batches if needed\n- Makeup classes available\n- Recorded sessions provided\n\nFor next batch dates:\nCall: +91 9876543210\nEmail: info@shanrucktech.com";
    }

    // Demo/Trial Class
    if (message.includes('demo') || message.includes('trial') || message.includes('free class') || message.includes('sample')) {
      return "Free Demo Class:\n\nWhat You'll Experience:\n- Meet our expert instructors\n- Understand teaching methodology\n- See course curriculum\n- Ask questions\n- Get course roadmap\n- No obligations!\n\nBook Your Free Demo:\nCall: +91 9876543210\nEmail: info@shanrucktech.com\n\nTry before you commit! Demos available for all programs.";
    }

    // Projects/Portfolio
    if (message.includes('project') || message.includes('portfolio') || message.includes('practical') || message.includes('hands-on')) {
      return "Hands-On Projects:\n\nWhat You'll Build:\n- Real-world applications\n- Industry-standard projects\n- Live deployable websites\n- GitHub portfolio\n- Production-ready code\n\nProject Benefits:\n- Practical experience\n- Portfolio for job interviews\n- Understanding of full dev cycle\n- Problem-solving skills\n- Teamwork experience\n\nProject Support:\n- Instructor guidance\n- Code reviews\n- Best practices\n- Deployment help\n\nEvery program includes multiple hands-on projects!\n\nContact: +91 9876543210";
    }

    // Success Rate/Results
    if (message.includes('success') || message.includes('result') || message.includes('pass rate') || message.includes('achievement')) {
      return "Our Success Metrics:\n\nTraining Impact:\n- 500+ students trained\n- 95% course completion rate\n- 85% placement rate\n- 40% average salary hike\n\nIndustry Recognition:\n- 100+ hiring partners\n- Tie-ups with top companies\n- Industry-recognized certificates\n- Alumni network in major tech firms\n\nStudent Satisfaction:\n- 5-star average rating\n- 90%+ recommend us\n- High student retention\n\nOur students work at:\n- IT companies\n- Startups\n- MNCs\n- Freelance careers\n\nContact: +91 9876543210";
    }

    // Help/Support
    if (message.includes('help') || message.includes('support') || message.includes('assist') || message.includes('query')) {
      return "We're Here to Help!\n\nHow We Can Assist:\n- Course selection guidance\n- Career counseling\n- Fee structure details\n- Enrollment process\n- Batch information\n- Technical queries\n- General questions\n\nContact Methods:\n- Phone: +91 9876543210\n- Email: info@shanrucktech.com\n- WhatsApp: Available\n- Contact form on website\n\nAvailable:\nMonday - Saturday\n9:00 AM - 6:00 PM\n\nAsk me anything about our programs!";
    }

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return "Hello! Welcome to Shanruck Technologies.\n\nI'm your virtual assistant, here to help you with:\n\n- 7 specialized training programs\n- Enrollment & admission process\n- Course details & duration\n- Placement assistance\n- Fees & payment options\n- Certification information\n- Student testimonials\n- Contact details\n\nTry asking:\n- \"Tell me about Full Stack course\"\n- \"What programs do you offer?\"\n- \"How do I enroll?\"\n- \"What are the fees?\"\n\nHow can I help you today?";
    }

    // Thanks
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're welcome!\n\nHappy to help you explore your career options.\n\nNeed more information?\n- Ask me more questions\n- Call: +91 9876543210\n- Email: info@shanrucktech.com\n- Visit our Contact page\n\nWe're here to support you every step of the way!\n\nGood luck with your learning journey!";
    }

    // Other Questions / Contact for Custom Queries
    if (message.includes('other question') || message.includes('custom query') || message.includes('specific question') || message.includes('not listed') || message.includes('different question') || message.includes('something else') || message.includes('contact us') || message.includes('submit a query') || message.includes('submit query')) {
      return "TRIGGER_QUERY_COLLECTION";
    }

    // Default response - trigger query collection for unrecognized questions
    return "TRIGGER_QUERY_COLLECTION_WITH_MESSAGE";
  };

  // Submit query to server
  const submitQueryToServer = async (formData) => {
    setIsSubmittingQuery(true);
    try {
      const response = await fetch('http://localhost:5000/api/chatbot-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        const successMsg = {
          text: "Your query has been submitted successfully!\n\nThank you for reaching out, " + formData.name + ".\n\nOur team will review your query and contact you at:\nEmail: " + formData.email + "\nPhone: " + formData.phone + "\n\nExpected response time: Within 24 hours\n\nIs there anything else I can help you with?",
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, successMsg]);
      } else {
        throw new Error(data.message || 'Failed to submit query');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      const errorMsg = {
        text: "Sorry, there was an error submitting your query.\n\nPlease try again or contact us directly:\nEmail: info@shanrucktech.com\nPhone: +91 9876543210\n\nWe apologize for the inconvenience.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsSubmittingQuery(false);
      resetQueryCollection();
    }
  };

  // Reset query collection state
  const resetQueryCollection = () => {
    setIsCollectingQuery(false);
    setQueryStep(0);
    setUserQuery('');
    setQueryFormData({ name: '', email: '', phone: '', query: '' });
  };

  // Start query collection process
  const startQueryCollection = (originalQuery = '') => {
    setIsCollectingQuery(true);
    setQueryStep(1);
    setUserQuery(originalQuery);
    setQueryFormData(prev => ({ ...prev, query: originalQuery }));
    
    const collectMsg = {
      text: "Enter your Name, Email, and Phone (Shift+Enter for new line)",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, collectMsg]);
  };

  // Handle query collection steps
  const handleQueryCollectionStep = (input) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    switch (queryStep) {
      case 1: // Collecting all details at once
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
        
        let name = '';
        let email = '';
        let phone = '';
        
        // Try labeled format first: "Name: xxx", "Email: xxx", "Phone: xxx"
        const nameMatch = input.match(/name[:\s]*([^\n]+)/i);
        const emailMatch = input.match(/email[:\s]*([^\s\n]+)/i);
        const phoneMatch = input.match(/phone[:\s]*([^\n]+)/i);
        
        if (nameMatch && emailMatch && phoneMatch) {
          name = nameMatch[1].trim();
          email = emailMatch[1].trim();
          phone = phoneMatch[1].trim();
        } else {
          // Try simple format: each value on a new line (handle both \r\n and \n)
          const lines = input.split(/[\r\n]+/).map(l => l.trim()).filter(l => l.length > 0);
          
          for (const line of lines) {
            const digitsInLine = line.replace(/\D/g, '');
            if (emailRegex.test(line)) {
              email = line;
            } else if (digitsInLine.length >= 9) {
              // Line has 9+ digits - it's a phone number
              phone = line;
            } else if (!name && line.length >= 2 && !/^\d+$/.test(line)) {
              // Not empty, not all digits - it's a name
              name = line;
            }
          }
        }
        
        if (!name || !email || !phone) {
          const errorMsg = {
            text: "Enter Name, Email, Phone on separate lines (Shift+Enter for new line)",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, errorMsg]);
          return;
        }
        
        if (name.length < 2) {
          const errorMsg = {
            text: "Please enter a valid name.",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, errorMsg]);
          return;
        }
        
        if (!emailRegex.test(email)) {
          const errorMsg = {
            text: "Please enter a valid email address.",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, errorMsg]);
          return;
        }
        
        const digitsOnly = phone.replace(/\D/g, '');
        if (digitsOnly.length < 9) {
          const errorMsg = {
            text: "Please enter a valid phone number.",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, errorMsg]);
          return;
        }
        
        // If there's already a query, submit directly
        if (queryFormData.query) {
          const submittingMsg = {
            text: "Submitting your query...",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, submittingMsg]);
          submitQueryToServer({ ...queryFormData, name, email, phone });
        } else {
          setQueryFormData(prev => ({ ...prev, name, email, phone }));
          setQueryStep(4);
          const queryPrompt = {
            text: "Please type your query:",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, queryPrompt]);
        }
        break;
        
      case 4: // Collecting query
        if (input.trim().length < 5) {
          const errorMsg = {
            text: "Please provide more details.",
            sender: 'bot',
            time: currentTime
          };
          setMessages(prev => [...prev, errorMsg]);
          return;
        }
        const updatedFormData = { ...queryFormData, query: input.trim() };
        const submittingMsg2 = {
          text: "Submitting your query...",
          sender: 'bot',
          time: currentTime
        };
        setMessages(prev => [...prev, submittingMsg2]);
        submitQueryToServer(updatedFormData);
        break;
        
      default:
        resetQueryCollection();
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMsg = {
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputMessage;
    setInputMessage('');
    
    // If we're in query collection mode, handle the step
    if (isCollectingQuery) {
      handleQueryCollectionStep(currentInput);
      return;
    }

    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = getBotResponse(currentInput);
      
      // Check if we need to trigger query collection
      if (botResponse === "TRIGGER_QUERY_COLLECTION") {
        setIsTyping(false);
        startQueryCollection('');
        return;
      }
      
      // Check if unrecognized query should trigger collection with the original message
      if (botResponse === "TRIGGER_QUERY_COLLECTION_WITH_MESSAGE") {
        setIsTyping(false);
        setUserQuery(currentInput);
        setQueryFormData(prev => ({ ...prev, query: currentInput }));
        const promptMsg = {
          text: "Email us at info@shanrucktech.com or enter your Name, Email, Phone (Shift+Enter for new line)",
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, promptMsg]);
        setIsCollectingQuery(true);
        setQueryStep(1);
        return;
      }
      
      const botMsg = {
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    // Add to asked questions (except Submit a Query)
    if (reply !== "Submit a Query") {
      setAskedQuestions(prev => [...prev, reply]);
    }
    
    // Add user message directly
    const userMsg = {
      text: reply,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    
    // Handle special case for Submit a Query
    if (reply === "Submit a Query") {
      startQueryCollection('');
      return;
    }
    
    setIsTyping(true);
    
    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      const botMsg = {
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Start a new chat
  const startNewChat = () => {
    setMessages([welcomeMessage]);
    setAskedQuestions([]);
    localStorage.removeItem('chatHistory');
    localStorage.removeItem('askedQuestions');
    setShowMenu(false);
    resetQueryCollection();
  };

  // Clear all chat history
  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear all chat history?')) {
      startNewChat();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
        {!isOpen && (
          <>
            <span className="chat-pulse"></span>
            <span className="chat-ring"></span>
          </>
        )}
      </div>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Chat Header */}
        <div className="chatbot-header">
          <div className="header-content">
            <div className="bot-avatar">
              <FaRobot />
            </div>
            <div className="bot-info">
              <h4>Shanruck Assistant</h4>
              <span className="status">
                <span className="status-dot"></span> Online
                {messages.length > 1 && (
                  <span className="message-count">• {messages.length} messages</span>
                )}
              </span>
            </div>
          </div>
          <div className="header-actions">
            <button 
              className="menu-btn" 
              onClick={() => setShowMenu(!showMenu)}
              title="Options"
            >
              <FaEllipsisV />
            </button>
            {showMenu && (
              <div className="chat-menu">
                <button className="menu-item" onClick={startNewChat}>
                  <FaPlus /> New Chat
                </button>
                <button className="menu-item delete" onClick={clearHistory}>
                  <FaTrash /> Clear History
                </button>
              </div>
            )}
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="message-avatar">
                {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  {message.text}
                </div>
                <div className="message-time">{message.time}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">
                <FaRobot />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isCollectingQuery && quickReplies.filter(reply => !askedQuestions.includes(reply)).length > 0 && (
          <div className="quick-replies-container">
            <button 
              className="quick-replies-toggle"
              onClick={() => setShowQuickReplies(!showQuickReplies)}
            >
              {showQuickReplies ? <FaChevronDown /> : <FaChevronUp />}
              {showQuickReplies ? 'Hide suggestions' : 'Show suggestions'}
            </button>
            {showQuickReplies && (
              <div className="quick-replies">
                {quickReplies.filter(reply => !askedQuestions.includes(reply)).map((reply, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Chat Input */}
        <div className="chatbot-input">
          {isCollectingQuery && (
            <button 
              className="cancel-btn"
              onClick={() => {
                resetQueryCollection();
                const cancelMsg = {
                  text: "Query cancelled. How can I help you?",
                  sender: 'bot',
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, cancelMsg]);
              }}
              title="Cancel"
            >
              <FaTimes />
            </button>
          )}
          {isCollectingQuery ? (
            <textarea
              placeholder="Your Name (Shift+Enter)&#10;your@email.com (Shift+Enter)&#10;1234567890"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              rows={3}
            />
          ) : (
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          )}
          <button 
            className="send-btn" 
            onClick={handleSendMessage}
            disabled={inputMessage.trim() === ''}
            title="Send"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
