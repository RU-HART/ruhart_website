// pages/Home.tsx
import Hero from "../components/hero";
import "./home.css";
import Card from "../components/card";
import "../components/card.css";
import Carousel from "../components/carousel";
import workshop from "../assets/workshop.png";
import meeting from "../assets/partnership_img.png";
import community from "../assets/community_img.png";
import presentation from "../assets/presentation_img.png";
import store from "../assets/store_img.jpg";
function Home() {
  return (
    <>
      <Hero />

<section className="mission-section">
  <div className="mission-card">
    <video autoPlay loop muted playsInline className="mission-card-video">
      <source src="/download.mp4" type="video/mp4" />
    </video>
    <div className="mission-card-content">
      <h2 className="section-title">Our Mission</h2>
      <p>
        RU HART designs autonomous robotic solutions for real-world problems
        in delivery and intelligent automation while giving students direct
        experience with industry-style engineering workflows. Through
        mechanical, electrical, and software subteams, members collaborate to
        build systems that mirror modern robotics development. Partnering
        with the Rutgers Food Pantry, RU HART is working toward the
        development of an autonomous home-delivery robotic system designed to
        improve accessibility and efficiency in community food distribution.
      </p>
    </div>
  </div>
</section>


<div className="cards-container">
  <Card title="Our Projects" description="Discover the technologies and solutions our team is building." route="/projects" />
  <Card title="Meet the Team" description="Meet the engineers, researchers, and innovators behind RU HART." route="/team" />
  <Card title="Sponsor" description="Partner with RU HART to support innovation in autonomous robotics." route="/connect" />
  <Card title="Contact Us" description="Connect with us for partnerships, sponsorships, and opportunities." route="/contact" />
</div>

<section className="subteams">

  <h2 className="section-title">Our Subteams</h2>
  <p className="subteams-intro">
    Our multidisciplinary structure allows students to contribute
    across every aspect of robotics development.
  </p>

  <div className="subteams-grid">

    <div className="subteam-card">
      <div className="subteam-icon"><i className="ti ti-settings" aria-hidden="true"></i></div>
      <h2>Mechanical</h2>
      <p>Design and manufacture robotic systems through CAD, prototyping, simulation, and testing.</p>
      <span className="subteam-tag">Hardware</span>
    </div>

    <div className="subteam-card">
      <div className="subteam-icon"><i className="ti ti-bolt" aria-hidden="true"></i></div>
      <h2>Electrical</h2>
      <p>Develop power distribution, circuitry, and hardware integration that enables reliable robot operation.</p>
      <span className="subteam-tag">Hardware</span>
    </div>

    <div className="subteam-card">
      <div className="subteam-icon"><i className="ti ti-code" aria-hidden="true"></i></div>
      <h2>Software</h2>
      <p>Create autonomous navigation, AI-driven functionality, and software infrastructure for intelligent robotics.</p>
      <span className="subteam-tag">Technology</span>
    </div>

    <div className="subteam-card">
      <div className="subteam-icon"><i className="ti ti-speakerphone" aria-hidden="true"></i></div>
      <h2>Business & Marketing</h2>
      <p>Build partnerships, secure sponsorships, coordinate events, and expand community outreach.</p>
      <span className="subteam-tag">Operations</span>
    </div>

  </div>
</section>
  
  <Carousel
  images={[
    {
      src: presentation,
      caption: "RU-HART E-Board Presents their Work to Students",
    },
    {
      src: workshop,
      caption: "Electrical Subsystem Wiring and Power Distribution Layout",
    },
    {
      src: community,
      caption: "Software Workshop & Testing for autonomous navigation",
    },
  ]}
/>


    </>
  );
}



export default Home;