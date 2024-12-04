import { useState } from 'react'; // Untuk mengatur state hamburger menu
import './Navbar.css';
import { Link } from 'react-scroll'; // Import react-scroll
import logo from "/assets/Logo.png"; // Sesuaikan path sesuai lokasi file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>TPA AL-Istiqomah</span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={50}
            className="active"
            onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={50}
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            duration={50}
            onClick={() => setIsMenuOpen(false)}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="event"
            smooth={true}
            duration={50}
            onClick={() => setIsMenuOpen(false)}
          >
            Event
          </Link>
        </li>
        <li>
          <Link
            to="Fundraising"
            smooth={true}
            duration={50}
            onClick={() => setIsMenuOpen(false)}
          >
            Fundraising
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="contact-button">
        <Link to="contact" smooth={true} duration={50}>
          Contact
        </Link>
      </button>
    </nav>
  );
}

export default Navbar;
