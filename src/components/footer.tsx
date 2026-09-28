import './footer.css';
import { FaInstagram, FaEnvelope} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>RU HART</h3>
          <p>Building autonomous robotic solutions for real-world problems.</p>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>
          <p>rutgershart@gmail.com</p>
          <p>Rutgers University</p>
          <link rel="icon" type="logo" href="../assets/ruhart_image.png" />
        </div>


        <div className="social-icons">
            <a href="https://instagram.com/rutgers_hart" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rutgershart@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          </div>
        </div>


      <div className="footer-bottom">
        <p>© 2026 RU HART. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;