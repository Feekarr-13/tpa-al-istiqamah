import "./ProgramCard.css";

const ProgramCard = () => {
    const programs = [
        { title: "Tahfidz", icon: "📖" },
        { title: "Kajian Rutin", icon: "👥" },
        { title: "Tahsin", icon: "📅" }, // Ini akan menjadi special-card
        { title: "Tilawah", icon: "📚" },
        { title: "Tasmi'", icon: "✋" }, // Perbaiki tanda kutip
        { title: "Camping Hiburan", icon: "🏕️" },
        { title: "Dzikir pagi dan sore", icon: "📿" },
        { title: "Islamic Library", icon: "📘" },
    ];

    return (
        <div className="programs">
            <h2>
                Some Programs and activities of Tpa AL-Istiqomah <br />
                &amp; learning Islamic teachings according to the <br />
                Qur&apos;an and Assunah
            </h2>
            <div className="programs-grid">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className={`program-card ${
                            program.title === "Tahsin" ? "special-card" : ""
                        }`}
                    >
                        <div className="program-icon">{program.icon}</div>
                        <p>{program.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramCard;
