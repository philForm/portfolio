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

// for (let i = 0; i < navLink.length; i++) {

//     navLink[i].addEventListener("click", (e) => {
//         e.preventDefault();
//         let idTarget = navLink[i].getAttribute("href").replace("#", "");
//         console.log(idTarget);
//         const target = document.getElementById(`${idTarget}`);
//         console.log(target);
//         // target.style.background = "red";
//         target.scrollTop = -100;
//         // document.querySelector("html").animate({
//         //     scrollTop: target.offset().top - headerHeight
//         // }, 800);
//         return false;
//     })
// }
