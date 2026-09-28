import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 className="hero-title">RU HART</h1>
        <h2 className="hero-text">Building Autonomous Systems for Real Impact</h2>

 
        <p className="about-text"> RU HART designs autonomous robotics solutions that solve real-world problems through engineering, AI, and systems design.</p>
      </div>
    </div>
  );
}

export default Hero;