// rotate arrow

const menuLinks = document.querySelectorAll(".menu--link");
const arrows = document.querySelectorAll(".nav-bar__arrow img");
const modals = document.querySelectorAll(".dropdown");

const mediaQuery = window.matchMedia("(min-width: 56.3em)");

function modalClose(e) {
  modals.forEach((modal, idx) => {
    if (e.matches) {
      arrows[idx].classList.remove("rotate-arrow");
      modals[idx].classList.remove("active");
    }
  });
}
modalClose(mediaQuery);
mediaQuery.addEventListener("change", modalClose);

menuLinks.forEach((menulink, idx) => {
  menulink.addEventListener("click", () => {
    arrows[idx].classList.toggle("rotate-arrow");
    modals[idx].classList.toggle("active");
  });
  menulink.addEventListener("focus", () => {
    arrows[idx].classList.toggle("rotate-arrow");
    modals[idx].classList.toggle("active");
  });
  menulink.addEventListener("mouseover", () => {
    arrows[idx].classList.add("rotate-arrow");
    modals[idx].classList.add("active");
  });
});

modals.forEach((modal, idx) => {
  modal.addEventListener("mouseout", () => {
    arrows[idx].classList.remove("rotate-arrow");
    modals[idx].classList.remove("active");
  });
});

// Mobile hamburger menu
const hamburger = document.querySelector(".nav-bar__hamburger-button");
const mobileMenu = document.querySelector(".nav-bar__menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("modal-mobile");
  /* upperClose.classList.add("rotate-top");
  middleClose.style.opacity = 0;
  bottomClose.classList.add("rotate-bottom"); */
});
