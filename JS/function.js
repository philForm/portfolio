

/**
 * Rajoute une classe à un élément HTML au delà d'une certaine largeur d'écran :
 * @param {string} size : ;
 * @param { HTMLElement } htmlEtl 
 * @param {string} classValue 
 */
const addClassOnResize = (size, htmlEtl, classValue) => {
    if (window.matchMedia(`(min-width: ${size})`).matches && !htmlEtl.classList.contains(classValue))
        htmlEtl.classList.add(classValue);
};

/**
 * Retire une classe à un élément HTML au delà d'une certaine largeur d'écran :
 * @param {string} size : ;
 * @param { HTMLElement } htmlEtl 
 * @param {string} classValue 
 */
const removeClassOnResize = (size, htmlEtl, classValue) => {
    if (window.matchMedia(`(min-width: ${size})`).matches && htmlEtl.classList.contains(classValue))
        htmlEtl.classList.remove(classValue);
}

/**
 * Ajoute une class au conteneur des éléments d'une liste HTML lors d'un événement sur un élément de cette liste :
 * @param {HTMLElement} htmlEtl1 : liste.
 * @param {HTMLElement} htmlEtl2 : conteneur de la liste.
 * @param {string} event 
 * @param {string} classValue 
 */
const addClassOnEvent = ([htmlElt1, htmlElt2, htmlElt3], event, [classValue1, classValue2]) => {
    for (let i = 0; i < htmlElt1.length; i++) {
        htmlElt1[i].addEventListener(event, () => {
            htmlElt2.classList.add(classValue1);
            htmlElt3.classList.remove(classValue2)
        });
    };
};

/**
 * Toggle qui supprime ou ajoute un classe à un élément HTML :
 * @param {HTMLElement} htmlEtl 
 * @param {string} classElt 
 */
const classToggle = (htmlEtl, classValue) => {
    if (!htmlEtl.classList.contains(classValue))
        htmlEtl.classList.add(classValue);
    else
        htmlEtl.classList.remove(classValue);
}

/**
 * Création de la liste des projets du portfolio :
 * @param {[object]} listArray : tableau d'objets
 */
const portfolioList = (listArray) => {

    let divElt = document.getElementById("portfolio-wrapper");

    const fragment = new DocumentFragment();

    for (let item of listArray) {
        let divSlide = document.createElement("div");
        divSlide.classList.add("swiper-slide", "portfolio__slide");
        divSlide.setAttribute("id", `swiper-slide-${listArray.indexOf(item) + 1}`);

        let logo = "";
        let logoContain = "";
        if (item.logo) {
            for (let i = 0; i < item.logo.length; i++) {
                logo += `
                    <div class="portfolio__logo">
                        <div>
                            <img src="./images/logos/${item.logo[i][1]}" alt="${item.logo[i][2]}">
                        </div>
                        <span>${item.logo[i][0]}</span>
                    </div>
                `;
            };
            logoContain = `
                <div class="portfolio__techno">
                    <div class="portfolio__techno-title">
                        <h3>Technologies</h3>
                    </div>
                    <div class="portfolio__techno-list" id="portfolio-techno-list-${listArray.indexOf(item) + 1}">
                        ${logo}
                    </div>
                </div>
                `;
        };

        let bouton = "";

        for (let i = 0; i < item.more.length; i++) {
            bouton += `
                <a 
                    class="btn" 
                    target="_blank"
                    type="button" 
                    href="${item.more[i][1]}">${item.more[i][0]}
                </a>
                `;
        };

        divSlide.innerHTML = `
                <article class="portfolio__contain">
                    <!--<div class="portfolio__title">
                        <h3>${item.title}</h3>
                    </div>-->
                    <a href="#" class="portfolio__img" id="portfolio-img-${listArray.indexOf(item) + 1}">
                        <img src=${item.image} alt="${item.alt}">
                        <div>En savoir plus</div>
                    </a>
                    <div class="portfolio__content">
                        <div class="portfolio__descript">
                            ${item.description}
                        </div>
                        ${logoContain}
                    </div>
                    <div class="portfolio__more" id='portfolio-more-${listArray.indexOf(item) + 1}'>
                        ${bouton}
                    </div>
                    
                </article>
                `;

        fragment.appendChild(divSlide);

    };

    divElt.appendChild(fragment);

    for (let item of listArray) {
        let img = document.querySelector(`#portfolio-img-${listArray.indexOf(item) + 1} img`);
        img.style.maxWidth = `${item.width}`;
        img.style.maxHeight = `${item.height}`;

        console.log(document.querySelector(`#portfolio-img-${listArray.indexOf(item) + 1} img`).clientHeight);

    }

};

/**
 * Création de la modale détaillant chaque projet du portfolio :
 * @param {[object]} listArray : tableau d'objets
 * @param {[object]} listDetails : tableau d'objets
 */
const modalDetails = (listArray, listDetails) => {

    const modalContain = document.getElementById("modal-contain");
    const overlay = document.getElementById("modal-overlay");
    const modal = document.getElementById("modal-wrapper");
    const modalCloseBtn = document.getElementById("close-modal");
    const modalNextPrev = document.getElementsByClassName("modal__nextprev");
    const modalElt = document.getElementById('modal');
    const underConstruct = document.querySelector("#modal > img");
    console.log(modalNextPrev)

    for (let item of listArray) {

        const imgContain = document.getElementById(`portfolio-img-${listArray.indexOf(item) + 1}`);
        console.log(imgContain);

        // Ouverture de la fenêtre modale :
        imgContain.addEventListener("click", () => {

            console.log(item)
            // Recherche d'un élément dans listDetails par son id :
            const detail = listDetails.find(el => el.id === item.id);

            modalContain.style.visibility = "visible";

            // Ajoute le titre du projet :
            overlay.innerHTML = `
                <h2>${detail.title}</h2>
            `;

            const fragment = new DocumentFragment();

            if (detail.slides && !detail.under_construct) {
                for (let i = 0; i < detail.slides.length; i++) {
                    let divSlide = document.createElement("div");
                    divSlide.classList.add("swiper-slide", "modal_slide");
                    divSlide.setAttribute("id", `swiper-slide-${detail.id}`);

                    console.log(detail.slides[i].alt);

                    divSlide.innerHTML = `
                        <div class="modal_slide_img" id="modal-slide-img-${i + 1}">
                            <img src=${detail.slides[i].img} alt=${detail.slides[i].alt} id="img-${i + 1}">
                        </div>
                        <div class="modal_slide_txt">
                            ${detail.slides[i].txt}
                        </div>    
                    `
                    fragment.appendChild(divSlide);
                };

                modal.appendChild(fragment);
            }
            else if (detail.under_construct) {
                modalElt.style.flexDirection = 'column';
                underConstruct.style.display = 'block';
            }

            const modalImgCont = document.querySelectorAll(".modal_slide_img");
            const modalImg = document.querySelectorAll(".modal_slide_img img");
            const modalTxtCont = document.getElementsByClassName("modal_slide_txt");

            console.log(modalImgCont)
            console.log(modalImg)

            let rect = modalImgCont[0].getBoundingClientRect()
            console.log(rect)

            let rectImg = modalImg[0].getBoundingClientRect()
            console.log(rectImg)

            let rectModal = modal.getBoundingClientRect()
            console.log(rectModal)

            console.log(document.querySelector("#modal-slide-img-1").clientHeight)


            const modalPosition = () => {
                let img = document.getElementById("img-1")
                console.log(img.offsetHeight)
                console.log("========= modalePosition active")
                for (let item of modalImgCont) {
                    console.log(item)
                    // let modalImgHeight = item.clientHeight;
                    let modalImgHeight = item.clientWidth / 1.92;
                    console.log(modalImgCont)
                    console.log(modalImgHeight)
                    console.log(item.getClientRects())
                    let modalImgWidth = item.clientWidth;
                    console.log(modalImgWidth)
                    for (let item2 of modalImg) {
                        let imgWidth = item2.clientWidth;
                        let txtPadding = (modalImgWidth - imgWidth) / 2;
                        for (let item3 of modalTxtCont) {
                            item3.style.paddingTop = `${modalImgHeight + 15}px`;
                            item3.style.paddingLeft = `${txtPadding - 10}px`;
                            item3.style.paddingRight = `${txtPadding - 10}px`;
                        }

                        for (let item4 of modalNextPrev)
                            item4.style.top = `${modalImgHeight / 2}px`;

                        modalNextPrev[0].style.right = `${txtPadding / 2}px`;
                        modalNextPrev[0].style.transform = "translateX(+50%) scale(0.5)";
                        modalNextPrev[1].style.left = `${txtPadding / 2}px`;
                        modalNextPrev[1].style.transform = "translateX(-50%) scale(0.5)";
                    }

                }

                // console.log(txtPadding)

            };

            modalPosition()

            window.addEventListener("resize", () => {
                modalPosition();
            });

        });

        /**
         * Ferme la fenêtre modale :
         * @param {HTMLElement} element 
         */
        const closeModal = (element) => {
            element.addEventListener("click", () => {
                modalContain.style.visibility = "hidden";
                modalElt.style.flexDirection = 'row';
                underConstruct.style.display = 'none';
            });
        }

        closeModal(overlay);
        closeModal(modalCloseBtn);

    }
};




/**
 * initialisation d'un objet Swiper :
 * @param {number} item 
 * @returns 
 */
const swiper2 = (item) => {

    return new Swiper(".mySwiper2", {
        slidesPerView: item,
        spaceBetween: 5,
        freeMode: true,
        // loop: true,
        size: 300,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

/**
 * Ajuste la hauteur de deux éléments HTML l'un par rapport à l'autre :
 * @param {HTMLElement} elt1 
 * @param {HTMLElement} elt2 
 */
const adjustHeight = (elt1, elt2) => {
    let heightElt1 = elt1.offsetHeight;
    let heightElt2 = elt2.offsetHeight;

    if (heightElt1 > heightElt2)
        elt2.style.height = `${heightElt1}px`;
    else
        elt1.style.height = `${heightElt2}px`;

};

// EMAIL JS
/**
 * Envoi les données du formulaire via EmailJS :
 * @param {HTMLInputElement} formName 
 * @param {HTMLInputElement} formEmail 
 * @param {HTMLInputElement} formMessage 
 */
const sendMail = (formName, formEmail, formMessage, service, template) => {

    let templateParams = {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value
    };

    // let service = 'service_uamh0ws';
    // let template = 'template_hyh5rsk';

    emailjs.send(service, template, templateParams)
        .then((res) => {
            formName.value = "";
            formEmail.value = "";
            formMessage.value = "";
            alert('Votre message a été envoyé avec succés !', res.status, res.text);
        }).catch((err) => {
            alert(err);
        });
};


export { addClassOnResize, removeClassOnResize, addClassOnEvent, classToggle, portfolioList, modalDetails, swiper2, adjustHeight, sendMail };