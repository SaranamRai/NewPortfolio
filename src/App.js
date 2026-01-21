import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Skills from "./skills";
import Hobbies from "./hobbies";

/* ================= HOME PAGE ================= */
function Home() {
  return (
    <div className="page">

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

      
 
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-text">
            <h1>SARANAM RAI</h1>
            <p className="role">
              MCA Student | Web Developer | Drone Developer
            </p>

            <div className="buttons">
              <Link to="/hobbies">
                <button className="btn primary">Hobbies</button>
              </Link>

              <Link to="/skills">
                <button className="btn secondary">View Skills</button>
              </Link>
            </div>

            <br />

            <div className="contact">
              <h4>Contact: 9635169216</h4>
              <h4>Email: saranamrai699@gmail.com</h4>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image">
            <img src="/me.jpeg" alt="Profile" />
          </div>

        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about-section">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I am a <b>BCA</b> graduate currently pursuing my <b>MCA</b>, with a strong
            foundation in computer applications, specializing in web development
            and drone-based systems integration. My focus is on building scalable
            web interfaces and backend services that interact with autonomous and
            embedded platforms, enabling real-time data visualization, control,
            and analysis. I actively explore technologies such as computer vision,
            IoT, and real-time communication to bridge software systems with
            intelligent aerial platforms.
          </p>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="about-section">
        <div className="about-card">
          <h2>Education</h2>
          <ul>
            <li><b>Schooling (Till Class 12):</b> Notre Dame Academy, Darjeeling</li>
            <li><b>Graduation:</b> Salesian College Sonada, Darjeeling</li>
            <li><b>Masters:</b> Medhavi Skills University (Currently pursuing)</li>
          </ul>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="about-section">
        <div className="about-card">
          <h2>Experience</h2>
          <ul>
            <li>
              <b>AEROSCAN:</b> Developed an custom drone with real-time object
              detection.
            </li>
            <li>
              <b>IoT Projects:</b> Designed and implemented multiple IoT-based
              systems integrating sensors, automation, and dashboards.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="about-section">
        <div className="about-card">
          <h2>Achievements</h2>
          <ul>
            <li>Served as Class Representative</li>
            <li>Event Organizer and Manager</li>
            <li>Topped Graduation Program</li>
            <li>Performed in a music band during graduation</li>
          </ul>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      
      <section className="heros">
        
        <div className="hero-last">
          © 2026  Saranam Rai <br />
           Built using React
        </div>
      </section>

 
    </div>
  );
} 

/* ================= ROUTER ================= */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
