import "./Careers.css";

function Careers() {
  return (
    <div className="career-page">

      {/* Hero Section */}
      <div className="career-banner">
        <h1>Teachers Recruitment</h1>
        <p>
          Join Tapobhumi Edu. Hub and become a part of our mission to
          inspire, educate, and empower the next generation.
        </p>
      </div>

      {/* Content Section */}
      <div className="career-content">
        <h2>Why Join Us?</h2>

        <p>
          We are looking for passionate, dedicated, and qualified
          educators who are committed to providing quality education
          and creating a positive learning environment for students.
        </p>

        <div className="benefits">
          <div className="benefit-card">
            <h3>Professional Growth</h3>
            <p>Opportunities for continuous learning and development.</p>
          </div>

          <div className="benefit-card">
            <h3>Supportive Environment</h3>
            <p>Work with experienced educators in a collaborative culture.</p>
          </div>

          <div className="benefit-card">
            <h3>Modern Facilities</h3>
            <p>Access to advanced teaching tools and resources.</p>
          </div>
        </div>
      </div>


<iframe
  aria-label="Teacher Recruitment"
  frameBorder="0"
  style={{ height: "500px", width: "99%", border: "none" }}
  src="https://forms.zohopublic.in/salonisingh21cs51gm1/form/TeacherRecrument/formperma/P87wfNcs_GQeH4kq623r3Qr9wDjRswqVMNIpSI3HDYI"
  title="Teacher Recruitment Form"
>
</iframe>
    </div>
  );
}

export default Careers;