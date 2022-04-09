const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav--opacity");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav--visible");

});

navMenu.addEventListener("click", () => {
    navMenu.classList.remove("nav--visible");
});


