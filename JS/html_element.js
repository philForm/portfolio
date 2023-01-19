const toggle = document.getElementById("header-toggle");
const nav = document.getElementById("nav");
const navLink = document.getElementsByClassName("nav");
const navUl = document.querySelector("#nav > ul");
const aboutContainElt1 = document.getElementById('about-contain-1');
const aboutContainElt2 = document.getElementById('about-contain-2');

// Formulaire :
const formName = document.getElementById("form-name");
const formEmail = document.getElementById("form-email");
const formMessage = document.getElementById("form-message");
const btnSubmit = document.getElementById("form-btn");

export { toggle, nav, navLink, navUl, aboutContainElt1, aboutContainElt2, formName, formEmail, formMessage, btnSubmit };;