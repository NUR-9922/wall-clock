function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Ensure the hour is between 1 and 12
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    // Calculate rotation angles
    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = (minutes * 6) + (seconds * 0.1);
    const secondAngle = seconds * 6;

    // Apply rotation
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();