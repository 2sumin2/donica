const title = document.body.querySelectorAll('.works__title');
const content = document.body.querySelectorAll('.works__content');

function showContent(event) {
    event.target.parentElement.parentElement.querySelector(".works__content")?.classList.toggle("hidden");

}


for (i = 0; i < title.length; i++) {
    title[i].addEventListener("click", showContent);
}

