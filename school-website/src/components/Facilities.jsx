import './Facilities.css'; 
import facilites2 from "../assets/facilities2.jpeg";

 function Facilities() {
  const facilitiesData = [
    {
      id: 1,
      title: "Transport Facility (School Bus)",
      description: "Hamari GPS-enabled school buses poore shahar me safe aur comfortable safar provide karti hain. Har bus me trained drivers aur vigilant conductors hote hain jo bachhon ki suraksha ka poora dhyan rakhte hain.",
      icon: "🚌"
    },
    {
      id: 2,
      title: "Central Library & Resource Center",
      description: "Ek shant aur gyan se bharpani jagah jahan hazaron reference books, motivational kahaniyan, educational journals, aur digital learning tools maujood hain, jo bachhon me padhne ki aadat ko badhava dete hain.",
      icon: "📚"
    },
    {
      id: 3,
      title: "Grand Sports Complex",
      description: "Bachhon ke sarvangeen vikas (physical development) ke liye hamare paas bada khel ka maidan hai. Yahan cricket, football, basketball, aur judo-karate jaise khelo ke liye professional coaching di jaati hai.",
      icon: "⚽"
    },
    {
      id: 4,
      title: "Smart Digital Classrooms",
      description: "Padhai ko aur bhi mazedaar aur asaan banane ke liye hamare saare classrooms modern smart boards aur audio-visual facilities se equipped hain, jahan bachhe animation aur practical videos ke zariye seekhte hain.",
      icon: "🖥️"
    }
  ];

  return (
    <div className="facilities-page-container">

      <div className="facilities-hero-banner-video">
        <img
    src={facilites2}
    alt="Facilities Hero Banner"
  />
      </div>
      

      {/* <div className="facilities-hero-banner-video">
        <video 
          src="/your-video-file.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="bg-video"
        />
      </div> */}

      {/* Blue Ribbon Intro Section */}
      <div className="facilities-intro-box">
        <p className="facilities-intro-text">
          We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students and take care of seating arrangements.
        </p>
      </div>

      {/* Facilities Cards Grid Section */}
      <section className="facilities-content-section">
        <div className="facilities-cards-grid">
          {facilitiesData.map((facility) => (
            <div key={facility.id} className="single-facility-card">
              <div className="facility-icon-wrapper">{facility.icon}</div>
              <div className="facility-details">
                <h3 className="facility-card-title">{facility.title}</h3>
                <p className="facility-card-desc">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
export default Facilities;