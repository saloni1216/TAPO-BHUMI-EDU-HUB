import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-header">
        <div className="logo">
          <img src={logo} alt="School Logo" />
          <h2>Tapobhumi Edu. Hub</h2>
        </div>

        <div className="top-buttons">
          <button onClick={() => navigate("/contact")} className="login-btn">
            Contact Us
          </button>

          <button className="login-btn">Login</button>
          <button className="login-btn">Register</button>
        </div>
      </div>

      <nav className="navbar">
        <ul>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/about")}>ABOUT US</li>
          <li onClick={() => navigate("/studentlife")}>STUDENT LIFE</li>
          <li onClick={() => navigate("/facilities")}>FACILITIES</li>
          <li onClick={() => navigate("/gallery")}>GALLERY</li>
          <li onClick={() => navigate("/achievements")}>ACHIEVEMENTS</li>
          <li onClick={() => navigate("/careers")}>CAREERS</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;