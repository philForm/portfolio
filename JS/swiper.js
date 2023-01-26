window.onload = () => {

    const swiper = () => {
        // Swiper initialisation
        return new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class=${className}>${index}</span>`;
                },
            },
        });
    };

    console.log(swiper());


    const swiper2 = () => {

        return new Swiper(".mySwiper2", {
            spaceBetween: 10,
            freeMode: true,
            loop: true,
            // size: 620,
            // width: 300,
            pagination: {
                el: ".swiper-pagination",
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
                    slidesPerGroup: 4,
                },
                1400: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                }
            },
        });
    }

    console.log(swiper2());

    // window.onload = () => {

    const btnPagin1 = document.getElementById("about-pagination1");
    const btnPagin2 = document.getElementById("about-pagination2");

    btnPagin1.firstChild.style.display = "none";
    btnPagin2.lastChild.style.display = "none";

    btnPagin1.lastChild.innerText = "Plus d'informations";
    btnPagin2.firstChild.innerText = "Retour";

    // btnPagin1.lastChild.classList.add('btn');
    // btnPagin2.firstChild.classList.add('btn');

    // let bulletList = document.getElementById("pagination-portfolio").children;

    // for (let i = 0; i < bulletList.length; i++) {
    //     bulletList[i].classList.add("btn");
    // };

    // window.addEventListener("resize", () => {
    //     for (let i = 0; i < bulletList.length; i++) {
    //         bulletList[i].classList.add("btn");
    //     };
    // })

};



