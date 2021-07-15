$(document).ready(function() {
    $('.header__burger').click(function(event) {
            $('.header__burger,.header__ul,body').toggleClass('active');


    });
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});