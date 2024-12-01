import { useState } from 'react';
import './ProgramApp.css'; // Pastikan menambahkan CSS untuk styling

const activities = [
  {
    title: "Kajian Rutin",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah. Dimana program ini bertujuan untuk mengajak warga sekitar TPA untuk ikut dalam kegiatan TPA, baik mendengarkan ceramah, kegiatan tahsin, dan kegiatan lainnya. Program ini biasanya dilakukan pada setiap hari jumat ba’da ashar dan bertempat di Masjid Al Istiqomah dukuh Pekaleran",
    image: "/assets/image1.jpg", // Ganti dengan path gambar sebenarnya
  },
  {
    title: "Tahfidz",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image2.png",
  },
  {
    title: "Tahsin",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image3.png",
  },{
    title: "Tilawah",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image4.png",
  },{
    title: "Tasmi'",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image5.png",
  },
  {
    title: "Dzikir pagi & sore",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image6.png",
  },
  {
    title: "Camping Hiburan",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image7.png",
  },
  {
    title: "Kajian Akbar",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tahfidz merupakan program unggulan dari TPA Masjid Al Istiqomah. Program ini diselenggarakan oleh pembimbing TPA terhadap para santri agar mereka bisa menghafal Al-Qur’an secara baik dan benar, mampu mentashih hafalan baik dari segi tajwid, membetulkan hafalan, dan memahami artinya serta memberikan pengarahan dan petunjuk lain yang diperlukan. Program ini dilaksanakan 1 jam sebelum kegiatan TPA dimulai.",
    image: "/assets/image8.png",
  },
  // Tambahkan program lainnya di sini...
];

function ProgramApp() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="activity-grid">
      <div className="header-container">
        <h2>Some photos of the activity program at the</h2>
        <p>Al-Istiqomah Mosque TPA</p>
      </div>
      <div className="grid-container">
        {activities.map((activity, index) => (
          <div className="card" key={index}>
            <img src={activity.image} alt={activity.title} className="card-image" />
            <div className="card-content">
              <h3>{activity.title}</h3>
              <p>
                {expandedIndex === index ? activity.fullDescription : activity.description}
              </p>
              <button 
                className="read-more" 
                onClick={() => handleReadMoreClick(index)}
              >
                {expandedIndex === index ? "Read Less" : "More..."}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramApp;
