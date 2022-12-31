// Swiper initialisation
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class=${className}>${index}</span>`;
        },
    },
});

const btnPagin1 = document.getElementById("about-pagination1");
const btnPagin2 = document.getElementById("about-pagination2");
btnPagin1.firstChild.style.display = "none";
btnPagin2.lastChild.style.display = "none";

btnPagin1.lastChild.innerText = "Plus d'informations";
btnPagin2.firstChild.innerText = "Retour";


