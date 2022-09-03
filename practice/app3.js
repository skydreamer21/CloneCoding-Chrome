const h1 = document.querySelector("div h1");

function handleTitleClick() {
    const clickedClass = ["click", "grab"];
    /* if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } */

    // 토글로 같은 결과를 낼 수 있다!
    h1.classList.toggle(clickedClass); 
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);