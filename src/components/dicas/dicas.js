
var btnAccordion = $('.accordion .item-accordion .head');
var content = $('.accordion .item-accordion .content');
var icon = $('.icon');

btnAccordion.append('<div class="icon">'+
        '<span class="lineOne"></span>'+
        '<span class="lineTwo"></span>'+
    '</div>');

btnAccordion.click(function() {
    var item = $(this).attr('data-id');

    btnAccordion.removeClass('open');
    $(this).addClass('open');

    content.slideUp();
    $('.accordion .item-accordion .content[data-id="' + item + '"]').slideDown();
});
