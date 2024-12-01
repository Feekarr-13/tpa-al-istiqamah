import "./DonationSection.css"; // File CSS untuk styling

function DonationSection() {
  // Nomor WhatsApp tujuan dan pesan default
  const whatsappNumber = "6281392990921"; // Ganti dengan nomor tujuan (format internasional tanpa simbol '+')
  const message = "Bismillah, I want to join the fundraising program!";

  // URL untuk WhatsApp API
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="donation-container">
      <div className="circle-images">
        <img src="/assets/Don1.png" alt="Donation 1" className="circle" />
        <img src="/assets/Don2.png" alt="Donation 2" className="circle" />
      </div>
      <h2>Total donations are updated once a month</h2>
      <h1>Rp 12.000.000</h1>
      <p>
        Register for membership. You can donate monthly whatever you want. No
        fixed rate here. Our monthly donation starts $5 limitless.
      </p>
      {/* Tautan ke WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="donation-button">Join Fundraising Now</button>
      </a>
      <div className="circle-images">
        <img src="/assets/Don3.png" alt="Donation 3" className="circle" />
        <img src="/assets/Don4.png" alt="Donation 4" className="circle" />
      </div>
    </div>
  );
}

export default DonationSection;
