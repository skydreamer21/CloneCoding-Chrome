const clock = document.querySelector("#clock");

function updateClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const time = `${hour}:${minute}:${second}`;
    clock.innerText = time;
}

updateClock(); // 없으면 시간이 표시되는 1초까지는 00:00:00 으로 나온다
setInterval(updateClock, 1000);