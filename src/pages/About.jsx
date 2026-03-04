import { 
  FaLightbulb, 
  FaBullseye, 
  FaUsers, 
  FaHandshake, 
  FaGraduationCap,
  FaRocket
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Main About Section */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Shanruck Technologies</h2>
              <p>
                At <strong>Shanruck Technologies</strong>, we provide immersive bootcamps and training 
                programs to help individuals gain the skills they need to succeed in today's job market.
              </p>
              <p>
                We offer courses in web development, data science, cybersecurity, and more. Our programs 
                are designed especially for freshers with little to no coding experience, and we equip 
                them with the skills they need to land their dream jobs.
              </p>
              <p>
                Our team consists of experienced professionals who are passionate about helping students 
                succeed through hands-on learning, real-world projects, mentorship, and career support.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <FaGraduationCap className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-icon-wrapper">
            <FaLightbulb className="section-icon" />
          </div>
          <h2>Our Vision</h2>
          <p className="vision-content">
            Imagine a world where every individual's potential shines brilliantly. At Shanruck, 
            we envision being the guiding light by offering personalized help and tools that empower 
            individuals and reassure parents. Our goal is to make career exploration a positive journey 
            that is clear, accessible, and full of opportunities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-icon-wrapper">
            <FaBullseye className="section-icon" />
          </div>
          <h2>Our Mission</h2>
          <p className="mission-content">
            We are committed to providing comprehensive career support services that fulfill the unique 
            needs of each individual. Through personalized counseling, multidimensional testing, and access 
            to resources, we empower individuals to make informed decisions about their future careers and 
            help them discover their full potential.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FaRocket />
            </div>
            <h3>Innovation</h3>
            <p>
              We continuously evolve our curriculum to match industry trends and emerging technologies.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h3>Student-Centric</h3>
            <p>
              Every student's success is our priority. We provide personalized attention and support.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaHandshake />
            </div>
            <h3>Integrity</h3>
            <p>
              We maintain the highest standards of honesty and transparency in everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaGraduationCap />
            </div>
            <h3>Excellence</h3>
            <p>
              We are committed to delivering top-quality education and exceptional learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="difference-section">
        <h2>What Sets Us Apart</h2>
        <div className="difference-container">
          <div className="difference-item">
            <div className="difference-number">01</div>
            <h3>Beginner-Friendly Approach</h3>
            <p>
              Our programs are specifically designed for freshers with no prior coding experience. 
              We start from the basics and build up to advanced concepts.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">02</div>
            <h3>Industry-Experienced Mentors</h3>
            <p>
              Learn from professionals who have worked with top companies and have real-world 
              experience in their respective fields.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">03</div>
            <h3>Practical Project-Based Learning</h3>
            <p>
              We believe in learning by doing. Build real projects that you can showcase in 
              your portfolio to potential employers.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">04</div>
            <h3>Comprehensive Career Support</h3>
            <p>
              From resume building to interview preparation and job placement assistance, 
              we support you throughout your career journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
