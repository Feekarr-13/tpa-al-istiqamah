import './Footer.css';
import logo from '/assets/Logo.png'; // Pastikan jalur ini benar

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <div className="logo-text">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Tpa Al- Istiqomah</h2>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>A mosque islamic resource center & foundation.</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📞 +628123-2346-5789</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📧 tpamasjidalistiqomah002@gmail.com</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>📍 Dk. Pekaleran Rt 02 Rw 02, Sridadi, Sirampog, Brebes, Jawa Tengah</p>
          <div className="social-icons">
          <img src="/assets/instagram.png" alt="Custom Image" className="custom-image" />
          <img src="/assets/Facebook.png" alt="Custom Image" className="custom-image" />
          <img src="/assets/twiter.png" alt="Custom Image" className="custom-image" />
          <img src="/assets/Youtobe.png" alt="Custom Image" className="custom-image" />
        </div>
        </div>
        <div className="footer-section links">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Program</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section education">
          <h3>Education</h3>
          <ul>
            <li>Tahfidz</li>
            <li>Kajian Rutin</li>
            <li>Tasmi’</li>
            <li>Tahsin</li>
            <li>Tilawah</li>
            <li>Camp Hiburan</li>
          </ul>
        </div>
        <div className="footer-section donation">
          <h3>Donation</h3>
          <ul>
            <li>Monthly</li>
            <li>Sadaqah</li>
            <li>Zakat</li>
            <li>Qurbani</li>
            <li>Masjid Found</li>
          </ul>
        </div>
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <ul>
            <li>Profile</li>
            <li>Penceramah</li>
            <li>Program</li>
            <li>Event</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
