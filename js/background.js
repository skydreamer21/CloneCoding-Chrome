import { readByTxt } from "./util.js";

function getBackgroundImgList(dirPathInfo) {
    const imagePathList = dirPathInfo.match(/\/image\/background\/bg[0-9].(jpg|jpeg|png)/g);
    const imageList = imagePathList.map((path) => {
        const splitIdx = path.lastIndexOf("/");
        return path.substring(splitIdx+1);
    });
    return imageList;
}

const dirPath = "../image/background/"
const dirPathInfo = readByTxt(dirPath);
console.log(dirPathInfo);
const bgList = getBackgroundImgList(dirPathInfo);

const numOfBg = bgList.length;
const randomBgIndex = Math.floor(Math.random()*numOfBg);

const bgImg = document.createElement("img");
bgImg.src = dirPath + bgList[randomBgIndex];

const body = document.querySelector("body");
body.appendChild(bgImg);