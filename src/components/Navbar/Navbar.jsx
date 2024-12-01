// Navbar.jsx
import './Navbar.css';
import { Link } from 'react-scroll'; // Import react-scroll
import logo from "/assets/Logo.png"; // Sesuaikan path sesuai lokasi file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>TPA AL-Istiqomah</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="home" smooth={true} duration={50} className="active">Home</Link></li>
        <li><Link to="about" smooth={true} duration={50}>About us</Link></li>
        <li><Link to="program" smooth={true} duration={50}>Program</Link></li>
        <li><Link to="event" smooth={true} duration={50}>Event</Link></li>
        <li><Link to="Fundraising" smooth={true} duration={50}>Fundraising</Link></li>
      </ul>
      <button className="contact-button">
        <Link to="contact" smooth={true} duration={50}>Contact</Link>
      </button>
    </nav>
  );
}

export default Navbar;
