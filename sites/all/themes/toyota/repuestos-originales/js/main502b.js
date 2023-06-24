var altmenu = 60;

if(jQuery(window).width() < 768)
{
  altmenu = 50;
}

if(jQuery(window).width() >= 768 && jQuery(window).width() < 1200)
{
  altmenu = 140;
}


jQuery(document).ready(function($){

    jQuery('.lista-mini-video').slick({
        dots: false,
        arrows: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        verticalSwiping: true,
    });

    jQuery(".lista-mini-video .item-mini-imagen").click(function(){
        jQuery(".lista-mini-video .item-mini-imagen").removeClass("active");
        jQuery(".reproductor-video").removeClass("active");
        jQuery(this).addClass("active");
        var id = jQuery(this).data("orden");
        jQuery(".reproductor-video").eq(id).addClass("active");

    })


    tippy('[data-tippy-content]');

    var currentTab = "pastillas";
    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            
            h.click();

            var sel = jQuery('#sel_repuesto').val();
            currentTab = sel;
            jQuery('.page').hide();
            //jQuery('.page').fadeOut(350, function(){
              jQuery('#'+sel).fadeIn(350);
              jQuery('.tit').addClass('hidden');
              jQuery('.tit_'+sel).removeClass('hidden');
            //});

        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }


    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);

    var scroll = false;
    jQuery('.slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      centerPadding: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    });


    jQuery('.logo a').on('click', function(e){
      e.preventDefault();
      jQuery.scrollTo( (jQuery('#inicio').offset().top - altmenu) , 1000);
    });

    jQuery('#main #links .menu').each(function(index, value){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        switch(index){
          case 0:
          jQuery.scrollTo( (jQuery('#main #inicio').offset().top - altmenu) , 1000);
          //window.location.hash = '#inicio';
          break;
          case 1:
          jQuery.scrollTo( (jQuery('#main #beneficios').offset().top - altmenu) , 1000);
          //window.location.hash = '#beneficios';
          break;
          case 2:
          jQuery.scrollTo( (jQuery('#main #tabla-de-prevencion').offset().top - altmenu) , 1000);
          //window.location.hash = '#tabla-de-prevencion';
          break;
          case 3:
          jQuery.scrollTo( (jQuery('#main #centros').offset().top - altmenu) , 1000);
          //window.location.hash = '#centros-de-atencion';
          break;
        }
      });
    });

    jQuery(window).on('load', function(){
          var myVar;
        //setTimeout(function(){
          myVar = setInterval(function(){
              if(jQuery("#main .bootstrap-select").length > 0)
              {
                jQuery("#main .bootstrap-select").removeClass("bootstrap-select btn-group");
                jQuery("#main .bootstrap-select .dropdown-menu").remove();
                jQuery("#main .bootstrap-select .dropdown-toggle").remove();
                jQuery("#main .pulldown .dropdown-menu").remove();
                jQuery("#main .pulldown .dropdown-toggle").remove();
                clearInterval(myVar);
              }
              
          }, 1200);
       // },1200);

        jQuery('#loader').fadeOut(500, function(){
          var hash = window.location.hash;
          switch(hash){
            case '#inicio':
              jQuery.scrollTo( (jQuery('#main #inicio').offset().top - menu) , 1000);
              window.location.hash = '#inicio';
            break;
            case '#beneficios':
              jQuery.scrollTo( (jQuery('#main #beneficios').offset().top - menu) , 1000, { onAfter: function(){ 
              window.location.hash = '#beneficios'; } });
            break;
            case '#tabla-de-prevencion':
              jQuery.scrollTo( (jQuery('#main #tabla-de-prevencion').offset().top - menu) , 1000, { onAfter: function(){ 
              window.location.hash = '#tabla-de-prevencion'; } });
            break;
            case '#centros-de-atencion':
              jQuery.scrollTo( (jQuery('#main #centros').offset().top - menu) , 1000);
              window.location.hash = '#centros-de-atencion';
            break;
          }
          Timeline();
        });
    });

    function Timeline(){
      jQuery('#menu').addClass('toRight');
      jQuery('.busca-concesionario').addClass('toLeft');
      jQuery('#inicio .item1 .info').addClass('fade-in-2');
      
      jQuery(window).on('scroll', function(){
        if(jQuery(window).scrollTop()<=0){
          window.location.hash = '#inicio';  
        }
      });

      jQuery('#beneficios').waypoint({
        handler: function(direction) {
          jQuery('#conoce .txt1, #conoce .txt2, #conoce .pic, #conoce .txt3').removeClass('final');
        },
        offset: '40%'
      });

      jQuery('#beneficios').waypoint({
        handler: function(direction) {
          window.location.hash = '#beneficios';
        },
        offset: '0%'
      });

      jQuery('#tabla-de-prevencion').waypoint({
        handler: function(direction) {
          window.location.hash = '#tabla-de-prevencion';
        },
        offset: '0%'
      });

      jQuery('#conoce').waypoint({
        handler: function(direction) {
          jQuery('#conoce .txt1, #conoce .txt2').addClass('final');
          jQuery('#conoce .pic img, #conoce .txt3 img').removeClass('final');
        },
        offset: '20%'
      });

      jQuery('#conoce .pic').waypoint({
        handler: function(direction) {
          jQuery('#conoce .pic img, #conoce .txt3 img').addClass('final');
          jQuery('#centros .txt, #centros .right img').removeClass('fade-in-2');
        },
        offset: '40%'
      });

      jQuery('#centros').waypoint({
        handler: function(direction) {
          jQuery('#centros .txt, #centros .right img').addClass('fade-in-2');
        },
        offset: '80%'
      });

      jQuery('#centros').waypoint({
        handler: function(direction) {
          window.location.hash = '#centros-de-atencion';
        },
        offset: '0%'
      });

      jQuery('.btn-beneficios').on('click', function(e){
        e.preventDefault();

        jQuery('#conoce .info').fadeOut(350, function(){
          jQuery('#conoce .interna').fadeIn(350);
          jQuery.scrollTo( (jQuery('#conoce .interna').offset().top - 66) , 1000);
        });
      });
    }

    jQuery(window).on('resize', function(){
      if(jQuery(window).width()>=991){
       //jQuery('.item1, .item2, .item3').show();
      } else {
       // jQuery('.item1, .item2, .item3').show();
      }
    });

    jQuery('.back').on('click', function(e){
      e.preventDefault();
      jQuery('#conoce .interna').fadeOut(350, function(){
        jQuery('#conoce .info').fadeIn(350);
        jQuery.scrollTo( (jQuery('#conoce .info').offset().top - 66) , 1000);
      });
    });

    jQuery(".pulldown select").each(function (i, e) {
      var $pull = jQuery(this);
      $pull.change(function () {
          $pull.parent().children("div.txtpull").text($pull.children(":selected").text());
      });
    });

    jQuery('#sel_repsuesto_mob').change(function(){
      var sel = jQuery('#sel_repsuesto_mob').val();
      currentTab = sel;
      jQuery('.page').hide();
      jQuery('#'+sel).fadeIn(350);
      jQuery('.tit').addClass('hidden');
      jQuery('.tit_'+sel).removeClass('hidden');
      jQuery('.pic-mob').removeClass('d-block').addClass('hidden');
      jQuery('.pic-'+currentTab).removeClass('hidden').addClass('d-block');
      jQuery('#' + currentTab + ' .left').removeClass('hidden-mob').addClass('d-block');
      jQuery('#' + currentTab + ' .right').addClass('hidden-mob').removeClass('d-block');
      jQuery('#conoce .interna .tabs').removeClass('gris');
      jQuery('#conoce .interna .foto').removeClass('gris');
      jQuery('#conoce .interna .tabs').addClass('rojo');
      jQuery('#conoce .interna .foto').addClass('rojo');
      jQuery('.block2 .bottom-right').removeClass('d-block').addClass('hidden-mob');
      jQuery('.block2 .bottom-left').removeClass('hidden-mob').addClass('d-block');
      jQuery('#conoce .interna .tabs a').removeClass('active');
      jQuery('#conoce .interna .tabs a:eq(0)').addClass('active');
    });

    jQuery('#conoce .interna .tabs a').each(function(index, val){
      
      jQuery(this).on('click', function(e){
        e.preventDefault();
        var href = jQuery(this).attr('href');

        jQuery('#conoce .interna .tabs a').removeClass('active');
        jQuery(this).addClass('active');
        
        if(href=='#falsificado'){
          jQuery('#' + currentTab + ' .left').addClass('hidden-mob').removeClass('d-block');
          jQuery('#' + currentTab + ' .right').removeClass('hidden-mob').addClass('d-block');
          jQuery('#conoce .interna .tabs').removeClass('rojo').addClass('gris');
          jQuery('#conoce .interna .foto').removeClass('rojo').addClass('gris');
          jQuery('.block2 .bottom-right').removeClass('hidden-mob').addClass('d-block');
          jQuery('.block2 .bottom-left').removeClass('d-block').addClass('hidden-mob');
        } else {
          jQuery('#' + currentTab + ' .left').removeClass('hidden-mob').addClass('d-block');
          jQuery('#' + currentTab + ' .right').addClass('hidden-mob').removeClass('d-block');
          jQuery('#conoce .interna .tabs').removeClass('gris');
          jQuery('#conoce .interna .foto').removeClass('gris');
          jQuery('#conoce .interna .tabs').addClass('rojo');
          jQuery('#conoce .interna .foto').addClass('rojo');
          jQuery('.block2 .bottom-right').removeClass('d-block').addClass('hidden-mob');
          jQuery('.block2 .bottom-left').removeClass('hidden-mob').addClass('d-block');
        }
        
      });
    });


    var openmenu = false;
    jQuery('.header .burger').each(function(index, val){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        if(openmenu){
          jQuery('nav.mobile').fadeOut(350);
          openmenu = false;
        }else{
          jQuery('nav.mobile').fadeIn(350);
          openmenu = true;
        }
      });
    });

    jQuery('nav.mobile ul li a').each(function(index, val){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        jQuery('nav.mobile').fadeOut(350);
        openmenu = false;
        switch(index){
          case 0:
          jQuery.scrollTo( (jQuery('#inicio').offset().top - 66) , 1000);
          window.location.hash = '#inicio';
          break;
          case 1:
          jQuery.scrollTo( (jQuery('#beneficios').offset().top - 66) , 1000);
          window.location.hash = '#beneficios';
          break;
          case 2:
          window.location.hash = '#centros-de-atencion';
          jQuery.scrollTo( (jQuery('#centros').offset().top - 66) , 1000);
          break;
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline1 .car .txt1').show();

    function carPostiion(currentCar, num, time){
        jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').removeClass('prelast');
        jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').removeClass('last');
        jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt').hide();
        
      switch(currentCar){
          case 0:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt1').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '.5%'}, time);
          break;
          case 1:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt2').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '8.2%'}, time);
          break;
          case 2:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt3').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '15.65%'}, time);
          break;
          case 3:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt4').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '23.3%'}, time);
          break;
          case 4:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt5').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '30.95%'}, time);
          break;
          case 5:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt6').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '38.6%'}, time);
          break;
          case 6:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt7').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '46.2%'}, time);
          break;
          case 7:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt8').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '53.8%'}, time);
          break;
          case 8:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt9').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '61.2%'}, time);
          break;
          case 9:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt10').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '68.8%'}, time);
          break;
          case 10:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt11').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').animate({left: '0'}, 500);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '76.35%'}, time);
          break;
          case 11:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt12').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').addClass('prelast').animate({left: '-150%'}, time);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '83.95%'}, time);
          break;
          case 12:
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .txt13').show();
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car .info').addClass('last').animate({left: '-150%'}, time);
            jQuery('#tabla-de-prevencion .timeline' + num + ' .car').animate({left: '91.55%'}, time);         
          break;
        }
    }

    var currentCar1 = 0;
    var currentCar2 = 0;
    var currentCar3 = 0;
    var currentItem = 0;
    var currentTime = 1;

    jQuery('#tabla-de-prevencion .arrow-right').on('click', function(e){
      e.preventDefault();
      if(currentItem<2){
        currentItem++;
        currentTime = currentItem;
        jQuery('#tabla-de-prevencion .items').animate({'left': ( '-' + parseInt(currentItem*100) + '%')}, 1000);
      }        
    });

    jQuery('#tabla-de-prevencion .arrow-left').on('click', function(e){
      e.preventDefault();
      if(currentItem>0){
        currentItem--;
        currentTime = currentItem;
        jQuery('#tabla-de-prevencion .items').animate({'left': ( '-' + parseInt(currentItem*100) + '%')}, 1000);
      }
    });

    var openDetail1 = false;
    var openDetail2 = false;
    var openDetail3 = false;

    jQuery('#tabla-de-prevencion .timeline1 .block').each(function(index, val){
      jQuery(this).on('click', function(e){
        e.preventDefault();

        if(currentTime!=1){
          jQuery('#tabla-de-prevencion .timeline2 .car, #tabla-de-prevencion .timeline3 .car').hide();
          carPostiion(index, 1, 0);
        }
        jQuery('#tabla-de-prevencion .timeline2 .detalle-content, #tabla-de-prevencion .timeline3 .detalle-content').hide();
        openDetail2 = false;
        openDetail3 = false;

        for(var i=1; i<=3; i++){
          if(i!=1){
            jQuery('#tabla-de-prevencion .timeline' + i + ' .car').hide();
          }
        }

        currentTime = 1;
        currentCar1 = index;
        jQuery('#tabla-de-prevencion .timeline' + currentTime + ' .car').fadeIn(350);
        
        carPostiion(index, 1, 1000);
        
        if(openDetail1){
          var actual = parseInt(index+1);
          jQuery('.timeline1 .detalle').hide();
          jQuery('.timeline1 .detalle' + actual).fadeIn(350);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline2 .block').each(function(index, val){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        
        if(currentTime!=2){
         jQuery('#tabla-de-prevencion .timeline1 .car, #tabla-de-prevencion .timeline3 .car').hide();
          carPostiion(index, 2, 0);
        }
        jQuery('#tabla-de-prevencion .timeline1 .detalle-content, #tabla-de-prevencion .timeline3 .detalle-content').hide();
        openDetail1 = false;
        openDetail3 = false;
        currentTime = 2;
        jQuery('#tabla-de-prevencion .timeline' + currentTime + ' .car').fadeIn(350);
        currentCar2 = index;
        carPostiion(index, 2, 1000);
        if(openDetail2){
          var actual = parseInt(index+1);
          jQuery('.timeline2 .detalle').hide();
          jQuery('.timeline2 .detalle' + actual).fadeIn(350);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline3 .block').each(function(index, val){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        
        if(currentTime!=3){
         jQuery('#tabla-de-prevencion .timeline1 .car, #tabla-de-prevencion .timeline2 .car').hide();
          carPostiion(index, 3, 0);
        }
        jQuery('#tabla-de-prevencion .timeline1 .detalle-content, #tabla-de-prevencion .timeline2 .detalle-content').hide();
        openDetail1 = false;
        openDetail2 = false;
        currentTime = 3;
        jQuery('#tabla-de-prevencion .timeline' + currentTime + ' .car').fadeIn(350);
        currentCar3 = index;
        carPostiion(index, 3, 1000);
        if(openDetail3){
          var actual = parseInt(index+1);
          jQuery('.timeline3 .detalle').hide();
          jQuery('.timeline3 .detalle' + actual).fadeIn(350);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline1 .ver-detalle').each(function(index, value){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        if(!openDetail1){
            openDetail1 = true;
            var actual = parseInt(currentCar1+1);
            jQuery('#tabla-de-prevencion .timeline1 .detalle-content').show()
            jQuery('.timeline1 .detalle').hide();
            jQuery('.timeline1 .detalle' + actual).show();
            jQuery('.timeline1 .detalle' + actual + ' .content').animate({'opacity': 1}, 500);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline2 .ver-detalle').each(function(index, value){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        if(!openDetail2){
            openDetail2 = true;
            var actual = parseInt(currentCar2+1);
            jQuery('#tabla-de-prevencion .timeline2 .detalle-content').show()
            jQuery('.timeline2 .detalle').hide();
            jQuery('.timeline2 .detalle' + actual).show();
            jQuery('.timeline2 .detalle' + actual + ' .content').animate({'opacity': 1}, 500);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline3 .ver-detalle').each(function(index, value){
      jQuery(this).on('click', function(e){
        e.preventDefault();
        if(!openDetail3){
            openDetail3 = true;
            var actual = parseInt(currentCar3+1);
            jQuery('#tabla-de-prevencion .timeline3 .detalle-content').show()
            jQuery('.timeline3 .detalle').hide();
            jQuery('.timeline3 .detalle' + actual).show();
            jQuery('.timeline3 .detalle' + actual + ' .content').animate({'opacity': 1}, 500);
        }
      });
    });

    jQuery('#tabla-de-prevencion .timeline1 .detalle-content .close').on('click', function(e){
      e.preventDefault();
      jQuery('#tabla-de-prevencion .timeline1 .detalle-content').fadeOut(350);
      openDetail1 = false;
    });

    jQuery('#tabla-de-prevencion .timeline2 .detalle-content .close').on('click', function(e){
      e.preventDefault();
      jQuery('#tabla-de-prevencion .timeline2 .detalle-content').fadeOut(350);
      openDetail2 = false;
    });

    jQuery('#tabla-de-prevencion .timeline3 .detalle-content .close').on('click', function(e){
      e.preventDefault();
      jQuery('#tabla-de-prevencion .timeline3 .detalle-content').fadeOut(350);
      openDetail3 = false;
    });
    
    var currentDetalle = 0;
    jQuery('#sel_detalle_mob').change(function(){
      var sel = jQuery(this).val();
      
      currentDetalle = parseInt(sel);
      jQuery('.timeline .detalle').hide();
      jQuery('#num').html('').html(sel);

      if(currentDetalle <= 60000){
        
        //jQuery('.item2 .detalle-content, .item3 .detalle-content, .timeline2 .detalle, .timeline3 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item2 .detalle-content').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item3 .detalle-content').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.timeline2 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.timeline3 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item2, .item3').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item1, .item1 .detalle-content').removeClass('mobile-hidden').addClass('mobile-show');
      }

      if(currentDetalle > 60000 && currentDetalle <= 125000){
        jQuery('.item1 .detalle-content').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item3 .detalle-content').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.timeline1 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.timeline3 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item1, .item3').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item2, .item2 .detalle-content').removeClass('mobile-hidden').addClass('mobile-show');
      }

      if(currentDetalle >= 130000){
        jQuery('.item1 .detalle-content, .item2 .detalle-content, .timeline1 .detalle, .timeline2 .detalle').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item1, .item2').removeClass('mobile-show').addClass('mobile-hidden');
        jQuery('.item3, .item3 .detalle-content').removeClass('mobile-hidden').addClass('mobile-show');
      }

      switch (sel) {
        case '1000':
          jQuery('.item1 .detalle-content .detalle1').show();
          break;
        case '5000':
            jQuery('.timeline1 .detalle2').show();
            break;
        case '10000':
            jQuery('.timeline1 .detalle3').show();
            break;
        case '15000':
            jQuery('.timeline1 .detalle4').show();
            break;
        case '20000':
            jQuery('.timeline1 .detalle5').show();
            break;
        case '25000':
            jQuery('.timeline1 .detalle6').show();
            break;
        case '30000':
            jQuery('.timeline1 .detalle7').show();
            break;
        case '35000':
            jQuery('.timeline1 .detalle8').show();
            break;
        case '40000':
            jQuery('.timeline1 .detalle9').show();
            break;
         case '45000':
            jQuery('.timeline1 .detalle10').show();
            break;
          case '50000':
              jQuery('.timeline1 .detalle11').show();
              break;
          case '55000':
              jQuery('.timeline1 .detalle12').show();
              break;
          case '60000':
              jQuery('.timeline1 .detalle13').show();
              break;
          case '65000':
              jQuery('.item2 .detalle-content, .timeline2 .detalle1').show();
              break;
          case '70000':
              jQuery('.timeline2 .detalle2').show();
              break;
          case '75000':
              jQuery('.timeline2 .detalle3').show();
              break;
          case '80000':
              jQuery('.timeline2 .detalle4').show();
              break;
          case '85000':
              jQuery('.timeline2 .detalle5').show();
              break;
          case '90000':
              jQuery('.timeline2 .detalle6').show();
              break;
          case '95000':
              jQuery('.timeline2 .detalle7').show();
              break;
          case '100000':
              jQuery('.timeline2 .detalle8').show();
              break;
          case '105000':
              jQuery('.timeline2 .detalle9').show();
              break;
          case '110000':
              jQuery('.timeline2 .detalle10').show();
              break;
          case '115000':
              jQuery('.timeline2 .detalle11').show();
              break;
          case '120000':
              jQuery('.timeline2 .detalle12').show();
              break;
          case '125000':
              jQuery('.timeline2 .detalle13').show();
              break;
          case '130000':
              jQuery('.timeline3 .detalle1').show();
              break;
          case '135000':
              jQuery('.timeline3 .detalle2').show();
              break;
          case '140000':
              jQuery('.timeline3 .detalle3').show();
              break;
          case '145000':
              jQuery('.timeline3 .detalle4').show();
              break;
          case '150000':
              jQuery('.timeline3 .detalle5').show();
              break;
        default:
          break;
      }
    });
});  