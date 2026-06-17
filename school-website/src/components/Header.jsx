import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="logo">
           <img src={logo} alt="School Logo" />
          <h2>Tapobhumi Edu. Hub</h2>
        </div>

        <div className="top-buttons">
          <a href="/">Contact Us</a>
          <button className="login-btn">Login</button>
          <button className="login-btn">Register</button>


        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>STUDENT LIFE</li>
          <li>FACILITIES</li>
          <li>GALLERY</li>
          <li>ACHIEVEMENTS</li>
          <li>CAREERS</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;