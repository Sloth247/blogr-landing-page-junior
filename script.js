// rotate arrow

const menuLinks = document.querySelectorAll(".menu-btn");
const arrows = document.querySelectorAll(".nav-bar__arrow");
const dropdownModals = document.querySelectorAll(".dropdown");
const mobileMenu = document.querySelector(".nav-bar__menu");

const mediaQuery = window.matchMedia("(min-width: 56.3em)");

function modalClose(e) {
  dropdownModals.forEach((modal, idx) => {
    if (e.matches) {
      menuLinks[idx].setAttribute("aria-expanded", "false");
      dropdownModals[idx].setAttribute("aria-hidden", "true");
      arrows[idx].classList.remove("rotate-arrow");
      mobileMenu.setAttribute("aria-hidden", "false");
    }
  });
}
modalClose(mediaQuery);
mediaQuery.addEventListener("change", modalClose);

menuLinks.forEach((menulink, idx) => {
  menulink.addEventListener("click", () => {
    let dropdownOpen =
      dropdownModals[idx].getAttribute("aria-hidden") == "false";
    let menuExpanded = menuLinks[idx].getAttribute("aria-expanded") == "true";

    menuLinks[idx].setAttribute("aria-expanded", "true");
    dropdownModals[idx].setAttribute("aria-hidden", "false");
    arrows[idx].classList.add("rotate-arrow");
    /* dropdownModals[idx].classList.toggle("active");*/

    if (dropdownOpen && menuExpanded) {
      menuLinks[idx].setAttribute("aria-expanded", "false");
      dropdownModals[idx].setAttribute("aria-hidden", "true");
      arrows[idx].classList.remove("rotate-arrow");
    }
  });

  /* menulink.addEventListener("focus", () => {
    let dropdownOpen =
      dropdownModals[idx].getAttribute("aria-hidden") == "false";
    let menuExpanded = menuLinks[idx].getAttribute("aria-expanded") == "true";

    menuLinks[idx].setAttribute("aria-expanded", "true");
    dropdownModals[idx].setAttribute("aria-hidden", "false");
    arrows[idx].classList.add("rotate-arrow");
    /* dropdownModals[idx].classList.toggle("active");*/
  /*
    if (dropdownOpen && menuExpanded) {
      menuLinks[idx].setAttribute("aria-expanded", "false");
      dropdownModals[idx].setAttribute("aria-hidden", "true");
      arrows[idx].classList.remove("rotate-arrow");
    }
  })*/

  /* menulink.addEventListener("mouseover", () => {
    arrows[idx].classList.add("rotate-arrow");
    dropdownModals[idx].classList.add("active");
  }); */
});

/* dropdownModals.forEach((modal, idx) => {
  modal.addEventListener("mouseout", () => {
    arrows[idx].classList.remove("rotate-arrow");
    dropdownModals[idx].classList.remove("active");
  });
}); */

// Mobile hamburger menu
const hamburger = document.querySelector(".nav-bar__hamburger-button");

hamburger.addEventListener("click", () => {
  const modalOpen = mobileMenu.getAttribute("aria-hidden") == "false";
  const btnClicked = hamburger.getAttribute("aria-expanded") == "true";

  mobileMenu.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.classList.add("is-active");

  if (modalOpen && btnClicked) {
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.classList.remove("is-active");
  }

  /* upperClose.classList.add("rotate-top");
  middleClose.style.opacity = 0;
  bottomClose.classList.add("rotate-bottom"); */
});
