var objeto_carros = [
{nombre:'ABS',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>ABS</span></h2>',
descripcion:'<h2>Asistencia antibloqueo de ruedas</h2><ul><li>Con esta función de tu vehículo Toyota, al realizar un frenado de emergencia, las ruedas de tu auto evitarán bloquearse y eludirán una situación de riesgo.</li> <li>Además, podrás tener un mayor control del vehículo, evitando cualquier obstáculo y manteniendo la dirección, para frenar de manera adecuada.</li></ul>',
imagen:'abs.jpg',url:false,autos:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},
{nombre:'EBD',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>EBD</span></h2>',
descripcion:'<h2>Distribución electrónica de frenado</h2><ul><li>Este es un sistema añadido al ABS (Sistema de frenos antibloqueo), que permite distribuir de forma apropiada la fuerza de frenado.</li> <li>Es decir, te ayudará a mantener el equilibrio del auto ante cualquier inconveniente para un frenado más seguro.</li></ul>',
imagen:'seguridad/img/ebd.jpg',url:false,autos:[0,2,3,4,5,7,8,10,11,12,13,14,15]},
{nombre:'BA',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>BA</span></h2>',
descripcion:'<h2>Potencia en frenado de emergencia</h2><ul><li>Con este sistema, los conductores que no puedan presionar el pedal de freno con la fuerza necesaria, tendrán un apoyo de frenado adicional.</li> <li>Así evitarás cualquier accidente en la vía, además de protegerte junto a tus pasajeros.</li></ul>',
imagen:'seguridad/img/ba.jpg',url:false,autos:[0,3,4,5,7,8,9,10,11,12,13,14,17]},
{nombre:'VSC',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>VSC</span></h2>',
descripcion:'<h2>Asistencia de estabilidad vehicular</h2><ul><li>Al ingresar a las curvas o en carreteras resbaladizas, este sistema se activa para brindarte mayor estabilidad.</li> <li>Te ayudará a mantener el control del vehículo y poder trasladarte de la manera más óptima y segura.</li></ul>',
imagen:'seguridad/img/vsc.jpg',url:false,autos:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},
{nombre:'HAC',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>HAC</span></h2>',
descripcion:'<h2>Control de pendientes</h2> <ul><li>Este sistema está diseñado para reducir el riesgo que tiene tu vehículo de irse hacia atrás en pendientes ascendentes.</li> <li>Te brinda un control más seguro, para evitar choques con los vehículos atrás de ti. </li></ul>',
imagen:'hac.jpg',url:false,autos:[0,3,4,5,7,8,9,10,13,14,15,16,17]},
{nombre:'DAC',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br><span>DAC</span></h2>',
descripcion:'<h2>Control de descenso</h2> <ul><li>En vías descendientes, este sistema mantiene el vehículo estable y seguro para que tú puedas tener un mayor control del vehículo.</li> <li>Facilitándote un descenso sin problemas y evitando cualquier inconveniente con otros autos.</li></ul>',
imagen:'seguridad/img/dac.jpg',url:false,autos:[0,8,11,14]},
{nombre:'TRC',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br> <span>TRC</span></h2>',
descripcion:'<h2>Control de tracción</h2> <ul><li>Ante vías que puedan generar un bloqueo en tus llantas, el TRC se activará para poder equilibrar la potencia y darte un mayor control de tu vehículo.</li> <li>Los sensores de este control de tracción te permitirán no detenerte en las vías y viajar con confianza.</li></ul>',
imagen:'seguridad/img/trc.jpg',url:false,autos:[3,7,8,9,10,11,12,13,14]},
{nombre:'A-TRC',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br> <span>A-TRC</span></h2>',
descripcion:'<h2>Control de tracción todo terreno</h2> <ul><li>Controla la presión del frenado en cada rueda al acelerar en condiciones 4x4, evitando el deslizamiento de ruedas.</li> <li>También te asiste en subidas y pendientes, para una performance de viaje más óptima.</li></ul>',
imagen:'seguridad/img/atrc.jpg',url:false,autos:[0,7,8,10,11]},
{nombre:'CRAWL',titulo:'<h2>SEGURIDAD<br>DE PREVENCIÓN<br> <span>CRAWL</span></h2>',
descripcion:'<h2>CRAWL</h2> <ul><li>Diseñado para condiciones extremas de baja velocidad fuera de carretera.</li> <li>Crawl Control reduce su entrada en la conducción fuera de carretera al controlar el acelerador y los frenos por usted.</li></ul>',
imagen:'seguridad/img/crawl.jpg',url:false,autos:[7,11]},
{nombre:'GOA',titulo:'<h2>SEGURIDAD<br>DE PROTECCIÓN<br> <span>GOA</span></h2>',
descripcion:'<h2>Carrocería de seguridad en colisiones</h2> <ul><li>Los vehículos Toyota están equipados con un sistema de deformación programada y absorción de impactos que brinda tranquilidad en la conducción del mismo.</li> <li>Tanto en colisiones frontales, laterales y traseras, el sistema GOA aboserve la energía del impacto, disipando la fuerza del mismo por toda la estructura, lo cual ayuda a minimizar la deformación de la cabina y defendiendo la integridad de sus pasajeros.</li></ul>',
imagen:'seguridad/img/goa.jpg',url:false,autos:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
{nombre:'TNGA',titulo:'<h2>SEGURIDAD<br>DE PROTECCIÓN<br> <span>TNGA</span></h2>',
descripcion:'<h2>Toyota New Global Architecture</h2> <ul><li>Integramos este sistema para optimizar nuestros procesos de fabricación, mejorando la calidad y seguridad de toda nuestra serie de vehículos.</li> <li>Creando automóviles diseñados para absorber el máximo de daño posible y logre el mínimo daño en la cabina, se resguardan al conductor y sus pasajeros.</li></ul>',
imagen:'seguridad/img/tnga.jpg',url:false,autos:[3,4,5,12,14]},
{nombre:'AIRBAGS',titulo:'<h2>SEGURIDAD<br>DE PROTECCIÓN<br> <span>AIRBAGS</span></h2>',
descripcion:'<h2>Protección de choques</h2> <ul><li>Ante una colisión frontal de gran magnitud, las bolsas de aire SRS, junto a los cinturones de seguridad, lo ayudarán a mantenerse seguro.</li> <li>Se activan para ayudar a que los cuerpos de los ocupantes y el conductor se golpeen contra el volante o el panel, protegiéndolos completamente.</li></ul>',
imagen:'seguridad/img/airbags.jpg',url:false,autos:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},
{nombre:'CINTURONES',titulo:'<h2>SEGURIDAD<br>DE PROTECCIÓN<br> <span>CINTURONES</span></h2>',
descripcion:'<h2>Protección ante colisiones</h2> <ul><li>Nuestros cinturones cuentan con pretensor y limitador de fuerza que se activan al detectar un fuerte impacto frontal, aumentando la firmeza para sujetar a los ocupantes y limitando la intensidad que se aplica en el pecho.</li> <li>Así evitará poner en riesgo la seguridad de cada uno de los ocupantes con un performance de ejecución excelente.</li></ul>',
imagen:'seguridad/img/cinturones.jpg',url:false,autos:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},
{nombre:'ISOFIX',titulo:'<h2>SEGURIDAD<br>DE PROTECCIÓN<br> <span>ISOFIX</span></h2>',
descripcion:'<h2>Anclajes ISOFIX</h2> <ul><li>Nuestros vehículos que cuentan con este sistema, tienen anclajes especiales en los asientos para sujetar las butacas de infantes.</li> <li>Evitando usar los mismos cinturones de seguridad y ofreciéndole la confianza para viajar con tranquilidad.</li></ul>',
imagen:'seguridad/img/isofix.jpg',url:false,autos:[0,1,3,4,5,6,7,8,10,11,12,13,14,15,16]},

{url:true,link:'https://www.latinncap.com/es/resultados'},
];

var videos = [
{
    personaje:"Óscar",
    titulo:"Capítulo 1",
    subtitulo:"Óscar, los peores reflejos contra los mejores frenos.",
    parrafo:"Desde niño, Óscar ha tenido malos reflejos, lo cual fue un obstáculo a la hora de manejar. Hoy, a sus 49 años, Toyota pone a prueba esas reacciones en uno de sus vehículos.",
    texto_rojo:"SISTEMA BA:<br>Break Assist (Asistencia de frenado)",
    page:0,
    btn1:2,
    url:"https://youtu.be/eeZP8QXY8mg",
    foto:"seguridad/img/video-oscar.jpg",
    id:"eeZP8QXY8mg"
},
{
    personaje:"Verónica",
    titulo:"Capítulo 2",
    subtitulo:"Verónica, los peores nervios contra la mejor estabilidad",
    parrafo:"Verónica es muy nerviosa, sobre todo, cuando está delante del volante. Hoy, después de 10 años sin utilizar un auto, Toyota pone a prueba su nerviosismo en uno de sus vehículos.",
    texto_rojo:"SISTEMA VSC<br>Vehicle Stability Control (Asistencia de estabilidad vehicular)",
    page:0,
    btn1:3,
    url:"https://youtu.be/4cbqoTHhjzw",
    foto:"seguridad/img/chica.jpg",
    id:"4cbqoTHhjzw"
},
{
    personaje:"Marta",
    titulo:"Capítulo 3",
    subtitulo:"Marta, 30 años fuera del volante contra los mejores sensores",
    parrafo:"Marta trató de obtener su licencia en dos oportunidades, pero no lo logró. Hoy, después de 30 años sin manejar, Toyota pone a prueba su falta de práctica en uno de sus vehículos.",
    texto_rojo:"SISTEMA CRAWL<br>CRAWL Control",
    page:0,
    btn1:8,
    url:"https://youtu.be/m3u4YA-EVnQ",
    foto:"seguridad/img/marta.jpg",
    id:"m3u4YA-EVnQ"
},
{
    personaje:"",
    titulo:"Capítulo 4",
    subtitulo:"Wing Ming, el peor desconcierto contra la mejor asistencia de subidas y bajadas.",
    parrafo:"Wing Ming tenía problemas cuando manejaba en Hong Kong y ahora, en el Perú, vive desconcertado con las subidas y bajadas. Hoy, Toyota pone a prueba su confusión en uno de sus vehículos.",
    texto_rojo:"",
    page:1,
    btn1:4,
    btn2:5,
    url:"https://youtu.be/eeZP8QXY8mg",
    foto:"seguridad/img/kim.jpg",
    id:"eeZP8QXY8mg"
},
{
    personaje:"Santiago",
    titulo:"Capítulo 5",
    subtitulo:"SANTIAGO, EL TERROR DE LAS CURVAS CONTRA LA MEJOR ESTABILIDAD",
    parrafo:"Santiago, conduce desde los 15 años, pero en cada oportunidad que ha rendido el examen de manejo, falla en la misma parte: acelera en las curvas. Hoy, Toyota pone a prueba su atrevimiento en uno de sus vehículos.",
    texto_rojo:"SISTEMAS VSC<br>Vehicle Stability Control (Asistencia de estabilidad vehicular)",
    page:0,
    btn1:3,
    url:"https://youtu.be/mJFvHzzmRns",
    foto:"seguridad/img/santiago.jpg",
    id:"mJFvHzzmRns"
}];

var codigo_video = "";
var texto_video = "";
var btn1 = "";
var btn2 = "";
var altura;

jQuery(window).on("load",function() {
    altura = jQuery("header.header").innerHeight();
});

jQuery(window).resize(function() {
    setTimeout(function(){ 
        altura = jQuery("header.header").innerHeight();

    }, 1000);
});

jQuery(document).ready(function($){

    jQuery('#carousel').owlCarousel({
        loop:true,
        items:1,
        nav:false,
        autoplay:true,
        autoPlaySpeed: 4000,
        autoPlayTimeout: 4000,
        autoplayHoverPause: true
    });

    jQuery(".conteendor-fila-tabs .dash a.ver").click(function(e){
        
        var indice = jQuery(".conteendor-fila-tabs .dash a.ver").index(this);

        abrircarrodetalle(indice,e);
    });

    jQuery('#videos .share a').click(function(e) {

        e.preventDefault();

        var url = jQuery(this).attr("href");

        if(jQuery(this).hasClass("fb"))
        {
            url = "https://www.facebook.com/sharer.php?u=" + url;
        }else{
            url = "https://twitter.com/intent/tweet/?text="+texto_video+"&url=" + url+"&via=toyota_peru";
        }


        var left = Number((screen.width / 2) - (700 / 2));

        var top = Number((screen.height / 2) - (500 / 2));

        window.open(url, "", 'height=500,width=500,top=' + top + ',left=' + left);

    });

    jQuery(".video-thumbs .next a").click(function(e){
        e.preventDefault();
        var indice = jQuery(".video-thumbs .next a").index(this);

        cambiopagina(indice);

    });

    jQuery(".video-info-pagina .new-btn-aqui").click(function(e){
        abriendopuerta();   
        var indice = jQuery(".video-info-pagina .new-btn-aqui").index(this);

        if(indice == 0)
        {
            abrircarrodetalle(btn1,e);
        }else{
            abrircarrodetalle(btn2,e);
        }
        setTimeout(function(){ 
            irseccion("gates");
        }, 500);
        mostrarocultar(0);
    });

    jQuery(".video-info-pagina .new-btn-descubre").click(function(e){
        abriendopuerta();
        var indice = jQuery(".video-info-pagina .new-btn-descubre").index(this);

        if(indice == 0)
        {
            abrircarrodetalle(btn1,e);
        }else{
            abrircarrodetalle(btn2,e);
        }

        setTimeout(function(){ 
            irseccion("toyotas");
        }, 500);
        mostrarocultar(0);
    });

    jQuery(".video-info-pagina .aqui").click(function(e){
        abriendopuerta();
        abrircarrodetalle(btn1,e);
        setTimeout(function(){ 
            irseccion("gates");
        }, 500);
        mostrarocultar(0);
    });

    jQuery(".video-info-pagina .descubre-toyota").click(function(e){
        abriendopuerta();
        abrircarrodetalle(btn1,e);
        
        setTimeout(function(){ 
            irseccion("toyotas");
        }, 500);
        mostrarocultar(0);
    });

    jQuery("#videos .video").click(function(e){
        e.preventDefault();
        abrirvideo(codigo_video);
    });

    jQuery(".btn-trailer").click(function(e){
        e.preventDefault();
        abrirvideo("hGjNcnbQdmg");
    });

    jQuery(".popup .close").click(function(e){
        e.preventDefault();
        jQuery(".popup").fadeOut("slow",function(){
           jQuery(".popup iframe").attr("src",""); 
        });
    });

    jQuery(".detalle .regresar a").click(function(e){
        e.preventDefault();
        regersardetalleautos();
    });

    jQuery(".card-header").click(function(){
        jQuery(".accordion-body").slideUp();
        if(jQuery(this).find(".icon svg").hasClass("caret-down"))
        {
            jQuery(this).find(".icon svg").removeClass("caret-down");
        }else{
            jQuery(".card-header").find(".icon svg").removeClass("caret-down"); 
            jQuery(this).find(".icon svg").addClass("caret-down");
        }
        jQuery(this).next(".accordion-body").stop().slideToggle();
    })

    jQuery('nav.main-nav li a[href^="#"],a.arrow-down,#home a.btn-vermas,#home a.btn-aqui').on('click', function (e) {
        e.preventDefault();
        
        var tag = this.hash;
        target = jQuery(tag); 
        if(target.length > 0)
        { 
            var margin = 0;
            if(target.find(".panel").length > 0)
            {
                margin = parseFloat(target.find(".panel").css("margin-top"));

            }else if(target.find(".title").length > 0)
            {
                margin = parseFloat(target.find(".title").css("margin-top"));
            }



            var alto = target.offset().top + margin - altura;

            
            jQuery(document).off("scroll", onScroll);
            jQuery("nav.main-nav li a").stop().removeClass("active");
            jQuery('nav.main-nav li a[href="'+tag+'"]').stop().addClass("active");
           // jQuery(document).off("scroll", onScroll);
            jQuery('html, body').stop().animate({
                'scrollTop': alto}, 600, 'swing', function () {
               jQuery(document).on("scroll", onScroll);
            });
        }
    });

    jQuery(document).on("scroll", onScroll);

    jQuery("#leftgate a.btn, #rightgate a.btn").click(function(e){
        e.preventDefault(); 
        

        var indice = jQuery("#seguridad .boton-apertura a.btn").index(this);

        mostrarocultar(indice);
        abriendopuerta();


    })

    jQuery("#gates .prevencion .header a.back").click(function(e){
        e.preventDefault(); 
        jQuery("#leftgate").removeClass("slide-out");
        jQuery("#rightgate").removeClass("slide-out-r");
        
        jQuery("#gates .spacer").removeClass("hidden");
        jQuery("#gates .prevencion").removeClass("d-block");
        jQuery("#gates .prevencion .header").removeClass("d-block");
        jQuery("#gates .prevencion .body").removeClass("d-block");

        jQuery("#gates").removeClass("overflow-hidden");
    })


    jQuery("#seguridad .tabs a").click(function(e){
        e.preventDefault(); 

        var indice = jQuery("#seguridad .tabs a").index(this);
        mostrarocultar(indice)
    })

    jQuery("#seguridad .contenedor-tab a").click(function(e){
        e.preventDefault(); 

        jQuery("#seguridad .contenedor-tab a").removeClass("active");
        jQuery(this).addClass("active");
        var indice = jQuery("#seguridad .contenedor-tab a").index(this);

        jQuery("#seguridad .conteendor-img-tabs img").hide();
        jQuery("#seguridad .conteendor-img-tabs img").eq(indice).show();
        jQuery("#seguridad .conteendor-fila-tabs .row").addClass("ocultar-fila");

        if(indice == 0)
        {
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(0).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(1).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(2).removeClass("ocultar-fila");
        }else if(indice == 1)
        {
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(3).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(4).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(5).removeClass("ocultar-fila");
        }else if(indice == 2)
        {
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(6).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(7).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(8).removeClass("ocultar-fila");
        }else if(indice == 3)
        {
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(9).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(10).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(11).removeClass("ocultar-fila");
        }else if(indice == 4)
        {
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(12).removeClass("ocultar-fila");
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(13).removeClass("ocultar-fila");
        }else{
            jQuery("#seguridad .conteendor-fila-tabs .row").eq(14).removeClass("ocultar-fila");
        }
    })
    
    var tiltSettings = [
    {},
    {
        movement: {
            imgWrapper : {
                translation : {x: 10, y: 10, z: 30},
                rotation : {x: 0, y: -10, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            lines : {
                translation : {x: 10, y: 10, z: [0,70]},
                rotation : {x: 0, y: 0, z: -2},
                reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            caption : {
                rotation : {x: 0, y: 0, z: 2},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 10, y: -10, z: 0},
                rotation : {x: 0, y: 0, z: 2},
                reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            },
            caption : {
                translation : {x: 30, y: 30, z: [0,40]},
                rotation : {x: [0,15], y: 0, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: 10, y: 10, z: [0,20]},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 5, y: -5, z: 0},
                rotation : {x: 0, y: 0, z: 6},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                translation : {x: 0, y: -8, z: 0},
                rotation : {x: 3, y: 3, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            lines : {
                translation : {x: 15, y: 15, z: [0,15]},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: 0, y: 8, z: 0},
                reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
            },
            caption : {
                translation : {x: 10, y: -15, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            }
        }
    },
    {
        movement: {
            lines : {
                translation : {x: -5, y: 5, z: 0},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            caption : {
                translation : {x: 15, y: 15, z: 0},
                rotation : {x: 0, y: 0, z: 3},
                reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
            },
            overlay : {
                translation : {x: 15, y: -15, z: 0},
                reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                translation : {x: 5, y: 5, z: 0},
                reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            },
            caption : {
                translation : {x: 10, y: 10, z: [0,50]},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            }
        }
    },
    {
        movement: {
            lines : {
                translation : {x: 40, y: 40, z: 0},
                reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                rotation : {x: 0, y: 0, z: -5},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: -30, y: -30, z: 0},
                rotation : {x: 0, y: 0, z: 3},
                reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }

    init();
    // var s = window.location.pathname
    // s = s.substr(1)
});

    jQuery(document).on("click","#home button.owl-dot",function(){
        var indice = jQuery("#home button.owl-dot").index(this);
        
         jQuery("nav.main-nav ul li").eq(1).find("a").removeClass("active");
        if(indice == 4)
        {
            cambiopagina(0);
            jQuery("nav.main-nav ul li").eq(1).show();
            jQuery("#videos").show();

        }else{
            jQuery("nav.main-nav ul li").eq(1).hide();

            jQuery("#videos").hide();
        }
    })

function abrirvideo(codigo_video)
{
    var url = "https://www.youtube.com/embed/"+codigo_video+"?rel=0&showinfo=0&autoplay=1&vq=hd1080";
    jQuery(".popup iframe").attr("src",url);
    jQuery(".popup").fadeIn("slow");
}

function abriendopuerta()
{
    jQuery("#leftgate").addClass("d-block").addClass("slide-in-l").addClass("slide-out");
    jQuery("#rightgate").addClass("d-block").addClass("slide-in-r").addClass("slide-out-r");
    jQuery("#gates").addClass("overflow-hidden");
    jQuery("#gates .spacer").addClass("hidden");
    jQuery("#gates .prevencion").addClass("d-block");
    jQuery("#gates .prevencion .header").addClass("d-block");
    jQuery("#gates .prevencion .body").addClass("d-block");
}

function irseccion(target){
    var alto = jQuery("#"+target).offset().top;
    console.log(alto);
    jQuery('html, body').stop().animate({
        'scrollTop': alto}, 600, 'swing', function () {
    });
}

function abrircarrodetalle(indice,e)
{
    var info = objeto_carros[indice];
    jQuery(".lista-autos .item-auto").addClass("ocultar-auto");
    if(info.url == false)
    {
        e.preventDefault();

        jQuery(".detalle .title").html(info.titulo);
        jQuery(".detalle .description").html(info.descripcion);
        jQuery(".background .img img.sys").attr("src",URL_BASE+info.imagen);
        jQuery(".interna-autos h1 .uppercase").html(info.nombre);

        jQuery.each(info.autos,function(indice,valor){
            jQuery(".lista-autos .item-auto").eq(valor).removeClass("ocultar-auto");
        })

        jQuery("#seguridad .prevencion").fadeOut("fast",function(){
            jQuery("#seguridad .prevencion").attr("style","").addClass("hidden").removeClass("d-block");
            jQuery(".detalle").fadeIn("fast",function(){
                jQuery(".detalle").attr("style","").addClass("d-block");
            })

            jQuery(".background").fadeIn("fast",function(){
                jQuery(".background").attr("style","").addClass("d-block");
            })

            jQuery(".interna-autos").fadeIn("fast",function(){
                jQuery(".interna-autos").attr("style","").addClass("d-block");
            })
        });
    }
}

function regersardetalleautos()
{
    jQuery(".detalle").fadeOut("fast",function(){
        jQuery(".detalle").attr("style","").removeClass("d-block");
    })

    jQuery(".background").fadeOut("fast",function(){
        jQuery(".background").attr("style","").removeClass("d-block");
    })

    jQuery(".interna-autos").fadeOut("fast",function(){
        jQuery(".interna-autos").attr("style","").removeClass("d-block");
    })

    jQuery("#seguridad .prevencion").fadeIn("fast",function(){
        jQuery("#seguridad .prevencion").attr("style","").removeClass("hidden").addClass("d-block");
    });
}

function cambiopagina(indice)
{
    var info = videos[indice];
    btn1 = "";
    btn2 = "";

    jQuery("#videos .titulo-video em").html(info.titulo);
    jQuery("#videos #datavideo > h4").html(info.subtitulo);
    texto_video = info.subtitulo;
    jQuery("#videos #datavideo > p").html(info.parrafo);
    jQuery("#videos #datavideo .sistema").html(info.texto_rojo);
    jQuery("#videos .video .img").attr("src",URL_BASE+info.foto);
    jQuery("#videos .share a").attr("href",info.url);
    jQuery("#videos #datavideo .resaltado span").html(info.personaje);
    jQuery("#videos .video-info-pagina").hide()
    jQuery("#videos .video-info-pagina").eq(info.page).show();
    codigo_video = info.id;
    btn1 = info.btn1;

    if(info.btn2)
    {
      btn2 = info.btn2; 
    }
}

function mostrarocultar(indice)
{
    jQuery("#seguridad .tabs a").removeClass("active");
    jQuery("#seguridad .contenedor-tab a").removeClass("active");
    jQuery("#seguridad .tabs a").eq(indice).addClass("active");
    jQuery("#seguridad .contenedor-tab").hide();
    jQuery("#seguridad .conteendor-img-tabs img").hide();
    jQuery("#seguridad .conteendor-fila-tabs .row").addClass("ocultar-fila");
    
    if(indice == 0)
    {
        jQuery(".titulo span").text("PREVENCIÓN");
        jQuery(".texto-pr").text("Como medida preventiva ante cualquier tipo de riesgo, las funciones de este sistema, como una mayor fuerza en los frenos, un mejor control y estabilidad del vehículo, entre otras; ayudarán a prevenir cualquier accidente, buscando proteger tu bienestar y el de todos a bordo.");
        jQuery("#seguridad .contenedor-tab").eq(0).show().find("a").addClass("active");
        jQuery("#seguridad .contenedor-tab").eq(1).show();
        jQuery("#seguridad .contenedor-tab").eq(2).show();
        jQuery("#seguridad .conteendor-img-tabs img").eq(0).show();
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(0).removeClass("ocultar-fila");
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(1).removeClass("ocultar-fila");
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(2).removeClass("ocultar-fila");
    }else{
        jQuery(".titulo span").text("PROTECCIÓN");
        jQuery(".texto-pr").text("Ante un accidente inevitable, los dispositivos de este sistema, como cinturones de seguridad más efectivos, airbags testeados internacionalmente y más elementos, resguardarán tu seguridad y la de los pasajeros.");
        jQuery("#seguridad .contenedor-tab").eq(3).show().find("a").addClass("active");
        jQuery("#seguridad .contenedor-tab").eq(4).show();
        jQuery("#seguridad .contenedor-tab").eq(5).show();
        jQuery("#seguridad .conteendor-img-tabs img").eq(3).show();
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(9).removeClass("ocultar-fila");
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(10).removeClass("ocultar-fila");
        jQuery("#seguridad .conteendor-fila-tabs .row").eq(11).removeClass("ocultar-fila");
    }
}

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('section').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");
     
        if (Math.round(Math.round(currLink.offset().top - altura)) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top - altura)) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            jQuery('nav.main-nav a[href="#'+tag+'"]').stop().addClass("active");
        }else{
            jQuery('nav.main-nav a[href="#'+tag+'"]').stop().removeClass("active");
        }
    })
}
