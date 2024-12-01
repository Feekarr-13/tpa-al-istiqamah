export const adjustTimeForTimezone = (timeString, timeZone) => {
    try {
        // Extract hours, minutes, and period (AM/PM)
        const [hours, minutes, period] = timeString.match(/(\d+):(\d+)\s*(AM|PM)/i).slice(1);

        // Create a new Date object (using current date for simplicity)
        let date = new Date();

        // Convert hours to 24-hour format if it's PM
        let hours24 = parseInt(hours, 10);
        if (period === "PM" && hours24 !== 12) {
            hours24 += 12; // Convert PM hours to 24-hour format
        } else if (period === "AM" && hours24 === 12) {
            hours24 = 0; // Midnight case: 12 AM is 00:00
        }

        // Set the date and time
        date.setHours(hours24, minutes);

        // Format the date with the specified timezone
        return new Intl.DateTimeFormat("en-US", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).format(date);
    } catch (error) {
        console.error("Error occurred:", error);
        return timeString; // Return original string jika format tidak valid
    }
};