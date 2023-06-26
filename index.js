let images = document.querySelectorAll("img");
let image__container = document.getElementById("image__container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentIndex = 0;
setInterval(run, 2000);

function run() {
    currentIndex++;
    changeImage();
}


function changeImage() {
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 1;
    }

    image__container.style = `transform:translate(-${currentIndex * 101}%)`;

}

prev.addEventListener("click", (e) => {
    console.log("inside prev eventHandler!!!!!");
    idx--;
    changeImage();
})

next.addEventListener("click", (e) => {
    idx++;
    changeImage();
})