import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaEllipsisV, FaTrash, FaPlus, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const navigate = useNavigate();
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
    text: "Hello! I'm the Shanruck Assistant, here to help you.",
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
      return "Full Stack Web Development\n\nWhat You'll Learn:\n- Front-end: HTML, CSS, JavaScript, React\n- Back-end: Node.js, Express, MongoDB\n- RESTful APIs & Database Design\n\nLevel: Beginner to Advanced\n\n[PROGRAMS_LINK]";
    }

    // Python Programming
    if (message.includes('python') && !message.includes('course') && !message.includes('program')) {
      return "Python Project-Based Learning\n\nWhat You'll Learn:\n- Python fundamentals & syntax\n- Data structures & OOP\n- Web scraping & automation\n- Real-world project development\n\nLevel: Beginner Friendly\n\n[PROGRAMS_LINK]";
    }

    // WordPress Development
    if (message.includes('wordpress') || message.includes('wp') || message.includes('website')) {
      return "WordPress Development\n\nWhat You'll Learn:\n- WordPress setup & configuration\n- Theme customization & development\n- Plugin development\n- SEO optimization\n\nLevel: Beginner Friendly\n\n[PROGRAMS_LINK]";
    }

    // Java Programming
    if (message.includes('java') && !message.includes('javascript')) {
      return "Java Programming\n\nWhat You'll Learn:\n- Java fundamentals & OOP concepts\n- Collections & data structures\n- Multithreading & concurrency\n- JDBC & database integration\n\nLevel: Beginner to Advanced\n\n[PROGRAMS_LINK]";
    }

    // JavaScript Frameworks (React & Angular)
    if (message.includes('javascript') || message.includes('react') || message.includes('angular') || message.includes('framework')) {
      return "JavaScript Frameworks - Angular & React\n\nWhat You'll Learn:\n- Advanced JavaScript (ES6+)\n- React fundamentals & hooks\n- Angular architecture\n- State management\n\nLevel: Intermediate\n\n[PROGRAMS_LINK]";
    }

    // UI/UX Design
    if (message.includes('ui') || message.includes('ux') || message.includes('design') || message.includes('figma')) {
      return "UI/UX Design\n\nWhat You'll Learn:\n- Design thinking & principles\n- Figma & design tools mastery\n- Prototyping & wireframing\n- User research & testing\n\nLevel: Beginner Friendly\n\n[PROGRAMS_LINK]";
    }

    // Cybersecurity
    if (message.includes('cyber') || message.includes('security') || message.includes('ethical') || message.includes('hacking')) {
      return "Cybersecurity Fundamentals\n\nWhat You'll Learn:\n- Network security basics\n- Ethical hacking techniques\n- Cryptography essentials\n- Vulnerability assessment\n\nLevel: Beginner to Intermediate\n\n[PROGRAMS_LINK]";
    }

    // General Courses/Programs Query
    if (message.includes('course') || message.includes('program') || message.includes('training') || message.includes('learn')) {
      return "Our 7 Programs:\n\n1. Full Stack Web Development\n2. Python Project-Based Learning\n3. WordPress Development\n4. Java Programming\n5. JavaScript Frameworks (React & Angular)\n6. UI/UX Design\n7. Cybersecurity Fundamentals\n\n[PROGRAMS_LINK]";
    }

    // About Shanruck Technologies
    if (message.includes('about') || message.includes('who are you') || message.includes('company') || message.includes('shanruck')) {
      return "About Shanruck Technologies:\n\nWe provide immersive training programs to help you develop practical skills for today's competitive job market.\n\nFor more details, [CONTACT_LINK]";
    }

    // Benefits / What You Get
    if (message.includes('benefit') || message.includes('feature') || message.includes('what will i get') || message.includes('include')) {
      return "What You Get With Every Program:\n\n- Live Interactive Classes\n- Hands-On Projects\n- Expert Mentorship\n- Official Certification\n- Placement Assistance\n\nFor more details, [CONTACT_LINK]";
    }

    // Enrollment/Registration
    if (message.includes('enroll') || message.includes('register') || message.includes('join') || message.includes('admission') || message.includes('apply')) {
      return "Enrollment Process:\n\n1. Visit our Contact page\n2. Fill out the enquiry form\n3. Our team contacts you within 24 hours\n\n[CONTACT_LINK]";
    }

    // Duration
    if (message.includes('duration') || message.includes('how long') || message.includes('time period')) {
      return "Program durations vary by course.\n\n[PROGRAMS_LINK]";
    }

    // Contact/Location
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('location') || message.includes('address') || message.includes('reach')) {
      return "Visit our Contact page for all contact details.\n\n[CONTACT_LINK]";
    }

    // Fees/Price
    if (message.includes('fee') || message.includes('cost') || message.includes('price') || message.includes('charge') || message.includes('payment')) {
      return "For fee details, please [CONTACT_LINK]";
    }

    // Placement/Job/Career Support
    if (message.includes('placement') || message.includes('job') || message.includes('career') || message.includes('hire') || message.includes('salary')) {
      return "Yes, we do provide placement support!\n\nFor detailed information, please [CONTACT_LINK]";
    }

    // Certification
    if (message.includes('certificate') || message.includes('certification') || message.includes('credential')) {
      return "Yes, we provide official certification upon course completion.\n\nFor more details, [CONTACT_LINK]";
    }

    // Mentorship/Instructors
    if (message.includes('mentor') || message.includes('teacher') || message.includes('instructor') || message.includes('trainer') || message.includes('faculty')) {
      return "Our instructors are industry professionals with real-world experience.\n\nFor more details, [CONTACT_LINK]";
    }

    // Online/Offline/Mode
    if (message.includes('online') || message.includes('offline') || message.includes('mode') || message.includes('class') || message.includes('batch')) {
      return "We offer online, offline, and hybrid learning modes.\n\nFor batch timings, [CONTACT_LINK]";
    }

    // Prerequisites/Requirements
    if (message.includes('prerequisite') || message.includes('requirement') || message.includes('beginner') || message.includes('need to know') || message.includes('experience')) {
      return "Most of our courses are beginner-friendly with no prior experience needed.\n\nFor specific requirements, [CONTACT_LINK]";
    }

    // Student Reviews/Testimonials
    if (message.includes('review') || message.includes('testimonial') || message.includes('feedback') || message.includes('student') || message.includes('alumni')) {
      return "Our students have shared positive feedback about their learning experience.\n\nFor more details, [CONTACT_LINK]";
    }

    // Batch/Schedule
    if (message.includes('batch') || message.includes('timing') || message.includes('schedule') || message.includes('when start')) {
      return "We have weekday and weekend batches available.\n\nFor batch timings, [CONTACT_LINK]";
    }

    // Demo/Trial Class
    if (message.includes('demo') || message.includes('trial') || message.includes('free class') || message.includes('sample')) {
      return "Yes, we offer free demo classes!\n\nTo book, [CONTACT_LINK]";
    }

    // Projects/Portfolio
    if (message.includes('project') || message.includes('portfolio') || message.includes('practical') || message.includes('hands-on')) {
      return "Yes, all our programs include hands-on projects.\n\nFor more details, [CONTACT_LINK]";
    }

    // Success Rate/Results
    if (message.includes('success') || message.includes('result') || message.includes('pass rate') || message.includes('achievement')) {
      return "We have trained 500+ students with good placement results.\n\nFor more details, [CONTACT_LINK]";
    }

    // Help/Support
    if (message.includes('help') || message.includes('support') || message.includes('assist') || message.includes('query')) {
      return "How can I help you? Feel free to ask about our programs.\n\nOr [CONTACT_LINK]";
    }

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon') || message.includes('good evening')) {
      return "Hello! Welcome to Shanruck Technologies.\n\nHow can I help you today?";
    }

    // Thanks
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're welcome! Feel free to ask if you have more questions.";
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
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    try {
      // Wake up backend first
      try {
        await fetch(`${apiUrl}/api/health`, { method: 'GET', mode: 'cors' });
      } catch (_) { /* ignore */ }

      const response = await fetch(`${apiUrl}/api/chatbot-query`, {
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
                  {(() => {
                    let text = message.text;
                    const hasContactLink = text.includes('[CONTACT_LINK]');
                    const hasProgramsLink = text.includes('[PROGRAMS_LINK]');
                    
                    if (!hasContactLink && !hasProgramsLink) {
                      return text;
                    }
                    
                    const parts = [];
                    let remaining = text;
                    
                    while (remaining.includes('[CONTACT_LINK]') || remaining.includes('[PROGRAMS_LINK]')) {
                      const contactIdx = remaining.indexOf('[CONTACT_LINK]');
                      const programsIdx = remaining.indexOf('[PROGRAMS_LINK]');
                      
                      let nextIdx, linkType;
                      if (contactIdx === -1) {
                        nextIdx = programsIdx;
                        linkType = 'programs';
                      } else if (programsIdx === -1) {
                        nextIdx = contactIdx;
                        linkType = 'contact';
                      } else {
                        nextIdx = Math.min(contactIdx, programsIdx);
                        linkType = contactIdx < programsIdx ? 'contact' : 'programs';
                      }
                      
                      if (nextIdx > 0) {
                        parts.push(remaining.substring(0, nextIdx));
                      }
                      
                      if (linkType === 'contact') {
                        parts.push(
                          <span 
                            key={parts.length}
                            className="chat-nav-link" 
                            onClick={() => { setIsOpen(false); navigate('/contact'); }}
                          >
                            Contact Us
                          </span>
                        );
                        remaining = remaining.substring(nextIdx + '[CONTACT_LINK]'.length);
                      } else {
                        parts.push(
                          <span 
                            key={parts.length}
                            className="chat-nav-link chat-programs-link" 
                            onClick={() => { setIsOpen(false); navigate('/programs'); }}
                          >
                            View Programs
                          </span>
                        );
                        remaining = remaining.substring(nextIdx + '[PROGRAMS_LINK]'.length);
                      }
                    }
                    
                    if (remaining) {
                      parts.push(remaining);
                    }
                    
                    return parts;
                  })()}
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
