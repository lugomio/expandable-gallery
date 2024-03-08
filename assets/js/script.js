const images = document.querySelectorAll(".image");

images.forEach((image) => {
    image.addEventListener('click', toggleActive);
});

function toggleActive(e) {
    prevImage = document.querySelector(".active");
    if (prevImage != this && prevImage) prevImage.classList.remove("active");
    this.classList.toggle("active");
}