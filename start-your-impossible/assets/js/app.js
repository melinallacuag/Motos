$(function () {

  menu_mobil();

  $('header nav a').click(function () {
    var link = $(this).attr('href');
    var hheader = $('header').height();
    console.log();

    $('html, body').stop().animate({
      scrollTop: $(link).offset().top - hheader
    }, 600);

    $('.submenu').removeClass('show');

  })

  $('.videos-info .video1').click(function () {
    event.preventDefault();
    console.log('video')
  })





  $('#slider-galeria').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 900,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.slide-noticias').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    dots: false,
    arrows: true,
    initialSlide: 1,
    infinite: false,
    //draggable: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerPadding: '10%'
      }
    }]
  });

  $('.slide-disciplinas').slick({
    centerMode: true,
    centerPadding: '24%',
    slidesToShow: 1,
    dots: false,
    arrows: true,
    //infinite: false,
    //draggable: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerPadding: '15%'
      }
    }]
  });

  /*$('#slider-gladis').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  $('#slider-lucca').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('#slider-carlos').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('#slider-pedro').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('#slider-alexandra').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }]
  });*/



  $('.videos-info a').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('#slider-gladis').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('#slider-lucca').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('#slider-carlos').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('#slider-pedro').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('#slider-alexandra').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

  $('#slider-galeria').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando  #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });


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

  $('header nav span, .submenu a').click(function () {
    //$('.submenu').fadeToggle();
    $('.submenu').toggleClass('show');
  })
}