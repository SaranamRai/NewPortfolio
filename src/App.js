import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Skills from "./skills";

function Home() {
  return (
    <div className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="nav">
          <span className="logo">Portfolio</span>
        </div>
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-text">
            <h1>SARANAM RAI</h1>
            <p className="role">
              MCA Student | Web Developer | Drone Developer
            </p>

            <div className="buttons">
               {/* ✅ FIXED NAVIGATION */}
              <Link to="/hobbies">
              <button className="btn primary">Hobbies</button>
              </Link>
          {/* ✅ FIXED NAVIGATION */}
              <Link to="/skills">
                <button className="btn secondary">View Skills</button>
              </Link>
              
            </div><br></br>
            <div className="contact">
            <h4>Contact: 9635169216</h4>
            <h4>E-mail: saranamrai699@gmail.comm</h4>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image">
            <img src="/me.jpeg" alt="Profile" />
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I am an <b>BCA</b> graduate and pursuing my <b>MCA</b> with a strong foundation in computer applications, specializing in web development 
            and drone-based systems integration. My interests lie in building web interfaces and backend services that 
            interact with autonomous and embedded platforms, enabling data visualization, control, and analysis. I focus 
            on writing efficient, scalable code and exploring technologies such as real-time communication, computer vision, 
            and IoT-driven architectures to bridge the gap between software systems and aerial platforms. 
            I am motivated to work on projects that combine web technologies with intelligent drone solutions.
          </p>
        </div> 
        </section>

<section className="about-section">
  <div className="about-card">
          <h2>Education</h2>
          <p>
         <ul><li> <b>Schooling till class 12:</b></li></ul>
           Notre Dame Academy,Darjeeling
          </p>
          <p>
         <ul><li> <b>College:</b></li></ul>
           Salesian College Sonada,Darjeeling
          </p>
          <p>
         <ul><li> <b>Masters:</b></li></ul>
           Medhavi Skills University(Currently pursuing)
          </p>
        </div></section>
        
         <section className="about-section">
           <div className="about-card">
             <h2>Experience</h2>
         <ul><li> <b>
           AEROSCAN
           </b></li></ul>
           <p>Developed a custom drone with collaboration with <b>AI</b> using object detection from the drone.</p>
           <ul><li> <b>
           IOT Projects
           </b></li></ul>
<p>Build different types of IOT projects.</p>
</div> </section>

        <section className="about-section">
        <div className="about-card">
          <h2>Achievements</h2>
          <p>
            <ul>
              <li>Chosen as a Class representative.</li>
              <li>Fullfilled my role  as an event orgainser and manager.</li>
              <li>Topped in my Graduatiion.</li>
              <li>Performed in  music band at graduation.</li>
                </ul>
          </p>
        </div> 
        </section>
        
        <section className="heros">
<div className="hero-last">
  © 2026 Saranam Rai.<br></br>
  Built with using React
</div>
        </section>


     
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
