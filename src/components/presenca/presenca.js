$(document).ready(function () {
    $('.phone').mask('(00) 00000-0000');
});

var btnCapa = $('#presenca .card-container .card .side .fio-dourado .text');
var convite = $('#presenca .card');
var goBack = $('.go-back-capa');

btnCapa.click(function () {
    convite.toggleClass('active');
});

goBack.click(function () {
    convite.toggleClass('active');
});
