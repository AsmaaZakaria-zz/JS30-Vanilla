const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const day = document.querySelector(".day");
const date = document.querySelector(".date");
const time = document.querySelector(".time");

const DAYS = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];

function setnow() {
    const now = new Date();

    let seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    let mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = (((hours*5) / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds < 10)
        seconds = "0" + seconds.toString();

    if(mins < 10)
        mins = "0" + mins.toString();

    day.innerHTML = DAYS[now.getDay()];
    date.innerHTML = now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear();
    time.innerHTML = hours + ":" + mins + ":" + seconds;
}

setInterval(setnow, 1000);

setnow();
