let images = document.querySelectorAll("img");
let image__container = document.getElementById("image__container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentIndex = 0;
let timer = setInterval(run, 2000);

function run() {
    currentIndex++;
    console.log("from inside timer function", currentIndex);
    changeImage();
}


function changeImage() {
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 1;
    }

    image__container.style = `transform:translate(-${currentIndex * 100}%)`;

}

prev.addEventListener("click", (e) => {
    currentIndex--;
    console.log("bcoz of prev", currentIndex);
    changeImage();
    clearTimer();
})

next.addEventListener("click", (e) => {
    currentIndex++;
    console.log("bcoz of next", currentIndex);
    changeImage();
    clearTimer();
})


function clearTimer() {
    clearInterval(timer);
    timer = setInterval(run, 2000);
}