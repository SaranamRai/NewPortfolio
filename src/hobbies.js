import { Link } from "react-router-dom";
import "./skills.css";

function Skills() {
  return (
    <div className="skills-page">

      {/* HERO STYLE HEADER */}
      <section className="skills-hero">
        <div className="skills-container">

          <div className="skills-text">
            <h1>My Hobbies</h1>
            <p>Things I enjoy doing</p>

            <Link to="/">
              <button className="btn secondary">← Back to Home</button>
            </Link>
          </div>

        </div>
      </section>

      {/* SKILLS CARD SECTION */}
      <section className="skills-section">
        <div className="skills-card">

          <div className="skills-grid">
            <span>Drawing</span>
            <span>Cycling</span>
            <span>Travelling</span>
            <span>Eating</span>
            <span>Playing Guitar</span>
            <span>Listening Music</span>
            <span>Mobile Gaming</span>
            <span>Driving Car</span>
          </div>

        </div>
      </section>

    </div>
  );
}

