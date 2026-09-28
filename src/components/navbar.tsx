import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/ruhart_image.png";

const Navbar = () => {
  return (
    <nav className="navbar">
<Link to="/" className="navbar-brand">
  <img
    src={logo}
    alt="RU HART Logo"
    style={{ height: "40px", width: "auto" }}
  />
</Link>
  <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/media">Media</Link>
        <Link to="/connect">Connect</Link>
  </div>
</nav>
  );
};

export default Navbar;