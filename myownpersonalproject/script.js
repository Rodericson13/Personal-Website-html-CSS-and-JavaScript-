let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
/*===== MENU SHOW =====*/ 
menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-times")
};
/*==================== REMOVE MENU MOBILE ====================*/
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("fa-times")
};
// typing text animation script
var typed = new Typed('.typing', {
  strings: [
    "<span style='color:red;'>Web Developer </span>",
    "<span style='color:blue;'>Game Developer</span>",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

var typed = new Typed('.rodericson', {
  strings: [
    "<span style='color: rgb(239, 128, 10) ;'>Rod Ericson S. Santos </span>",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})