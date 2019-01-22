$('#nosso-lado .card').click(function () {
    $(this).toggleClass('active');
});

var swiper = new Swiper('#nosso-lado .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '#nosso-lado .swiper-button-next',
        prevEl: '#nosso-lado .swiper-button-prev',
    },
    pagination: {
        el: '#nosso-lado .swiper-pagination',
        dynamicBullets: true,
    },
});
