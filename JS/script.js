import { projects } from "./array.js";
import { addClassOnEvent, addClassOnResize, adjustHeight, classToggle, portfolioList, sendMail } from "./function.js";
import { toggle, navLink, navUl, aboutContainElt1, aboutContainElt2, formName, formEmail, formMessage, btnSubmit } from "./html_element.js";

console.log(window.innerWidth);

// Repli du menu déroulant au delà de 768px de largeur d'écran, en ajoutant la class "transition" à navUl :
window.addEventListener("resize", () => {
    addClassOnResize('768px', navUl, "transition");
});

// Au clic sur le bouton hamb du menu, repli ou deployement du menu déroulant :
toggle.addEventListener("click", () => {
    classToggle(navUl, "transition");
});

// Repli du menu déroulant au click sur un intitulé du menu :
addClassOnEvent(navLink, navUl, 'click', "transition");

// Création du portfololio :
portfolioList(projects);

// Ajuste la hauteur de deux éléments HTML au chargement de la page :
window.addEventListener("load", () => {
    adjustHeight(aboutContainElt1, aboutContainElt2);
});

// Ajuste la hauteur de deux éléments HTML au redimensionnement en largeur de la page :
window.addEventListener("resize", () => {
    adjustHeight(aboutContainElt1, aboutContainElt2);
});

// Paramètres de EmailJS :
const service = 'service_uamh0ws';
const template = 'template_hyh5rsk';

// Envoi du message du formulaire :
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail(formName, formEmail, formMessage, service, template);
})




