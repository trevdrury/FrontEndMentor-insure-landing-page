import "./scss/main.scss";

let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");
let navBar = document.querySelector(".top-nav");
let heroImg = document.querySelector("#hero__img");

let width = window.innerWidth;

if (width > 767) {
  heroImg.setAttribute("src", "./assets/image-intro-desktop.jpg");
}

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  navBar.classList.toggle("expanded");
});
