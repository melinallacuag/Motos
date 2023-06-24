

$(function () {
  menu_mobil();

  // $('#menu-fixed li').click(function () {
  //     var link = $(this).attr('id');
  //     console.log('link '+link);

  //     $('html, body').stop().animate({
  //         scrollTop: $("."+link).offset().top - 110
  //     }, 600);

  // })

 

  $('.slide-versiones').slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: false,
                  arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
  });

    $('.lista-mini-video').slick({
        dots: false,
        arrows: true,
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        verticalSwiping: true,
    });

    jQuery(".lista-mini-video .item-mini-imagen").click(function(){
        jQuery(".lista-mini-video .item-mini-imagen").removeClass("active");
        jQuery(".reproductor-video").removeClass("active");
        jQuery(this).addClass("active");
        var id = jQuery(this).data("orden");
        jQuery(".reproductor-video").eq(id).addClass("active");

    })

  /*--------caracterirsticas----------*/

    $('#slide-t-caracteristicas').slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: false,
                  arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".content-caracteristicas h4.nombre").click(function () {
        var num = $(this).parent().index();

        if (!($(this).parent().hasClass("activo"))) {
            $(".content-caracteristicas li").removeClass('activo');
            $(".content-caracteristicas .box").slideUp(300);
            $(this).parent().toggleClass('activo');
            $(this).parent().find('.box').slideToggle();
        } else {
            $(this).parent().removeClass('activo');
            $(this).parent().find('.box').slideToggle();
        }
    })

    $(".tab-caracteristicas div.t-carac").click(function () {
        var tCaracteristica = $(this).data('id');
        console.log(tCaracteristica);

        $(".tab-caracteristicas .t-carac").removeClass('activo');
        $(this).addClass('activo');

        $(".content-listacaracteristicas .content-caracteristicas").hide();
        $(".content-listacaracteristicas #"+tCaracteristica).fadeIn();
        
    })
  /*-------- END CARACTERIRSTICAS----------+/

  /*----------GALERIA--------------*/ 

  $(".content-listagaleria .t-nombre").click(function () {
        var num = $(this).parent().index();
        var idGal = $(this).parent().attr('id');

        if (!($(this).parent().hasClass("activo"))) {
            $(".content-listagaleria .content-galeria").removeClass('activo');
            $(".content-listagaleria .galeria-lista").slideUp(300);
            $(this).parent().toggleClass('activo');
            $(this).parent().find('.galeria-lista').slideToggle();
            slickClose('slide-'+idGal)
            slickOpen('slide-'+idGal)
        } else {
            $(this).parent().removeClass('activo');
            $(this).parent().find('.galeria-lista').slideToggle();
            console.log('else')
            slickClose('slide-'+idGal)
            slickOpen('slide-'+idGal)
            //slickOpen('slide-'+idGal)
        }
    })

    $(".tab-galeria div.t-gal").click(function () {
        var tGaleria = $(this).data('id');
        console.log(tGaleria);

        $(".tab-galeria .t-gal").removeClass('activo');
        $(this).addClass('activo');

        $(".content-listagaleria .content-galeria.fija").hide();
        $(".content-listagaleria #"+tGaleria).fadeIn();
        
    })


    $('#slide-g-interior').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.'
		}
    });
    
    $('#slide-g-exterior').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.'
		}
	});

    $('#slide-g-videos a').magnificPopup({
		type: 'iframe',
		mainClass: 'a',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    });

    $('#slide-g-360 a').magnificPopup({
        type: 'iframe',
        mainClass: 'a',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.layer360').magnificPopup({
		type: 'iframe',
		mainClass: 'a',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
    });

/*----------END GALERIA--------------*/ 

/*----------END COLORES--------------*/ 

    $("#colores .lista-color li a").click(function (event) {
        event.preventDefault()

        var num = $(this).parent().index();
        
        console.log(num);

        $("#colores .lista-color li a").removeClass('flex-active');
        $(this).addClass('flex-active');

        $("#colores .autos .auto-color").hide();
        $("#colores .autos .auto-color:eq("+num+")").fadeIn();

        if($(this).hasClass('img360')){
            $('.threesixty').threeSixty({
                dragDirection: 'horizontal',
            });
        }
        
    })

/*-----------Video------------------ */

  $('.layer-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'a',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
  });

/*----------END COLORES--------------*/ 

    $('.slide-modelos').slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                  dots: true,
                  arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})

var menu_mobil = function () {

    $('.btn-mobile, header nav a').click(function () {
        if ($(window).width() <= 992) {
            $('nav').toggleClass('open');
            $('.btn-mobile #nav-icon1 ').toggleClass('open');
        }
    })
}


var slickOpen = function (nombre) {

    if(!($('#'+nombre).hasClass('slick-initialized'))) {
        setTimeout(() => {
            $('#'+nombre).slick({
                infinite: false,
                slidesToShow: 4,
                settings: "unslick",
                responsive: [
                    {
                        breakpoint: 990,
                        settings: {
                            dots: true,
                            arrows: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('creado')
        }, 400);
    }
    
}

var slickClose = function (nombre) {
    if($('#'+nombre).hasClass('slick-initialized')) {

        $('#'+nombre).slick('unslick');
    }
}




$( window ).scroll(function() {
 $(".bloque-conocelo").is(":visible") && ($(document).scrollTop() >= $(".bloque-conocelo").offset().top - 200 ? $(".bloque-conocelo .container-filters-red").addClass("fixed") : $(".bloque-conocelo .container-filters-red").removeClass("fixed"));
            for (var e = $(window).scrollTop(), t = $(".filters li"), o = 0; o < t.length; o++) {
                var i = t[o];
                if (null != $(i).attr("id")) $("." + $(i).attr("id")).offset().top - $(".header").height() - 60 <= e && ($(".filters li").removeClass("active"), $(i).addClass("active"))
            }
            $("#modelos").is(":visible") && ($(document).scrollTop() >= $("#modelos").offset().top - 200 ? $(".bloque-conocelo .container-filters-red").addClass("hide") : $(".bloque-conocelo .container-filters-red").removeClass("hide"))

});