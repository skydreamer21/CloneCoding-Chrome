function readByTxt(file)
{
    let text;
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === XMLHttpRequest.DONE) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return text;
}

export { readByTxt }

/* const dirPath = "../image/background/";
readTxt(dirPath); */

