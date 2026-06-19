import "./CoursesOffered.css";
import { useLocation } from "react-router-dom";

const STREAMS_DATA = [
  {
    id: "science",
    title: "Science Stream",
    subtitle: "BUILD AN ANALYTICAL MINDSET",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    desc: "The Science stream offers a profound understanding of the natural universe and technological innovations. It challenges students to cultivate a strong analytical mindset and experimental problem-solving skills.",
    electives: "Physics, Chemistry, Mathematics and Biology.",
    careers: "Engineering & Technology (Software, Mechanical, AI), Medical Sciences, Healthcare & Biotechnology, Scientific Research & Data Analytics",
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    subtitle: "BUILD A FINANCIALLY LITERATE FUTURE",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    desc: "The Commerce stream builds a powerhouse foundation in financial literacy, trade economics, and organizational dynamics. It equips future professionals with vital corporate management tools.",
    electives: "Accountancy, Business Studies, Economics, and Entrepreneurship.",
    careers: "Chartered Accountancy (CA) & Financial Analytics, Investment Banking & Wealth Management, Corporate Law & Business Management",
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    subtitle: "BUILD YOUR CREATIVE PERSPECTIVE",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    desc: "The Arts and Humanities stream offers an extensive look into societal evolution, governance structures, and human psychology. It is meticulously designed to expand creative analysis.",
    electives: "History, Geography, Political Science, Psychology, and Literature.",
    careers: "Union & State Civil Services (UPSC), Legal Systems, Public Policy & Judiciary, Journalism, Content Architecture & Mass Media",
  },
];

function Courses() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const filteredStreams = type 
    ? STREAMS_DATA.filter((stream) => stream.id === type)
    : STREAMS_DATA;

  return (
    <div className="courses-page">
      <div className="sections-wrapper">
        {filteredStreams.map((stream, index) => (
          <section key={stream.id} className={`stream-section ${index % 2 !== 0 ? "reverse" : ""}`}>
            
            {/* Left Column: Content Area */}
            <div className="text-container">
              <h2 className="section-title">{stream.title}</h2>
              <span className="section-subtitle">{stream.subtitle}</span>
              
              <p className="main-desc">{stream.desc}</p>
              
              <p className="sub-desc">
                <strong>Core Electives:</strong> {stream.electives}
              </p>
              
              <p className="sub-desc">
                <strong>Career Horizons:</strong> {stream.careers}
              </p>
              
              <button className="enroll-btn">Enroll Today</button>
            </div>

            {/* Right Column: Dynamic Image with Graphic Cutout */}
            <div className="graphic-container">
              <div className="bg-shape"></div>
              <div className="image-box">
                <img src={stream.img} alt={stream.title} />
              </div>
            </div>

          </section>
        ))}
      </div>
    </div>
  );
}

export default Courses;