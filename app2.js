// <강의> - #3.7 CSS in Javascript part Two

const h1 = document.querySelector("div h1");

// css 변경은 최대한 css 파일안에서!

function handleTitleClick() {
    const currentColor = h1.style.color
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue"
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);