function readTxt(file)
{
    let quotes;
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === XMLHttpRequest.DONE) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                quotes = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return quotes;
}

export { readTxt }