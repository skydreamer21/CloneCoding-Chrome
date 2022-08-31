/* let userName = prompt("What is your name?");

const title = document.getElementById("title");
userName = userName === null ? "Buddy" : userName;
title.innerText += " " + userName;
console.log(title.innerText);
console.log(title.textContent);

console.log(title.id);
console.log(title.className); */

const title = document.querySelector("#title");
const firstItem = document.querySelector("ul li:nth-child(3)");

/* 
// JS 에서 Element 가져오고 바꿔보기

const items = document.getElementsByClassName("item");
console.dir(items);
console.log(typeof(items));
console.log(firstItem.style);
console.log(firstItem.style.color = "blue"); 
*/

title.addEventListener("hover", handleTitleClick);

function handleTitleClick() {
    const NUM_OF_COLORS = 4;
    if (title.style.color === "") {
        title.style.color = "black"
    }
    
    const colorMap = new Map();
    colorMap.set("blue", 0);
    colorMap.set("white", 1);
    colorMap.set("orange", 2);
    colorMap.set("black", 3);

    const colors = Array.from(colorMap.keys()); 
    const currentColorIdx = colorMap.get(title.style.color);
    const nextColorIdx = (currentColorIdx + 1) % NUM_OF_COLORS;
    title.style.color = colors[nextColorIdx];
}