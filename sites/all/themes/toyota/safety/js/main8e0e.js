var menu = 60;

if(jQuery(window).width() < 768)
{
  menu = 50;
}

if(jQuery(window).width() >= 768 && jQuery(window).width() < 1200)
{
  menu = 140;
}

jQuery(window).resize(function(){
  menu = 60;

  if(jQuery(window).width() < 768)
  {
    menu = 50;
  }

  if(jQuery(window).width() >= 768 && jQuery(window).width() < 1200)
  {
    menu = 140;
  }
});

jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#home .swiper-container', {
      // Optional parameters
      loop: false,


    })

    jQuery("video").each(function(){
        jQuery(this).get(0).play();
    });

    jQuery('#system1 .full').on('click', function(e){
      e.preventDefault();

    });

    jQuery('.tw').on('click', function(e){
      e.preventDefault();
      tws_click(600, 500)
    });

    jQuery('.fb').on('click', function(e){
      e.preventDefault();
      fbs_click(600, 400)
    });

    jQuery('.video .play a').on('click', function(e){
      e.preventDefault();
      var video = jQuery(this).attr('href');
      loadVideo(video);
    });

    jQuery('.popup .close, .popup .bg').on('click', function(e){
      e.preventDefault();
      closeVideo();
    });

    jQuery('.conoce-mas .aqui').on('click', function(e){
      e.preventDefault();
      iraseccion("#safetysense", 1500);
    });

    jQuery('.arrow-down').on('click', function(e){
      e.preventDefault();
      iraseccion("#safetysense", 1500);
    });

    function fbs_click(width, height) {
          var url = jQuery('.fb').attr('href');
          var title = jQuery('.fb').attr('title');
          
          var leftPosition, topPosition

          leftPosition = window.screen.width / 2 - (width / 2 + 10)
          topPosition = window.screen.height / 2 - (height / 2 + 50)
          
          var windowFeatures = 'status=no,height=' + height +  ',width=' +  width + ',resizable=yes,left=' + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY=' + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no'
          
          var u = url
          var t = title
          
          window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', windowFeatures)
    }

    function tws_click(width, height) {
          var url = jQuery('.tw').attr('href');
          var title = jQuery('.tw').attr('title');
          var left = screen.width / 2 - width / 2,
              top = screen.height / 2 - height / 2,
              t = title,
              u = url
          window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u) + '%2F&via=toyota_peru','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +width + ',height=' + height + ',top=' + top + ',left=' + left )
    }

    function loadVideo(id) {
        jQuery('.popup').fadeIn(350, function(){
            jQuery(this).find('iframe').attr('src','https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080')
        })
    }

    function closeVideo() {
          jQuery('.popup').fadeOut(350, function(){
              jQuery(this).find('iframe').attr('src','')
          })
    }

    function iraseccion(id,time)
    {
        // jQuery('html, body').stop().animate({
        //     'scrollTop': jQuery(id).offset().top - menu}, time, 'swing', function () {
        // });

        jQuery.scrollTo((jQuery(id).offset().top - menu) , time);
    }

    jQuery('.main-nav ul li a').on('click', function(e){
      e.preventDefault();

      var href = $(this).attr('href');

      jQuery('.main-nav ul li a').removeClass('active');
      jQuery(this).addClass('active');

      switch(href){
        case "#inicio":
          iraseccion("#home", 1500);
          window.location.hash = "#inicio";
          jQuery('.main-nav ul li a').filter("[href='inicio']").addClass('active');
        break;
        case "#safety-sense":
          iraseccion("#safetysense", 1500);
          window.location.hash = "#safety-sense";
          jQuery('.main-nav ul li a').filter("[href='safety-sense']").addClass('active');
        break;
        case "#sistema-de-pre-colision":
          iraseccion("#pcs", 1500);
          window.location.hash = "#sistema-de-pre-colision";
          jQuery('.main-nav ul li a').filter("[href='sistema-de-pre-colision']").addClass('active');
        break;
        case "#sistema-de-cambio-de-carril":
          iraseccion("#lda", 1500);
          window.location.hash = "#sistema-de-cambio-de-carril";
          jQuery('.main-nav ul li a').filter("[href='sistema-de-cambio-de-carril']").addClass('active');
        break;
        case "#sistema-de-luces-altas-automaticas":
          iraseccion("#ahb", 1500);
          window.location.hash = "#sistema-de-luces-altas-automaticas";
          jQuery('.main-nav ul li a').filter("[href='sistema-de-luces-altas-automaticas']").addClass('active');
        break;
        case "#control-de-velocidad-crucero-adaptativo":
          iraseccion("#acc", 1500);
          window.location.hash = "#control-de-velocidad-crucero-adaptativo";
          jQuery('.main-nav ul li a').filter("[href='control-de-velocidad-crucero-adaptativo']").addClass('active');
        break;
        case "#dispositivos-para-ayudar-al-conductor":
          iraseccion("#devices", 1500);
          window.location.hash = "#dispositivos-para-ayudar-al-conductor";
          jQuery('.main-nav ul li a').filter("[href='dispositivos-para-ayudar-al-conductor']").addClass('active');
        break;
        case "#posventa":
          iraseccion("#postventa", 1500);
          window.location.hash = "#posventa";
          jQuery('.main-nav ul li a').filter("[href='posventa']").addClass('active');
        break;
      }

    });

    switch(window.location.hash){
      case "":
        //iraseccion("#home", 1500);
        jQuery('.main-nav ul li a').filter("[href='#inicio']").addClass('active');
      break;
      case "/seguridad/":
        window.location.href = "/seguridad/";
      break;
      case "#inicio":
        iraseccion("#home", 1500);
        jQuery('.main-nav ul li a').filter("[href='#inicio']").addClass('active');
      break;
      case "#safety-sense":
        iraseccion("#safetysense", 1500);
        jQuery('.main-nav ul li a').filter("[href='#safety-sense']").addClass('active');
      break;
      case "#sistema-de-pre-colision":
        iraseccion("#pcs", 1500);
        jQuery('.main-nav ul li a').filter("[href='#sistema-de-pre-colision']").addClass('active');
      break;
      case "#sistema-de-cambio-de-carril":
        iraseccion("#lda", 1500);
        jQuery('.main-nav ul li a').filter("[href='#sistema-de-cambio-de-carril']").addClass('active');
      break;
      case "#sistema-de-luces-altas-automaticas":
        iraseccion("#ahb", 1500);
        jQuery('.main-nav ul li a').filter("[href='#sistema-de-luces-altas-automaticas']").addClass('active');
      break;
      case "#control-de-velocidad-crucero-adaptativo":
        iraseccion("#acc", 1500);
        jQuery('.main-nav ul li a').filter("[href='#control-de-velocidad-crucero-adaptativo']").addClass('active');
      break;
      case "#dispositivos-para-ayudar-al-conductor":
        iraseccion("#devices", 1500);
        jQuery('.main-nav ul li a').filter("[href='#dispositivos-para-ayudar-al-conductor']").addClass('active');
      break;
      case "#posventa":
        iraseccion("#postventa", 1500);
        jQuery('.main-nav ul li a').filter("[href='#posventa']").addClass('active');
      break;
    }
  });