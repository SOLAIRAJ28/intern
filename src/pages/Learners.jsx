import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaStar, FaQuoteLeft, FaUserGraduate, FaBriefcase, FaGraduationCap, FaRocket, FaHandshake } from 'react-icons/fa';
import './Learners.css';

const Learners = () => {
  
  const testimonials = [
    {
      id: 1,
      name: 'Abinaya',
      qualification: 'Full Stack Web Developer',
      feedback: 'Shanruck Technologies transformed my career! The hands-on approach and expert mentorship helped me land my dream job. The instructors are incredibly supportive and the curriculum is very practical.',
      rating: 5,
      course: 'Full Stack Development'
    },
    {
      id: 2,
      name: 'Arun',
      qualification: 'Python Developer',
      feedback: 'Best decision I ever made! The project-based learning approach made complex concepts easy to understand. I went from zero coding knowledge to building real applications in just 4 months.',
      rating: 5,
      course: 'Python Programming'
    },
    {
      id: 3,
      name: 'Anu',
      qualification: 'UI/UX Designer',
      feedback: 'The UI/UX course exceeded my expectations. I learned industry-standard tools and design principles. The portfolio projects I built during the course helped me get hired immediately after graduation.',
      rating: 5,
      course: 'UI/UX Design'
    },
    {
      id: 4,
      name: 'Karthik',
      qualification: 'Java Developer',
      feedback: 'Excellent training program! The instructors have real industry experience and they share practical knowledge. The placement support team was amazing and helped me prepare for interviews.',
      rating: 5,
      course: 'Java Programming'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className="star-icon" />
    ));
  };

  return (
    <div className="learners">
      <Helmet>
        <title>Student Success Stories | Shanruck Technologies</title>
        <meta name="description" content="Read real success stories and reviews from students who achieved their career goals with Shanruck Technologies." />
      </Helmet>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>Student Success Stories</h2>
            <p>Real reviews from students who achieved their career goals</p>
          </div>
          
          <div className="carousel-wrapper">
            <div className="testimonials-carousel">
              <div className="carousel-track">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="quote-icon">
                      <FaQuoteLeft />
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
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="success-metrics">
        <h2>Why Students Choose Us</h2>
        <div className="metrics-container">
          <div className="metric-card">
            <div className="metric-icon">
              <FaBriefcase />
            </div>
            <h3>Career Transformation</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <FaGraduationCap />
            </div>
            <h3>Quality Education</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <FaRocket />
            </div>
            <h3>Skill Development</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <FaHandshake />
            </div>
            <h3>Lifetime Support</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="learners-cta">
        <div className="cta-content">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join our community of successful professionals and transform your career today</p>
          <Link to="/programs" className="cta-button">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Learners;
