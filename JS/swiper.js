window.onload = () => {

    new Swiper(".mySwiper2", {
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

};



