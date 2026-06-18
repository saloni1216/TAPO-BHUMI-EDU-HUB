import "./About.css";
import campus2 from "../assets/campus2.jpeg";
import Campus71 from "../assets/campus71.png";
import Campus4 from "../assets/campus4.jpeg";


function About() {
  return (
    <section className="about-page">
      
      <div className="about-heading-wrapper">
        <div className="about-heading">
          <span className="welcome-tag">Welcome to Tapo Bhumi</span>
          <h1>About Us</h1>
          <p>
            At Tapo Bhumi Edu Hub, we inspire students to
            learn, grow, and achieve excellence through
            quality education and strong values.
          </p>
        </div>
        
        <div className="about-top-banner">
          <img 
            src={Campus71} 
            alt="Tapo Bhumi Beautiful Campus Banner" 
            className="top-hero-image"
          />
        </div>
      </div>
      <div className="about-container">

        <div className="about-content">
          <h2>
            We're Building Future
            <span> Leaders</span>
          </h2>

          <p>
            Tapo Bhumi Edu Hub is committed to nurturing
            young minds through innovative teaching,
            academic excellence, and character development.
          </p>

          <p>
            Our mission is to provide students with a
            supportive learning environment where they can
            develop confidence, creativity, leadership,
            and lifelong learning skills.
          </p>

          <p>
            We believe education is not just about
            academics—it is about preparing students for
            success in life and helping them become
            responsible citizens of tomorrow.
          </p>

          <div className="about-features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <div>
                <h3>Quality Education</h3>
                <p>Providing top-tier study standards and academic resources.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div>
                <h3>Strong Values</h3>
                <p>Nurturing character, integrity, and social responsibility.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <div>
                <h3>Future Leaders</h3>
                <p>Empowering students with dynamic leadership and growth skills.</p>
              </div>
            </div>
          </div>

        </div>


        <div className="about-images">
          <div className="image-stack-wrapper">
            <img
              src={Campus4 }
              alt="Students activity top view"
              className="img-top"
            />
            <img
              src={campus2}
              alt="Students learning layout"
              className="img-bottom"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;