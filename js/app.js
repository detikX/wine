$(document).ready(function () {
    AOS.init()
})
$('.slider-bukti').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$(".data .wrap-detikx p").attr({ "data-aos": "fade-in", "data-aos-delay": "200", "data-aos-duration": "300" });
$(".data .topx").attr({ "data-aos": "fade-left", "data-aos-delay": "2500", "data-aos-duration": "500" });