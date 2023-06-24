var imagesList = [
    'assets/img/ico-menu-bluefact.png',
    'assets/img/ico-menu-home.png',
    'assets/img/ico-menu-hybrids.png',
    'assets/img/home/bg-fondo-home1.jpg',
    'assets/img/home/bg-fondo-home1-m.jpg',
    'assets/img/home/bg-fondo-home-a.png',
    'assets/img/home/bg-fondo-home-b.png',
    'assets/img/home/hybrid-synergy-drive.png',
    'assets/img/home/palanca-cambios-hibrido.png',
    'assets/img/hibrids/bg-slide1.jpg',
    'assets/img/hibrids/bg-slide1-m.jpg',
];

$(function () {

    var loader = new PxLoader();

    for (var pos in imagesList) {
        var pxImage = new PxLoaderImage(imagesList[pos]);
        loader.add(pxImage);
    }

    loader.addProgressListener(function (e) {
        var percentage = Math.ceil((e.completedCount / e.totalCount) * 100);
    });

    loader.addCompletionListener(function () {
        $(".overlay").fadeOut(400, function () {
            $("body").removeClass("block");
        });

        /* direct */
        if (window.location.href.indexOf("prius-meet-the-hybrids") > -1) {
            //console.log('priuss')
            $(' #conocelos .home').fadeOut();
            $.fn.fullpage.silentMoveTo(1, 0);
        }
        if (window.location.href.indexOf("priusc-meet-the-hybrids") > -1) {
            //console.log('cccc')
            $(' #conocelos .home').fadeOut();
            $.fn.fullpage.silentMoveTo(1, 1);
        }

    });

    loader.start();

    $('.rav4spec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.corollacrossspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.priusspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.priuscspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.corollahspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.corollaspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });
    $('.chrspec').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Cargando imagen...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">La imagen</a> No pudo ser cargada.'
        }
    });

    /* animaciones fondos */
    var scene = $('#fondo-home').get(0);
    var parallax = new Parallax(scene);

    var scene2 = $('#f-slide1').get(0);
    var parallax = new Parallax(scene2);
    var scene3 = $('#f-slide2').get(0);
    var parallax = new Parallax(scene3);
    var scene4 = $('#f-slide3').get(0);
    var parallax = new Parallax(scene4);

    var scene5 = $('#f-bfact').get(0);
    var parallax = new Parallax(scene5);
    //var scene6 = $('#f-fact').get(0);
    //var parallax = new Parallax(scene6);

    /*var aniSlide2 = document.getElementById('f-slide2');
    var parallaxS1 = new Parallax(aniSlide2);
    var aniSlide3 = document.getElementById('f-slide3');
    var parallaxS1 = new Parallax(aniSlide3);*/

    /*var aniHome = document.getElementById('fondo-home');
    var parallax = new Parallax(aniHome);*/

    //--------------------------


    if ($('.btn-mobile').is(":visible")) {
        menu_mobil();
    }

    preguntas();

    $('#wrapper').fullpage({
        menu: '#menu0',
        //anchors:['home', 'hybrid', 'bluefact', 'preguntas', 'conocelos'],
        //navigation: true,
        navigationPosition: 'left',
        responsiveWidth: 768,
        scrollBar: true,
        slidesNavigation: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            if (index == 1) {
                $('header a').removeClass('activo2');
                $('header .home a').addClass('activo2');
            } else if (index == 2) {
                $('header a').removeClass('activo2');
                $('header .hybrid a').addClass('activo2');
            } else if (index == 3) {
                $('header a').removeClass('activo2');
                $('header .bluefact a').addClass('activo2');
            } else if (index == 4 || index < 0) {
                $('header a').removeClass('activo2');
                $('header .bluefact a').addClass('activo2');
            } else if (index == 5 || index < 0) {
                $('header a').removeClass('activo2');
                $('header .conocelos a').addClass('activo2');
            } else if (index > 5 || index < 0) {
                $('header a').removeClass('activo2');
            }

        }
    });

    /*var slider =  $('.slide-video').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $('.slick-current');
        current.html(current.html());
    });*/


    /*boton siguiente*/

    $('header .home a, #home-menu .btn-nextpage').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 0);
    });

    $('header .conocelos a, #conocelos .btn-nextpage').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(3, 0);
    });

    $('header .hybrid a, #home .btn-nextpage').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(4, 0);
    });

    $('header .testdrive a, #hybrid .btn-nextpage').click(function (e) {
        e.preventDefault();

        //window.open('https://www.toyotaperu.com.pe/prueba-de-manejo/', '_blank');
        $.fn.fullpage.moveTo(5, 0);
    });

    $('header .bluefact a, #drive-challenge .btn-nextpage').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(5, 0);
    });

    $('header .historia a').click(function (e) {
        e.preventDefault();

        window.open('historia-de-la-tecnologia-hibrida.html', '_self');
    });

    $('header .preguntas a, #bluefact .btn-nextpage ').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(6, 0);
    });

    $('header .noticias a').click(function (e) {
        e.preventDefault();

        window.open('https://www.toyotaperu.com.pe/hybridexperience/', '_blank');
    });



    /* seccion conocelos*/
    /*$(' .item-slide .btn-chr').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 0);
    });*/

    $(' .item-slide .btn-corollacross').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 0);
    });
    $(' .item-slide .btn-rav4').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 1);
    });

    $(' .item-slide .btn-prius').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 2);
    });
    $(' .item-slide .btn-prius-c').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 3);
    });

    $(' .item-slide .btn-corolla').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 4);
    });
    /*$(' .item-slide .btn-corollah').click(function (e) {
        e.preventDefault();

        $.fn.fullpage.moveTo(2, 6);
    });*/

    

    /*---home conocelos*/
    $('.btn-homeslide').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeIn();
        $.fn.fullpage.silentMoveTo(2, 0);
    });

    /*$('.h-chr').click(function (e) {
        e.preventDefault();
        console.log('chrrrrrrrrrrrrr');
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 0);
    });*/

    $('.h-corollacross').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 0);
    });

    $('.h-rav4').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 1);
    });

    $('.h-prius').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 2);
    });
    $('.h-prius-c').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 3);
    });
    $('.h-corolla').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 4);
    });
    /*$('.h-corollah').click(function (e) {
        e.preventDefault();
        $(' #conocelos .home').fadeOut();
        $.fn.fullpage.silentMoveTo(2, 6);
    });*/

    //rav4medios


    var url = window.location.href;


    if (url.includes('/c-hr-hybrid')) {
        $(".h-chr").trigger("click");
        
    }

    if (url.includes('#meet-the-hybrids/')) {
        $(' #conocelos .home').fadeOut();
    }

    /*  compartir */
    $(' a.facebook').click(function (e) {
        e.preventDefault();

        FB.ui({
            method: 'share',
            href: 'http://www.goblue.pe/',
            mobile_iframe: 'true',
        })
    });


    var sliderspec = $('.slide-spec').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 5000,
        touchMove: false,
        swipe: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                dots: true
            }
        }]
    });



    var urlvideo = 'BEzWfAO2-_Y';


    $('.slide-video').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        dots: true,
        arrows: true,
        draggable: false,
        initialSlide:1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }]
    });

    $('.slide-video').on('afterChange', function (event, slick, currentSlide) {

        var urlvideo = $(slick.$slides[currentSlide]).find('.play').data('video');

        console.log(urlvideo + ' - ' + currentSlide);
        sharevideo('https://www.youtube.com/watch?v=' + urlvideo);

    });




    function sharevideo(videocompartir) {
        $("#share").jsSocials({
            url: videocompartir,
            text: "Google Search Page",
            showLabel: false,
            showCount: false,
            shares: [{
                share: "facebook",
                logo: "assets/img/share-facebook.png"
            }, {
                share: "twitter",
                logo: "assets/img/share-twitter.png"
            }]
        });
    }

    sharevideo('https://www.youtube.com/watch?v=' + urlvideo);


    var player = undefined;
    $(".slide-video .play").click(function (e) {
        //e.preventDefault();
        var currentSlide = $(this).parent().parent();
        var videourl = $(this).data("video");
        urlvideo == videourl;
        var videoid = $(this).data("video-id");


        /* remove  */
        $(".slide-video li").removeClass('activevideo');
        //$(this).parent().parent().siblings().find('.video iframe').remove();
        if (typeof player != 'undefined') {
            player.destroy();
        }
        /*-----*/

        currentSlide.addClass('activevideo');


        var slideIndex = $(this).parent().parent().data("slick-index");
        console.log(slideIndex);
        $('.slide-video').slick('slickGoTo', parseInt(slideIndex));


        setTimeout(function () {
            player = new YT.Player(videoid, {
                height: '360',
                width: '640',
                videoId: videourl,
                events: {
                    'onReady': onPlayerReady,
                    //'onStateChange': onPlayerStateChange
                }
            });
        }, 300)


    });




    function onPlayerReady(event) {
        event.target.playVideo();
    }



    /*particles */

    particlesJS.load('toyota-footer', 'assets/plugins/particles/footer-config.json', function () {
        console.log('callback - particles.js config loaded');
    });


});

var menu_mobil = function () {

    $('.btn-mobile, header nav a').click(function () {
        console.log('mobile');
        $('nav').css('display', 'block');
        $('nav').toggleClass('open');
        $('.btn-mobile .close').toggleClass('activo');
        $('body').toggleClass('block');
    })

}

var preguntas = function () {
    $(".content-preguntas .pregunta").click(function () {
        if (!($(this).parent().hasClass("activo"))) {
            $(".content-preguntas .item-preg").removeClass('activo');
            $(".content-preguntas .respuesta").slideUp(300);
            $(this).parent().toggleClass('activo');
            $(this).parent().find('.respuesta').slideToggle();
        } else {
            $(".content-preguntas .item-preg").removeClass('activo');
            $(this).parent().find('.respuesta').slideToggle();
        }
    })
}