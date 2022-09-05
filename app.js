// setup nav
const navBtn = document.getElementById("toggle-menu-button");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const logo = document.getElementById("logo");
const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", () => {
  var element = document.getElementById("header");
  element.scrollIntoView({behavior: "smooth"});
})

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
  logo.classList.add("moveLogoLeft");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
  logo.classList.remove("moveLogoLeft");
});
//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

window.addEventListener("resize", () => {
  if(window.innerWidth > 804 ) logo.classList.remove("moveLogoLeft");
});