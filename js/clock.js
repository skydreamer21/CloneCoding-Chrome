const clock = document.querySelector("#clock");

function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    const AMPMInfo = hours >= 12 ? "pm" : "am";
    if (AMPMInfo === "pm" && hours !== 12) {
        hours -= 12;
    }
    hours = hours.toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2,"0");;
    const seconds = date.getSeconds().toString().padStart(2,"0");;
    const time = `${AMPMInfo} ${hours}:${minutes}:${seconds}`;
    clock.innerText = time; 
}

updateClock(); // 없으면 시간이 표시되는 1초까지는 00:00:00 으로 나온다
setInterval(updateClock, 1000);