import { 
  FaLightbulb, 
  FaCompass, 
  FaUsers, 
  FaHandshake, 
  FaGraduationCap,
  FaRocket,
  FaBullseye
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Main About Section */}
      <section className="about-main">
        <div className="about-container">
          {/* Section Header */}
          <div className="section-header">
            {/* <div className="header-badge">Who We Are</div> */}
            <h1>About Us</h1>
            <p>Empowering the next generation of tech professionals through quality education and mentorship.</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h2>Create Your Tomorrow With Us</h2>
              <p>
                At <strong>Shanruck Technologies</strong>, we provide immersive bootcamps and training programs to help individuals gain the skills they need to succeed in today's job market. We offer courses in Web Development, Data Science, Cybersecurity, and more. Our programs are designed for freshers with little to no coding experience, and we equip them with the skills they need to land their dream jobs. </p>
              <p>
                Our team is made up of experienced professionals who are passionate about helping others succeed. We believe in hands-on learning and provide students with real-world projects, mentorship, and career support.
              </p>
              {/* <p>
                Our experienced mentors focus on hands-on learning through real-world projects, industry 
                guidance, and career development support.
              </p> */}
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <FaGraduationCap className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Side by Side */}
      <section className="vision-mission-wrapper">
        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-container">
            <div className="vision-icon-wrapper">
              <FaLightbulb className="section-icon" />
            </div>
            <h2>Our Vision</h2>
            <p className="vision-content">
              Imagine a world where every individual's potential shines brilliantly. At Shanruck, we envision being the guiding light, offering personalized help and tools that empower individuals and reassure parents. Our goal is to make career exploration a positive journey that is clear, accessible, and full of opportunities.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-container">
            <div className="mission-icon-wrapper">
              <FaCompass className="section-icon" />
            </div>
            <h2>Our Mission</h2>
            <p className="mission-content">
              We are committed to provide comprehensive career support services that fulfills to the unique  needs  of  each  individual.  Through  personalized  counseling,  multidimensional testing, and access to resources, we aim to empower individuals to make informed decisions about their future careers. Our mission is to support individuals in knowing their full potential and embarking on fulfilling career paths.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="values-section">
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
      </section> */}

      {/* What Sets Us Apart */}
      <section className="difference-section">
        <div className="values-header">
          <div className="values-icon-wrapper">
            <FaBullseye className="section-icon" />
          </div>
          <h2>Our Core Values</h2>
        </div>
        <div className="difference-container">
          <div className="difference-item">
            <div className="difference-number">01</div>
            <h3>Innovation</h3>
            <p>
              We continuously evolve our curriculum to match industry trends and emerging technologies.
            </p>
          </div>

          <div className="difference-item">
            <div className="difference-number">02</div>
            <h3>Student-Centric</h3>
            <p>
              Every student's success is our priority. We provide personalized attention and support.
            </p>
          </div>

          {/* <div className="difference-item">
            <div className="difference-number">03</div>
            <h3>Integrity</h3>
            <p>
                We maintain the highest standards of honesty and transparency in everything we do.
              </p>
          </div> */}

          <div className="difference-item">
            <div className="difference-number">03</div>
            <h3>Excellence</h3>
            <p>
              We are committed to delivering top-quality education and exceptional learning experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
