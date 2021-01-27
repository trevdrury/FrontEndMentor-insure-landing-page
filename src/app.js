import "./scss/main.scss";

let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");
let navBar = document.querySelector(".top-nav");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("expanded");
  navLinks.classList.toggle("expanded");
  navBar.classList.toggle("expanded");
});
