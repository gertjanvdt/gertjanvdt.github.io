// GRID AND LIST TOGGLE
const showListView = document.getElementById("toggle-list-view");
const showGridView = document.getElementById("toggle-grid-view");
const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");
const slider = document.getElementById("slider");

showGridView.addEventListener("click", (e) => {
  setTimeout(() => {
    gridView.classList.remove("hidden");
    listView.classList.add("hidden");
  }, 500);
  slider.style.right = "50%";
});

showListView.addEventListener("click", (e) => {
  setTimeout(() => {
    gridView.classList.add("hidden");
    listView.classList.remove("hidden");
  }, 500);
  slider.style.right = "0";
});

// SCROLL SLOWLY
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// RECOMMENDATION SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
