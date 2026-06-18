
import "./Achievements.css";

function Achievement() {
  const achievements = [
    {
      title: "Academic Excellence",
      icon: "🏆",
      description:
        "Students consistently achieve outstanding results in university examinations and academic competitions."
    },
    {
      title: "Sports Achievement",
      icon: "⚽",
      description:
        "Our students have represented the institution at district, state, and national level sports events."
    },
    {
      title: "Cultural Excellence",
      icon: "🎭",
      description:
        "Students actively participate and win prizes in cultural festivals, debates, and performing arts."
    },
    {
      title: "Innovation & Research",
      icon: "💡",
      description:
        "Young innovators have showcased projects and research work at various exhibitions and competitions."
    },
    {
      title: "Placement Success",
      icon: "💼",
      description:
        "Graduates have secured placements in reputed organizations and institutions."
    },
    {
      title: "Community Service",
      icon: "🤝",
      description:
        "Students contribute actively through NSS activities, social campaigns, and awareness programs."
    }
  ];

  return (
    <div className="achievement-page">

      {/* Hero Section */}
      <div className="achievement-hero">
        <div className="achievement-overlay">
          <h1>Our Achievements</h1>
          <p>
            Celebrating excellence in academics, sports, culture,
            innovation, and community service.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="achievement-intro">
        <h2>Proud Moments of Excellence</h2>
        <p>
          Our institution believes in nurturing talent and empowering
          students to achieve success in every field. Over the years,
          students and faculty have brought numerous accolades and
          recognitions that reflect our commitment to quality education.
        </p>
      </div>

      {/* Cards */}
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="achievement-stats">

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Successful Students</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>Awards Won</p>
        </div>

        <div className="stat-box">
          <h2>95%</h2>
          <p>Academic Success Rate</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Sports Medals</p>
        </div>

      </div>

    </div>
  );
}

export default Achievement;