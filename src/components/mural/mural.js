var swiper = new Swiper('#mural .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '#mural .swiper-button-next',
        prevEl: '#mural .swiper-button-prev',
    },
    pagination: {
        el: '#mural .swiper-pagination',
        dynamicBullets: true,
    },
});
