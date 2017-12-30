//// Accordion

const accToggle = Array.from(document.querySelectorAll(".accordion-toggle"));
const accContent = Array.from(document.querySelectorAll(".accordion-content"));

for (let m = 0; m < accToggle.length; m++){
  accToggle[m].addEventListener("click", () => {
    accToggle[m].classList.toggle("turn");
    accContent[m].classList.toggle("active");
  })
};


//// Menu toggle
const menuBtn = document.querySelector(".menu-logo")
const nav = document.querySelector("nav")

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-close");
  nav.classList.toggle("open");
});
