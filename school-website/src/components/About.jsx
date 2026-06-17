import "./About.css";
import AboutImg from "../assets/about-school.jpeg";

function About() {
  return (
    <section className="about-page">

      <div className="about-heading">
        <h1>About Us</h1>

        <p>
          At Tapo Bhumi Edu Hub, we inspire students to
          learn, grow, and achieve excellence through
          quality education and strong values.
        </p>
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

          <button>Learn More</button>

        </div>

        <div className="about-images">

          <img
            src={AboutImg}
            alt="Students"
            className="img-top"
          />

          <img
            src={AboutImg}
            alt="Students"
            className="img-bottom"
          />

        </div>

      </div>

    </section>
  );
}

export default About;