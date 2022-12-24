const toggle = document.getElementById("header-toggle");
const nav = document.getElementById("nav");
const navLink = document.getElementsByClassName("nav");
console.log(navLink[0]);

toggle.addEventListener("click", () => {

    nav.classList.toggle("bloc");
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        nav.classList.remove("bloc");
    });
};
