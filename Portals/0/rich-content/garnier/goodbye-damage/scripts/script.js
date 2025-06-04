(() => {
    const swiper = new Swiper('#es-rc #es-garnier .es-swiper', {
        loop: false,
        autoHeight: true,

        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: '#es-rc #es-garnier .es-swiper1-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#es-rc #es-garnier .es-swiper1-button-next',
            prevEl: '#es-rc #es-garnier .es-swiper1-button-prev',
        },

        breakpoints: {
            576: {
            slidesPerView: 2,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 5,
            },
            982: {
            slidesPerView: 4,
            }
        }
    });
})()