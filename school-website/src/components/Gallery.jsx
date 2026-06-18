
import "./Gallery.css";

import gallery1 from "../assets/aboutimage.png";
import gallery2 from "../assets/campus1.jpeg";
import gallery3 from "../assets/campus2.jpeg";
import gallery4 from "../assets/campus3.jpeg";
import gallery5 from "../assets/campus4.jpeg";
import gallery6 from "../assets/campus5.jpeg";
import gallery7 from "../assets/campus6.jpeg";
import gallery8 from "../assets/campus71.png";
import gallery9 from "../assets/facilities2.jpeg";
import gallery10 from "../assets/Home-logo.jpeg";


const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10
];

function Gallery() {
  return (
    <div className="gallery-page">

      {/* Hero Section */}
      <div className="gallery-hero"  style={{ backgroundImage: `url(${gallery8})` }}>
        <h1>College Gallery</h1>
        <p>
          Explore memorable moments, academic achievements, cultural events,
          campus life, modern facilities, and student activities through our
          gallery.
        </p>
      </div>

      {/* About Gallery */}
      <div className="gallery-intro">
        <h2>Life at Our College</h2>
        <p>
          Our college provides a vibrant environment where students grow
          academically, socially, and professionally. The gallery showcases
          campus infrastructure, classrooms, laboratories, library facilities,
          seminars, workshops, sports events, annual functions, and various
          student achievements.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`College Gallery ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;