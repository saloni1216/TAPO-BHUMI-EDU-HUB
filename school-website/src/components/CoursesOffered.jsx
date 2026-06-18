
import "./CoursesOffered.css";
import { useLocation } from "react-router-dom";

function Courses() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  return (
    <div className="courses-page">

      <div className="hero">
        <h1>Courses Offered</h1>
        <p>Choose your stream, unlock your potential, and build a successful future with us</p>
      </div>

      <div className="courses-container">

        {/* SCIENCE STREAM */}
        {(type === "science" || !type) && (
          <div className="course-card science">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
              alt="Science Stream"
            />
            <div className="content">
              <h2>Science Stream</h2>
              <p>
                The Science stream offers a profound understanding of the natural universe and technological innovations. It challenges students to cultivate a strong analytical mindset and experimental problem-solving skills.
              </p>
              <div className="subjects-badge">
                <strong>Core Electives:</strong> Physics, Chemistry, Mathematics, Biology, and Computer Science.
              </div>
              <p><strong>Prominent Career Horizons:</strong></p>
              <ul className="careers-list">
                <li>Engineering & Technology (Software, Mechanical, AI)</li>
                <li>Medical Sciences, Healthcare & Biotechnology</li>
                <li>Scientific Research & Data Analytics</li>
              </ul>
            </div>
          </div>
        )}

        {/* COMMERCE STREAM */}
        {(type === "commerce" || !type) && (
          <div className="course-card commerce">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Commerce Stream"
            />
            <div className="content">
              <h2>Commerce Stream</h2>
              <p>
                The Commerce stream builds a powerhouse foundation in financial literacy, trade economics, and organizational dynamics. It equips future professionals with vital corporate management tools.
              </p>
              <div className="subjects-badge">
                <strong>Core Electives:</strong> Accountancy, Business Studies, Economics, and Entrepreneurship.
              </div>
              <p><strong>Prominent Career Horizons:</strong></p>
              <ul className="careers-list">
                <li>Chartered Accountancy (CA) & Financial Analytics</li>
                <li>Investment Banking & Wealth Management</li>
                <li>Corporate Law & Business Management</li>
              </ul>
            </div>
          </div>
        )}

        {/* ARTS STREAM */}
        {(type === "arts" || !type) && (
          <div className="course-card arts">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Arts Stream"
            />
            <div className="content">
              <h2>Arts & Humanities</h2>
              <p>
                The Arts and Humanities stream offers an extensive look into societal evolution, governance structures, and human psychology. It is meticulously designed to expand creative analysis.
              </p>
              <div className="subjects-badge">
                <strong>Core Electives:</strong> History, Geography, Political Science, Psychology, and Literature.
              </div>
              <p><strong>Prominent Career Horizons:</strong></p>
              <ul className="careers-list">
                <li>Union & State Civil Services (UPSC / Corporate Planning)</li>
                <li>Legal Systems, Public Policy & Judiciary</li>
                <li>Journalism, Content Architecture & Mass Media</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Courses;