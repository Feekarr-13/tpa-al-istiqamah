import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Programs.css';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const programs = [
    {
      title: 'Kajian Umum',
      description: 'This program is a weekly program from the Al Istiqomah Mosque TPA. Where this program aims to invite residents around the landfill to participate in landfill activities, both listening to lectures, tahsin activities, and other activities.',
      buttonMargin: '20px', // Jarak untuk tombol
    },
    {
      title: 'Tahfidz',
      description: 'Tahfidz is the flagship program of the Al Istiqomah Mosque TPA. This program is organized by TPA supervisors for students so that they can memorize the Qur’an properly and correctly, be able to memorize both in terms of tajweed, correct memorization, and understand the meaning.',
      buttonMargin: '10px', // Jarak untuk tombol
    },
    {
      title: 'Tasmi’',
      description: 'Tasmi’ is an activity of depositing or listening to the memorization of the Qur’an carried out by the students to the tahfidz supervisor. This program is usually carried out every month of Ramadan.',
      buttonMargin: '30px', // Jarak untuk tombol
    },
  ];

  return (
    <div className="programs-section">
      <div className="programs-container">
        <Slider {...settings}>
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-image"></div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <button style={{ marginTop: 'auto', marginBottom: program.buttonMargin }}>
                  More Detail
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
