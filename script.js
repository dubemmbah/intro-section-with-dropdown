"use strict";

const navList = document.querySelector(".nav__list");
const featuresList = document.querySelector(".nav__item-features");
const companyInfo = document.querySelector(".nav__item-company");
const mobileNavMenuIcon = document.querySelector(".mobile-nav .menu svg");
const mobileNavigation = document.querySelector(
  ".mobile-nav .mobile_navigation"
);
console.log(mobileNavMenuIcon, mobileNavigation);
const menuBtnClose = document.querySelector(".icon-close");
const menuIconBox = document.querySelector(".menu_icon-box");

const handleHover = function (e) {
  //   Matching strategy
  if (e.target.classList.contains("nav__item")) {
    const link = e.target;
    const siblings = link.closest(".nav__list").querySelectorAll(".nav__item");
    const logo = link.closest(".nav").querySelector("svg");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navList.addEventListener("mouseover", handleHover.bind(0.4));
navList.addEventListener("mouseout", handleHover.bind(1));

featuresList.addEventListener("click", () => {
  const features = featuresList.querySelector(".features");

  features.classList.toggle("unhide");
  featuresList.querySelector("svg").classList.toggle("rotate");
  companyInfo.querySelector(".company_info").classList.remove("unhide");
  companyInfo.querySelector("svg").classList.remove("rotate");
});

companyInfo.addEventListener("click", () => {
  const info = companyInfo.querySelector(".company_info");

  info.classList.toggle("unhide");
  companyInfo.querySelector("svg").classList.toggle("rotate");
  featuresList.querySelector(".features").classList.remove("unhide");
  featuresList.querySelector("svg").classList.remove("rotate");
});

// Menu Close Button
mobileNavMenuIcon.addEventListener("click", () => {
  mobileNavigation.style.transform = `translateX(0)`;
});

menuBtnClose.addEventListener("click", () => {
  mobileNavigation.style.transform = `translateX(200%)`;
});
