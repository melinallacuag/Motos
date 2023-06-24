

$(function () {

    var ancho = $(window).width();

    menu_mobil();

    $('header #menu a').click(function () {
        var link = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(link).offset().top - 55
        }, 600);

    })

    if(document.getElementById("#scrollbar") !== null){
        scrollbar();
    }


    if(document.getElementById("preguntas") !== null){
        preguntas();
    }
    

});

var menu_mobil = function () {
  $('.btn-mobile, header nav a').click(function () {

    $('.submenu').removeClass('show');
    //$('.submenu').fadeOut();

    if ($(window).width() < 992) {
      $('nav').toggleClass('open');
      $('.btn-mobile #nav-icon1 ').toggleClass('open');
    }
  })

  $('header nav span.nav-link').click(function (e) {
      e.stopPropagation();
    //$('.submenu').fadeToggle();
    $('.submenu').removeClass('show');
    $(this).parent().find('.submenu').toggleClass('show');
    //$('.submenu').toggleClass('show');
  })

    $(document.body).on("click", function () {
        if($('.submenu.show').is(':visible')){
            $('.submenu').removeClass('show');
            
        }
        
    });
}

var preguntas = function () {
    console.log('aquiiii');
    $(".content-preguntas .pregunta").click(function () {
        var num = $(this).parent().index();

        if (!($(this).parent().hasClass("activo"))) {
            $(".content-preguntas li").removeClass('activo');
            $(".content-preguntas .respuesta").slideUp(300);
            $(this).parent().toggleClass('activo');
            $(this).parent().find('.respuesta').slideToggle();
        } else {
            $(this).parent().removeClass('activo');
            $(this).parent().find('.respuesta').slideToggle();
        }
    })
}


var scrollbar = function () {
    var myCustomScrollbar = document.querySelector('.scrollbar');
    var ps = new PerfectScrollbar(myCustomScrollbar);

    var scrollbarY = myCustomScrollbar.querySelector('.ps.ps--active-y>.ps__scrollbar-y-rail');

    myCustomScrollbar.onscroll = function () {
        scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 500px; right: ${-this.scrollLeft}px`;
    }
}

/*var menu_mobil = function () {

    $('.btn-mobile, header nav a').click(function () {
        if ($(window).width() <= 992) {
            $('nav').toggleClass('open');
            $('.btn-mobile #nav-icon1 ').toggleClass('open');
        }
    })
}*/

