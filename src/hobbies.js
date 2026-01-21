import { Link } from "react-router-dom";
import "./skills.css"; // reuse same design (OK)

function Hobbies() {
  return (
    
    <div className="skills-page">
{/* ===== STICKY NAVBAR ===== */}
      <header className="navbar">
        <div className="nav-container">
          <span className="logo">Portfolio</span>
 </div>
 <header className="smallnav">
        <div className="smallnav-container">
          
 </div>
 </header>
      </header>

      {/* HERO HEADER */}
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

      {/* HOBBIES CARD SECTION */}
      <section className="skills-section">
        <div className="skills-card">

          <div className="skills-grid">
            <span>Drawing</span>
            <span>Cycling</span>
            <span>Travelling</span>
            <span>Playing Guitar</span>
            <span>Listening to Music</span>
            <span>Mobile Gaming</span>
            <span>Driving</span>
            <span>Exploring Technology</span>
          </div>

        </div>
      </section>
<section className="heros">
        
        <div className="hero-last">
         
        </div>
      </section>

    </div>
  );
}

export default Hobbies;
