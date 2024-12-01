import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import VisionMission from './components/VisionMission/VisionMission';
import DailyPrayers from './components/DailyPrayers/DailyPrayers';
import PrayerTimes from './components/PrayerTimes/PrayerTimes';
import ProgramCard from './components/ProgramCard/ProgramCard';
import Programs from './components/Programs/Programs'; // Aktifkan komponen Program
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import ProgramApp from './components/ProgramApp/ProgramApp';
import DonationSection from './components/DonationSection/DonationSection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
        <VisionMission/>
        <DailyPrayers/>
        <PrayerTimes/>
      </section>
      
      {/* Program Section */}
      <section id="program">
        <ProgramCard />
        <Programs />
      </section>
      
      {/* Event Section */}
      <section id="event">
        <UpcomingEvents />
        <ProgramApp />
      </section>
      
      {/* Gallery Section */}
      <section id="Fundraising">
        {/* Tambahkan komponen gallery di sini */}
        <DonationSection />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <ContactUs />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
