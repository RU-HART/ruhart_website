import Carousel from "../components/carousel";
import redbull from "../assets/redbull.png";

import winner1 from "../assets/19.png";
import winner2 from "../assets/20.png";
import winner3 from "../assets/21.png";
import winner4 from "../assets/22.png";
import winner5 from "../assets/23.png";
import winner6 from "../assets/24.png";
import prez1 from "../assets/25.png";
import prez2 from "../assets/26.png";
import prez3 from "../assets/27.png";
import prez4 from "../assets/28.png";
import prez5 from "../assets/29.png";
import flyer from "../assets/hackathonposter-Bt3r3gOU.png";








function Media() {
  return (
    <div>
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/download.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-title">Media</h1>
 
          <p className="about-text">Photos, videos, and updates from our events.</p>
        </div>
      </div>

      <div style={{ paddingTop: "60px" }}>
        <div className="event-card">
          <div className="event-card-info">
            <h2 className="event-card-name">RUHART X IEEE 2026 Buildathon</h2>
          </div>
        </div>
      </div>

<Carousel images={[
    {
      src: redbull,
      caption: "Redbull Sponsors RU-HART Hackathon 2026",
    },
     {
      src: winner1,
      caption: "Game Build Track Winners",
    },
    {
      src: winner2,
      caption: "Best Overall Track Winners",
    },
    {
      src: winner3,
      caption: "Automation Productivity Track Winners",
    },
    {
      src: winner4,
      caption: "Social Good Track Winners",
    },
    {
      src: winner5,
      caption: "AI/ML Track Winners",
    },
  ]}>
</Carousel>

<Carousel images={[
  {
    src: prez1,
    
  },
    {
    src: prez2,
    
  },
    {
    src: prez3,
    
  },
    {
    src: prez4,
    
  },
    {
    src: prez5,
    
  },
]}></Carousel>




      

    </div>
  );
}

export default Media;