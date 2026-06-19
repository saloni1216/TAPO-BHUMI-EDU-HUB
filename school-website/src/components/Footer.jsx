import "./Footer.css";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>TAPOBHUMI EDU HUB</h2>

          <p>
            Building confident learners and future leaders through excellence in
            education, innovation, and strong values.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Admissions</li>
            <li>Facilities</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            📍 Banki Road, Near Water Tank
            <br />
            Bharuwa Sumerpur
            <br />
            Hamirpur, Uttar Pradesh - 210502
          </p>
          <p>📞 +91 8957252525</p>
          <p>
            ✉️
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tapobhumieduhub@gmail.com"
              target="_blank"

              style={{ color: "#fff", textDecoration: "none" }}
            >
              tapobhumieduhub@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://x.com/TAPOBHUMEDUHUB"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/tapobhumieduhub?igsh=eWRjNzBteThycnB5"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@TAPOBHUMIEDUHUB"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591021527061"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 TAPO BHUMI EDU HUB | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
