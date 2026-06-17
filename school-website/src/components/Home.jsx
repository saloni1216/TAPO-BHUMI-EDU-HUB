import "./Home.css";
import Homelogo from "../assets/Home-logo.jpeg";

function Home() {
  return (
    <>
      <section className="hero-image-section">
        <img
          src={Homelogo}
          alt="School"
          className="hero-image"
        />
      </section>

      <section className="hero-content">
        <span className="hero-badge">
          Admissions Open 2026-27
        </span>

        <h1>
          Welcome To TAPOBHUMI EDU HUB
        </h1>

        <p>
          Tapo Bhumi Edu Hub is committed to providing
          quality education that inspires students to
          achieve academic excellence, develop strong
          values, and become responsible global citizens.
          We create a nurturing environment where every
          child can learn, grow, and succeed.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Admission Now
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>1500+</h3>
            <span>Students</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Teachers</span>
          </div>

          <div>
            <h3>25+</h3>
            <span>Years Excellence</span>
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;