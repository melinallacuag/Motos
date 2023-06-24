
$(function () {
    menu_mobil();

    $('nav a, .ancla').click(function () {
      var link = $(this).attr('href');
      console.log('link '+link);

      $('html, body').stop().animate({
          scrollTop: $(link).offset().top - 70
      }, 600);
    })

    $('.btn-spec').magnificPopup({
		type: 'inline',
		preloader: false,
        modal: false,
        showCloseBtn:true,
        closeBtnInside:true
    });

    
	


    //---------------- sliders   mobile -------------------
    
    if(window.innerWidth < 768) {
        slickOpen('slide-galeria');
        slickOpen2('slide-especificaciones');
        slickOpen2('slide-seguridad');
        slickOpen2('slide-colores');
        slickOpen2('slide-gazoo');

    }else{
        slickClose('slide-galeria');
        slickClose('slide-especificaciones');
        slickClose('slide-seguridad');
        slickClose('slide-colores');
        slickClose('slide-gazoo');
    }

    //-------------------------------------------

    $('#slide-galeria').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen',
        mainClass: 'mfp-img-mobile',
        closeBtnInside:true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.'
		}
	});

    $('#slide-gazoo').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen',
        mainClass: 'mfp-img-mobile',
        closeBtnInside:true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.'
		}
    });
    
    $('.layer-video').magnificPopup({
		type: 'iframe',
		mainClass: 'a',
		removalDelay: 160,
        preloader: false,
        closeBtnInside:true,

		fixedContentPos: false
    });
});

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
        //setTimeout(() => {
            $('#'+nombre).slick({
                infinite: false,
                slidesToShow: 2,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 580,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('creado')
        //}, 400);
    }
    
}

var slickClose = function (nombre) {
    if($('#'+nombre).hasClass('slick-initialized')) {

        $('#'+nombre).slick('unslick');
    }
}

var slickOpen2 = function (nombre) {

    if(!($('#'+nombre).hasClass('slick-initialized'))) {
        //setTimeout(() => {
            $('#'+nombre).slick({
                infinite: false,
                slidesToShow: 1,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 580,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('creado')
        //}, 400);
    }
    
}



$(window).resize(function(e){
    if(window.innerWidth < 768) {
        slickOpen('slide-galeria');
        slickOpen2('slide-especificaciones');
        slickOpen2('slide-seguridad');
        slickOpen2('slide-colores');
        slickOpen2('slide-gazoo');

    }else{
        slickClose('slide-galeria');
        slickClose('slide-especificaciones');
        slickClose('slide-seguridad');
        slickClose('slide-colores');
        slickClose('slide-gazoo');
    }
});
