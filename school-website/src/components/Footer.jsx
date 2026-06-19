import "./Footer.css";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding Section */}
        <div className="footer-section brand-column">
          <h2>TAPOBHUMI EDU HUB</h2>
          <p>
            Building confident learners and future leaders through excellence in
            education, innovation, and strong values.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links-column">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/admissions")}>Admissions</li>
            <li onClick={() => navigate("/facilities")}>Facilities</li>
            <li onClick={() => navigate("/gallery")}>Gallery</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact-column">
          <h3>Contact Us</h3>
          <div className="contact-info-list">
            <p className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                Banki Road, Near Water Tank,<br />
                Bharuwa Sumerpur,<br />
                Hamirpur, Uttar Pradesh - 210502
              </span>
            </p>
            <p className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+918957252525">+91 8957252525</a>
            </p>
            <p className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tapobhumieduhub@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                tapobhumieduhub@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-column">
          <h3>Follow Us</h3>
          <p className="social-tagline">Stay connected with our latest updates</p>
          <div className="social-icons">
            <a href="https://x.com/TAPOBHUMEDUHUB" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/tapobhumieduhub?igsh=eWRjNzBteThycnB5" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@TAPOBHUMIEDUHUB" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591021527061" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TAPOBHUMI EDU HUB | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;