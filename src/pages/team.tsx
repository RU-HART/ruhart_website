import TeamMemberCard from '../components/team_card';
import '../pages/team.css';
import nabilah from '../assets/nabilah_image.png';
import dhruv from '../assets/dhruv_image.png';
import kajol from '../assets/kajol_image.png';
import aryan from '../assets/aryan_image.png';
import mokshil from '../assets/mokshil.png';
import adam from '../assets/adam_image.png';
import taha from '../assets/taha_img.png';
import rohan from '../assets/rohan_image.png';
import gavril from '../assets/gavril_image.png';
import apollo from '../assets/apollo_image.png';
const team = [
    {
    name: "Dhruv Nagpal",
    position: "President",
    major: "Industrial Systems Engineering",
    year: "Class of 2028",
    photoUrl: dhruv,
    linkedinUrl: "https://linkedin.com/in/dhruv-nagpal15",
  },
    {
    name: "Kajol Parikh",
    position: "Vice President",
    major: "Computer Science & Data Science",
    year: "Class of 2028",
    photoUrl: kajol,
    linkedinUrl: "https://linkedin.com/in/kajol-parikh-1ab3533a2/",
  },
  {
    name: "Aryan Balwani",
    position: "Secretary",
    major: "Finance",
    year: "Class of 2028",
    photoUrl: aryan,
    linkedinUrl: "https://linkedin.com/in/aryan-balwani/",
  },
    {
    name: "Mokshil Lad",
    position: "Treasurer",
    major: "Electrical & Computer Engineering",
    year: "Class of 2027",
    photoUrl: mokshil,
    linkedinUrl: "",
  },
  {
    name: "Nabilah Nisar",
    position: "Business Operations Lead",
    major: "Electrical & Computer Engineering",
    year:"Class of 2029",
    photoUrl: nabilah,
    linkedinUrl: "https://www.linkedin.com/in/nabilah-nisar/",
  },
  {
    name: "Adam Butt",
    position: "Mechanical Lead",
    major: "Mechanical & Packaging Engineering",
    year: "Class of 2029",
    photoUrl: adam,
    linkedinUrl: "https://linkedin.com/in/adam-butt-cswa-737712283/",
  },

    {
    name: "Taha Zaidi",
    position: "Electrical Co-Lead",
    major: "Electrical & Computer Engineering",
    year: "Class of 2028",
    photoUrl: taha,
    linkedinUrl: "https://www.linkedin.com/in/taha-zaidi-10390731b/",
  },
  {
    name: "Rohan Shrivastava",
    position: "Electrical Co-Lead",
    major: "Electrical & Computer Engineering",
    year: "Class of 2028",
    photoUrl: rohan,
    linkedinUrl: "https://www.linkedin.com/in/rohan-shrivastava456/",
  },
    {
    name: "Gavril Lomotey",
    position: "Software Co-lead",
    major: "Electrical & Computer Engineering",
    year: "Class of 2028",
    photoUrl: gavril,
    linkedinUrl: "https://linkedin.com/in/gavril-lomotey-a28a67354/",
  },
 {
    name: "Apollo Touch",
    position: "Software Co-lead",
    major: "Computer Science",
    year: "Class of 2028",
    photoUrl: apollo,
    linkedinUrl: "",
  },

];

function OurTeam() {
  return (

    
    <div>

        <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/download.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-title">Our Team</h1>
 
          <p className="about-text">Meet the minds behind the work.</p>
        </div>
      </div>



      <div className="meet-the-team team-grid">

        {team.map((member, index) => (
  <TeamMemberCard key={index} {...member} />
))}

      </div>
    </div>
  );
}

export default OurTeam;