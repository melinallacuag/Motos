// Include
$(function () {
 $("#header").load("header.html");
 $("#footer").load("footer.html");
});


$(function () {
  $('#carrusel-autos').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

//TOP Scroll animation
$(function(){
$('.top__btn__wrap').on('click',function(){
$('body,html').animate({
scrollTop: 0},400);
return false;
});
});

// Anchor animation
$(function() {
$('a[href^="#"]').click(function () {

    var href = $(this).attr("href");
    var headerHight = $(".header__sp").height();
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = (target.offset().top - headerHight);
    $('body,html').animate({
        scrollTop: position
    }, 150, '');
    return false;
});
});


// for SP accordion
$(function () {
    $('.accordion--open__btn').on('click', function () {
        $(this).prev('.accordion__wrap').removeClass('__inactive');
        $(this).prev('.accordion__wrap').addClass('__active');
    });
});
$(function () {
    $('.accordion--close__btn').on('click', function () {
        $(this).parent('a').prev().prev('.accordion__wrap').removeClass('__active');
        $(this).parent('a').prev().prev('.accordion__wrap').addClass('__inactive');
    });
});
$(function () {
    $('.accordion--open__btn').on('click', function () {
        $(this).addClass('d__none');
        $(this).next('a').children('.accordion--close__btn').removeClass('d__none');
    });
});
$(function () {
    $('.accordion--close__btn').on('click', function () {
        $(this).addClass('d__none');
        $(this).parent('a').prev('.accordion--open__btn').removeClass('d__none');
    });
});

