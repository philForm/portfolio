window.onload = () => {

    // Swiper initialisation
    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
                if (index === 0) {
                    index = "Retour"
                }
                if (index === 1) {
                    index = "Plus d'informations"
                }
                console.log(className)
                return `<span class=${className}>${index}</span>`;
            }
        },
    });



    new Swiper(".mySwiper2", {
        spaceBetween: 10,
        // freeMode: true,
        loop: true,
        // size: 620,
        // width: 300,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            450: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
            1400: {
                slidesPerView: 5,
                slidesPerGroup: 1,
            }
        },
    });

    new Swiper(".mySwiper3", {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    // ==============================================

    const btnPagin = document.getElementById("about-pagination");

    console.log(btnPagin)
    console.log(btnPagin.firstChild)

    // btnPagin.lastChild.innerText = "Plus d'informations";
    // btnPagin.firstChild.innerText = "Retour";

    btnPagin.firstChild.style.display = "none";

    const bulletClic = ([first, last]) => {

        last.classList.remove("swiper-pagination-bullet-active");
        first.classList.add("swiper-pagination-bullet-active");
        first.style.display = "block";
        last.style.display = "none";
    }

    btnPagin.lastChild.addEventListener("click", () =>
        bulletClic([btnPagin.firstChild, btnPagin.lastChild])
    );

    btnPagin.firstChild.addEventListener("click", () =>
        bulletClic([btnPagin.lastChild, btnPagin.firstChild])
    );
};






