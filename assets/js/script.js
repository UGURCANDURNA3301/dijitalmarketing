"use strict";
/** add event on multiple elements*/
const addEventOnElement = function (elements, eveType, callback) {
  for (let i = 0, len = elements.lenght; i < len; i++) {
    elements[i].addEventListener(eveType, callback);
  }
};
//**navbar togglle for mobile */
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelectorAll("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);
