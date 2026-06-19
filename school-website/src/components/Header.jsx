import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
  };

  return (
    <>
      <div className="top-header">
        <div className="logo" onClick={() => handleNavigation("/")}>
          <img src={logo} alt="School Logo" />
          <h2>Tapobhumi Edu. Hub</h2>
        </div>

        <div className="top-buttons">
          <button onClick={() => handleNavigation("/contact")} className="contact-btn">
            Contact Us
          </button>
          
          
          <button className={`menu-toggle-btn ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? "mobile-open" : ""}`}>
        <ul>
          <li onClick={() => handleNavigation("/")}>HOME</li>
          <li onClick={() => handleNavigation("/about")}>ABOUT US</li>
          <li onClick={() => handleNavigation("/studentlife")}>STUDENT LIFE</li>
          <li onClick={() => handleNavigation("/facilities")}>FACILITIES</li>
          <li onClick={() => handleNavigation("/gallery")}>GALLERY</li>
          <li onClick={() => handleNavigation("/achievements")}>ACHIEVEMENTS</li>

          <li className="course-dropdown-menu">
            COURSES OFFERED ▼
            <ul className="course">
              <li onClick={() => handleNavigation("/courses?type=science")}>Science</li>
              <li onClick={() => handleNavigation("/courses?type=commerce")}>Commerce</li>
              <li onClick={() => handleNavigation("/courses?type=arts")}>Arts</li>
            </ul>
          </li>

          <li className="career-dropdown-menu">
            CAREERS ▼
            <ul className="career-dropdown">
              <li onClick={() => handleNavigation("/careers")}>Teachers Recruitment</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;