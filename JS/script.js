import { projects, projectsDetails } from "./array.js";
import { addClassOnEvent, addClassOnResize, classToggle, modalDetails, portfolioList, removeClassOnResize, sendMail } from "./function.js";
import { modalNav, toggle, navLink, navUl, formName, formEmail, formMessage, btnSubmit } from "./html_element.js";


console.log(window.innerWidth);

// window.onload = () => {

// ======================================================================
// ======================================================================


// ======================================================================
// ======================================================================


// Repli du menu déroulant au delà de 768px de largeur d'écran, en ajoutant la class "transition" à navUl :
window.addEventListener("resize", () => {
    addClassOnResize('768px', navUl, "transition");
    removeClassOnResize('768px', modalNav, "overlay");
});

// Au clic sur le bouton hamb du menu, repli ou déploiement du menu déroulant :
toggle.addEventListener("click", () => {
    classToggle(navUl, "transition");
    if (!navUl.classList.contains("transition")) {
        modalNav.classList.add("overlay");
    } else {
        modalNav.classList.remove("overlay");
    }
});

modalNav.addEventListener("click", () => {
    navUl.classList.add("transition");
    modalNav.classList.remove("overlay");
})

// Repli du menu déroulant au click sur un intitulé du menu :
addClassOnEvent([navLink, navUl, modalNav], 'click', ["transition", "overlay"]);

// Création du portfololio :
portfolioList(projects);

// Création de la modale :
modalDetails(projects, projectsDetails);

// Paramètres de EmailJS :
// const service = 'service_uamh0ws';
const service = 'service_yg4kkth';
const template = 'template_hyh5rsk';

// Envoi le message du formulaire :
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail(formName, formEmail, formMessage, service, template);
})

// };


