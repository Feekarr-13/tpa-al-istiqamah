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
    fullDescription: "Tahsin merupakan program yang dilakukan setiap 2 kali dalam seminggu. Kegiatan ini bertujuan untuk memperbaiki bacaan Al-Qur’an.",
    image: "/assets/image3.png",
  },{
    title: "Tilawah",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tilawah merupakan program membaca Al-Qur’an dengan mamahami maknanya dengan mudah.",
    image: "/assets/image4.png",
  },{
    title: "Tasmi'",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tasmi’ merupakan kegiatan menyetorkan atau mendengarkan hafalan Al-Qur’an yang dilakukan oleh para santri kepada guru pembimbing tahfidz. Program ini biasa dilaksanakan setiap bulan ramadhan. Dimana para santri menyetorkan hafalannya biasanya sebanyak 1 juz. Kegiatan ini biasa dilaksanakan setiap hari dan waktunya setelah ba’da ashar.",
    image: "/assets/image5.png",
  },
  {
    title: "Dzikir pagi & sore",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Tasmi’ merupakan kegiatan menyetorkan atau mendengarkan hafalan Al-Qur’an yang dilakukan oleh para santri kepada guru pembimbing tahfidz. Program ini biasa dilaksanakan setiap bulan ramadhan. Dimana para santri menyetorkan hafalannya biasanya sebanyak 1 juz. Kegiatan ini biasa dilaksanakan setiap hari dan waktunya setelah ba’da ashar.",
    image: "/assets/image6.png",
  },
  {
    title: "Camping Hiburan",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Camping liburan merupakan salah satu program kegiatan TPA yang bertujuanan untuk mengisi waktu liburan para santri dengan berbagai kegiatan yang menyenangkan. Kegiatan ini biasa dilakukan setiap 1 bulan sekali.",
    image: "/assets/image7.png",
  },
  {
    title: "Kajian Akbar",
    description: "Program ini merupakan program mingguan dari TPA Masjid Al Istiqomah.",
    fullDescription: "Kegiatan kajian akabar merupakan kegiatan agenda taunan yang dilaksanakan di TPA Masjid Al Istiqomah. Kegiatan ini dilaksanakan satu haris setelah hari raya. Adapun kegiatannya yaitu belajar membaca iqra, tuhfathul atfal, menghafal doa harian, praktik wudhu dan shalat, ddan lain-lain.",
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
