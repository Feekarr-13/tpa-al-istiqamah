import "./UpcomingEvents.css";
import eventImage from "/assets/Foto.jpg"; // Update the path to your image

const UpcomingEvents = () => {
  return (
      <div className="upcoming-events">
          <h1>Up Coming Event</h1>
          <div className="event-container">
              <div className="event-card">
                  <div className="event-info">
                      <img src={eventImage} alt="Event" className="event-image" />
                      <div className="text-container">
                          <h2 className="bold-text">Ali Abdul Latif</h2>
                          <p className="normal-text">18 September 2021</p>
                          <p className="normal-text">16:00 PM</p>
                          <p className="bold-text">Location</p>
                          <p className="normal-text">Dk. Pekaleran Rt 02 Rw 02, Sridadi, Sirampog, Brebes, Jawa Tengah</p>
                      </div>
                  </div>
                  <div className="event-details">
                      <h3 className="bold-text">Routine Review | Theme of Filial Piety to Parents</h3>
                      <p className="normal-text">01 November 2024 | 7:00 PM</p>
                      <p className="normal-text">Birrul Walidain (Arabic: بر الوالدين) is a part of Islamic ethics that shows the act of filial piety (doing good) to both parents.</p>
                      <button className="register-button">Register Now</button>
                  </div>
              </div>
                <div className="additional-events">
                    <div className="event">
                        <div className="event-date">
                            <p>Nov 18</p>
                            <p>2024</p>
                        </div>
                        <div className="event-details">
                            <h4>Marrige Preparation</h4>
                            <p>D. Manjure Ilahi | 7:00 PM</p>
                        </div>
                    </div>
                    <div className="event highlight">
                        <div className="event-date">
                            <p>Nov 21</p>
                            <p>Tue</p>
                        </div>
                        <div className="event-details">
                        <p className="event-name">Islamic Halaqah</p>
                        <p className="event-time">Abudillah Bin Abdur Razzak | 8:00 PM</p>
                        <button className="show-details">Show Details</button>
                    </div>
                    </div>
                    <div className="event">
                        <div className="event-date">
                            <p>Nov 22</p>
                            <p>Wed</p>
                        </div>
                        <div className="event-details">
                            <h4>Islamic Halaqqah</h4>
                            <p>Eng. Enamul Haque | 4:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
