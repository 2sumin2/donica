const title = document.body.querySelectorAll('.works__title');
const content = document.body.querySelectorAll('.works__content');
const images = document.body.querySelectorAll('.eye');

function showContent(event) {
    event.target.parentElement.parentElement.querySelector(".works__content")?.classList.toggle("hidden");
    toggleEyes();
}

function toggleEyes() {
    for (i = 0; i < images.length; i++) {
        if (!images[i].parentElement.parentElement.querySelector(".works__content")) {
            images[i].src = "./src/images/key.PNG";
        } else if (images[i].parentElement.parentElement.querySelector(".works__content").classList.contains("hidden")) {
            images[i].src = "./src/images/open.PNG";
        } else {
            images[i].src = "./src/images/close.PNG";
        }
    }
}

toggleEyes();
for (i = 0; i < title.length; i++) {
    title[i].addEventListener("click", showContent);
}



