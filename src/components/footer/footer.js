// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2020 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var dia = $('.title-footer .dias');

    if (days < 10) {
        dia.text('0' + days + ' dia');
    } else {
        dia.text(days + ' dias');
    }



    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $('.title-footer').html('Enfim casados!');
    }
}, 1000);
