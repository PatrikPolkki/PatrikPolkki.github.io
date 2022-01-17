"use strict";

document.addEventListener("scroll", (evt) => {
  evt.preventDefault();
  if (window.scrollY > 20) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
  if (window.scrollY > 100) {
    document.querySelector(".scroll-up-btn").classList.add("show");
  } else {
    document.querySelector(".scroll-up-btn").classList.remove("show");
  }
});

document.querySelector(".scroll-up-btn").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector("html").scrollTo(0, 0);
});

document.querySelector(".menu-btn").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".navbar .menu").classList.toggle("active");
  document.querySelector(".menu-btn i").classList.toggle("active");
});

document.querySelector(".menu").addEventListener("click", (evt) => {
  if (evt.target && evt.target.matches("a")) {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  }
});

const config = {
  type: "carousel",
  perView: 3,
  breakpoints: {
    550: {
      perView: 1,
    },
    950: {
      perView: 2,
    },
  },
  hoverpause: true,
};
new Glide(".glide", config).mount();
