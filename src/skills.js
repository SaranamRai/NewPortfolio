import { Link } from "react-router-dom";
import "./skills.css";

function Skills() {
  return (
    <div className="skills-page">

      {/* HERO STYLE HEADER */}
      <section className="skills-hero">
        <div className="skills-container">

          <div className="skills-text">
            <h1>My Skills</h1>
            <p>Technologies & tools I work with</p>

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
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Drone Development</span>
            <span>YOLO / Computer Vision</span>
            <span>Git & GitHub</span>
            <span>Java Programming</span>
            <span>Ms Office</span>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Skills;
