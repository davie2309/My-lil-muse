// Countdown to Valentine's Day
const valentinesDay = new Date("February 14, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "It's Valentine's Day!";
    }
}, 1000);