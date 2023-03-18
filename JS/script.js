import { projects } from "./array.js";
import { addClassOnEvent, addClassOnResize, classToggle, portfolioList, removeClassOnResize, sendMail } from "./function.js";
import { modal, toggle, navLink, navUl, formName, formEmail, formMessage, btnSubmit } from "./html_element.js";

console.log(window.innerWidth);

// Repli du menu déroulant au delà de 768px de largeur d'écran, en ajoutant la class "transition" à navUl :
window.addEventListener("resize", () => {
    addClassOnResize('768px', navUl, "transition");
    removeClassOnResize('768px', modal, "overlay");
});

// Au clic sur le bouton hamb du menu, repli ou deployement du menu déroulant :
toggle.addEventListener("click", () => {
    classToggle(navUl, "transition");
    if (!navUl.classList.contains("transition")) {
        modal.classList.add("overlay");
    } else {
        modal.classList.remove("overlay");
    }
});

modal.addEventListener("click", () => {
    navUl.classList.add("transition");
    modal.classList.remove("overlay");
})

// Repli du menu déroulant au click sur un intitulé du menu :
addClassOnEvent([navLink, navUl, modal], 'click', ["transition", "overlay"]);

// Création du portfololio :
portfolioList(projects);

// Paramètres de EmailJS :
const service = 'service_uamh0ws';
const template = 'template_hyh5rsk';

// Envoi le message du formulaire :
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail(formName, formEmail, formMessage, service, template);
})




