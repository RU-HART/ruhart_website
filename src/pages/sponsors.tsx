import '../pages/sponsors.css';
import rutgersfood from '../assets/images.png';
import ise from '../assets/ru_ise.png';


const sponsors = [
  {
    name: "Rutgers Food Pantry",
    photoUrl: rutgersfood,
    website: "https://ruoffcampus.rutgers.edu/basic-needs",
  },
  {
    name: "Rutgers ISE Department",
    photoUrl: ise,
    website: "https://ise.rutgers.edu/faculty-hiring",
  },
];

function Sponsors() {
  return (
    <div>
      
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/download.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-title">Our Sponsors</h1>
          <p className="about-text">Thank you to our sponsors for supporting our work.</p>
        </div>
      </div>




      <div className = "sponsors-page">
      <div className="sponsors-strip">
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-logo">
            <img src={sponsor.photoUrl} alt={sponsor.name} />
          </a>
        ))}
      </div>

      <div className="sponsors-cta">
        <p>Interested in partnering with us?</p>
        <a href="/sponsorship_packet.pdf" target="_blank" rel="noopener noreferrer" className="packet-btn">
          View Sponsorship Packet
        </a>
      </div>
    </div>
    </div>
  );
}

export default Sponsors;