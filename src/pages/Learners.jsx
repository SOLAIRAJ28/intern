import { FaStar, FaQuoteLeft, FaUserGraduate } from 'react-icons/fa';
import './Learners.css';

const Learners = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      qualification: 'Full Stack Web Developer',
      feedback: 'Shanruck Technologies transformed my career! The hands-on approach and expert mentorship helped me land my dream job. The instructors are incredibly supportive and the curriculum is very practical.',
      rating: 5,
      course: 'Full Stack Development'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      qualification: 'Python Developer',
      feedback: 'Best decision I ever made! The project-based learning approach made complex concepts easy to understand. I went from zero coding knowledge to building real applications in just 4 months.',
      rating: 5,
      course: 'Python Programming'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      qualification: 'UI/UX Designer',
      feedback: 'The UI/UX course exceeded my expectations. I learned industry-standard tools and design principles. The portfolio projects I built during the course helped me get hired immediately after graduation.',
      rating: 5,
      course: 'UI/UX Design'
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      qualification: 'Java Developer',
      feedback: 'Excellent training program! The instructors have real industry experience and they share practical knowledge. The placement support team was amazing and helped me prepare for interviews.',
      rating: 5,
      course: 'Java Programming'
    },
    {
      id: 5,
      name: 'Ananya Singh',
      qualification: 'React Developer',
      feedback: 'I loved the React course! The small batch size meant I got personalized attention. The projects were challenging but rewarding, and I feel confident in my ability to build modern web applications.',
      rating: 5,
      course: 'JavaScript Frameworks'
    },
    {
      id: 6,
      name: 'Vikram Malhotra',
      qualification: 'Cybersecurity Analyst',
      feedback: 'The cybersecurity program is comprehensive and well-structured. I gained both theoretical knowledge and practical skills. The certification helped me switch careers into the cybersecurity field.',
      rating: 5,
      course: 'Cybersecurity Fundamentals'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className="star-icon" />
    ));
  };

  return (
    <div className="learners">
      {/* Stats Section */}
      <section className="learners-stats">
        <div className="page-title-center">
          <h1>Our Learners</h1>
          <p className="subtitle">Hear from students who have transformed their careers</p>
        </div>
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <h3>85%</h3>
            <p>Placement Rate</p>
          </div>
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Partner Companies</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-intro">
            <h2>Student Success Stories</h2>
            <p>Real reviews from real students who achieved their career goals</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="testimonial-text">"{testimonial.feedback}"</p>

                <div className="testimonial-footer">
                  <div className="student-avatar">
                    <FaUserGraduate />
                  </div>
                  <div className="student-info">
                    <h4>{testimonial.name}</h4>
                    <p className="qualification">{testimonial.qualification}</p>
                    <p className="course">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="success-metrics">
        <h2>Why Students Choose Us</h2>
        <div className="metrics-container">
          <div className="metric-card">
            <div className="metric-icon">💼</div>
            <h3>Career Transformation</h3>
            <p>85% of our students get placed within 3 months of course completion</p>
          </div>

          <div className="metric-card">
            <div className="metric-icon">🎓</div>
            <h3>Quality Education</h3>
            <p>Industry-expert instructors with 10+ years of real-world experience</p>
          </div>

          <div className="metric-card">
            <div className="metric-icon">🚀</div>
            <h3>Skill Development</h3>
            <p>Hands-on projects and practical assignments for portfolio building</p>
          </div>

          <div className="metric-card">
            <div className="metric-icon">🤝</div>
            <h3>Lifetime Support</h3>
            <p>Continuous mentorship and community support even after graduation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="learners-cta">
        <div className="cta-content">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join our community of successful professionals and transform your career today</p>
          <a href="/contact" className="cta-button">
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default Learners;
