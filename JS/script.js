const toggle = document.getElementById("header-toggle");
const nav = document.getElementById("nav");
const navLink = document.getElementsByClassName("nav");
const navUl = document.querySelector("#nav > ul");
console.log(navUl);
console.log(window.innerWidth)

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 500px)").matches && !navUl.classList.contains("transition")) {
        navUl.classList.add("transition");
        console.log("supérieur à 500px");
        navUl.style.zIndex = -20;
    }
});

toggle.addEventListener("click", () => {

    if (!navUl.classList.contains("transition")) {
        navUl.classList.add("transition");
        navUl.style.zIndex = -20;

    } else {
        navUl.classList.remove("transition");
        setTimeout(() => {
            navUl.style.zIndex = 0;
        }, 1000)
    }
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        navUl.style.zIndex = -20;
        navUl.classList.add("transition");

    });
};

// ===================================================

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

