import Calendar from "../components/calendar";
function Connect() {
  return (
    <div>
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/download.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-title">Connect With Us</h1>
 
          <p className="about-text">Get in touch or follow us on social media.</p>
        </div>
      </div>

      <Calendar></Calendar>
    </div>
  );
}

export default Connect;