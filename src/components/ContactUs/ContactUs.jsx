import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Email, Call, Or Complete the form to learn how snappy can solve your
        messaging problem
      </p>
      <div className="contact-details">
        <div className="contact-info">
        <p className="contact-text">📞 +628123-2346-5789</p>
          <p className="contact-text">📧 tpamasjidalistiqomah002@gmail.com</p>
          <p className="contact-text">📍 Dk. Pekaleran Rt 02 Rw 02, Sridadi, Sirampog, Brebes, Jawa Tengah</p>
        </div>
        <div className="contact-form-map">
        <form className="contact-form">
            <div className="form-row">
            <input type="text" name="fullName" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email" />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31506.47097933363!2d109.04590785!3d-7.3580198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70e7161d7ec5d9%3A0x6851cd32f30358c!2sSirampog%2C%20Brebes%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1637186164628!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
