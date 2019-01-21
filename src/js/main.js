// Criar todas as chamadas JS que serão utilizadas em várias páginas no projeto

$(function () {
    $(window).on('scroll', function () {
        $('section').each(function () {
            var scrollTop = $(window).scrollTop(),
                elementOffset = $(this).offset().top,
                distance = (elementOffset - scrollTop);
            if (distance < 500) {
                $(this).addClass('active').change();
            } else {
                $(this).removeClass('active');
            }

        });
    });
});
