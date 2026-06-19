import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mobile sub-menus ko hide/show karne ke liye states
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Menu band hote hi sub-menus ko bhi reset kar denge
    if (isMenuOpen) {
      setIsCoursesOpen(false);
      setIsCareersOpen(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
    setIsCoursesOpen(false);
    setIsCareersOpen(false);
  };

  // Mobile ke liye toggle handlers
  const toggleCourses = (e) => {
    if (window.innerWidth <= 900) {
      e.stopPropagation();
      setIsCoursesOpen(!isCoursesOpen);
    }
  };

  const toggleCareers = (e) => {
    if (window.innerWidth <= 900) {
      e.stopPropagation();
      setIsCareersOpen(!isCareersOpen);
    }
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

          {/* COURSES DROPDOWN */}
          <li className="course-dropdown-menu" onClick={toggleCourses}>
            COURSES OFFERED {isCoursesOpen ? "▲" : "▼"}
            <ul className={`course ${isCoursesOpen ? "sub-menu-open" : "sub-menu-hide"}`}>
              <li onClick={() => handleNavigation("/courses?type=science")}>Science</li>
              <li onClick={() => handleNavigation("/courses?type=commerce")}>Commerce</li>
              <li onClick={() => handleNavigation("/courses?type=arts")}>Arts</li>
            </ul>
          </li>

          {/* CAREERS DROPDOWN */}
          <li className="career-dropdown-menu" onClick={toggleCareers}>
            CAREERS {isCareersOpen ? "▲" : "▼"}
            <ul className={`career-dropdown ${isCareersOpen ? "sub-menu-open" : "sub-menu-hide"}`}>
              <li onClick={() => handleNavigation("/careers")}>Teachers Recruitment</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;