function setClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('second');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = 360 * (hours % 12) / 12 + 30 * (minutes / 60);
    const minuteRotation = 360 * minutes / 60;
    const secondRotation = 360 * seconds / 60;
    if (minutes === 0 && seconds === 0) {
        let hourmusic = new Audio("oldbell.mp3");
        hourmusic.play();
    }
    let music= new Audio("hello.mp3");
    
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    music.play();
    
}

// Update the clock every second
setInterval(setClock, 1000);
