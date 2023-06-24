var data_tid;

function megamenuAjax() {

/*	jQuery(".carousel-btn li a").on('click', function(){
		jQuery(".carousel-btn li a").removeClass("active");
		jQuery(this).addClass("active");
		data_tid= jQuery(this).attr("data-tid");
		data_tid = parseInt(data_tid);
		load = "<span class='load-gif'></span>";
		jQuery(".contenedor-modelos").append(load);

		jQuery.ajax({
			type: "POST",
			url: '/modelo/megamenu',
			data : {"tid" : data_tid},
			success: function(data) {
				var datos = data;
				jQuery(".contenedor-modelos").empty();
				jQuery(".contenedor-modelos").append(datos);
			}
		})
	});*/

	var tipo_vehiculo_d = jQuery(".grupos-selectores-desktop .menu-tipo-vehiculo");
	var capacidad_motor_d = jQuery(".grupos-selectores-desktop .menu-capacidad-motor");
	var rango_precio_d = jQuery(".grupos-selectores-desktop .menu-rango-precio");

	var tipo_vehiculo_m = jQuery(".grupos-selectores-mobile .menu-tipo-vehiculo-mobile");
	var capacidad_motor_m = jQuery(".grupos-selectores-mobile .menu-capacidad-motor-mobile");
	var rango_precio_m = jQuery(".grupos-selectores-mobile .menu-rango-precio-mobile");
	
	var tid = "";
	var cm = "";
	var rp = "";

	tipo_vehiculo_d.change(function(){
		tid = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});

	capacidad_motor_d.change(function(){
		cm = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});

	rango_precio_d.change(function(){
		rp = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});


	tipo_vehiculo_m.change(function(){
		tid = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});

	capacidad_motor_m.change(function(){
		cm = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});

	rango_precio_m.change(function(){
		rp = jQuery(this).val();
		ajax_menu_lista(tid,cm,rp);
	});
}

function ajax_menu_lista(tid,cm,rp)
{

	jQuery.ajax({
		type: "POST",
		url: '/modelo/megamenu',
		data : {
			"tid" : tid,
			"cm" : cm,
			"rp" : rp,
		},
		success: function(data) {
			var datos = data;
			jQuery(".contenedor-modelos").empty();
			jQuery(".contenedor-modelos").append(datos);
		}
	})
}

jQuery(document).ready(function() {
	megamenuAjax();

	jQuery('.mega-menu').bind('click', function (e) {
		//e.stopPropagation() 

	})


	jQuery(".megamenu > a").click(function() {
		if(jQuery(".bloque-megamenu-menu").hasClass("open")){
			jQuery(".bloque-megamenu-menu").removeClass("open");
			jQuery("body").css("position","inherit");
		} else {
			jQuery(".bloque-megamenu-menu").addClass("open");
			jQuery("body").css("position","fixed");
		}
	});

	jQuery(".navigation-close-button").click(function() {
		jQuery(".bloque-megamenu-menu").removeClass("open");
		jQuery("body").css("position","inherit");
	});

	// jQuery('.navbar-nav .dropdown.megamenu > a').click(function(){
	// 	jQuery(".bloque-megamenu-menu").addClass('open');
	// })

	jQuery('.mega-menu .navigation-close-button .ico, .navbar-toggle').click(function(){
		 jQuery('.bloque-megamenu-menu').removeClass('open');
		 jQuery("body").css("position","inherit");
	})

});



jQuery(window).on("load",function() {


	if (jQuery(window).width() >= 768){
		
		jQuery(document).on("click","*", function(event){
			var elemento = jQuery(this);

			if(!elemento.hasClass("toggle-menu")) 
			{

				if(jQuery(".bloque-megamenu-menu.open").has(event.target).length == 0)
				{
					jQuery('.bloque-megamenu-menu.open').removeClass('open');
				 	jQuery("body").css("position","inherit");
				}
			}
		});
		



		// jQuery(document).on("click","nav a",function(e) {
		// 	cerrarafuer();
		// });

		
		// jQuery( ".navbar-nav .dropdown.megamenu" ).mouseleave(function() {
		// 	jQuery('.navbar-nav .dropdown .dropdown-menu.open-megamenu').removeClass('open-megamenu');
		// 	jQuery("body").css("position","inherit");
		// });
		
		
	}


	if (jQuery(window).width() < 1200){
		jQuery(".dropdown.megamenu,.submenu-mobile").click(function() {
			jQuery('.carousel-btn.owl-carousel').owlCarousel({
				loop: true,
				responsive:{
					0:{
						items: 1,
						nav:true,
						dots: false
					}
				}
			})

			//megamenuAjax();
		});
	}

	if (jQuery(window).width() < 768){


		//if (jQuery('.box-compare-models .box-position div').length > 1) {

		//}
		//var carrusel;



		// jQuery('.submenu-mobile').click(function() {

		// 	jQuery('.mega-menu').bind('click', function (e) {
		// 		e.stopPropagation() 
		// 	})

		// });

		// jQuery('.submenu-mobile .megamenu').on('hide.bs.dropdown',function() {
		// 	console.log('cliak')
		// 	console.log('cerrando')
		// 	jQuery('.submenu-mobile.visible li.megamenu .dropdown-menu').removeClass('open-megamenu');
		// });		

		// jQuery('.subnivel').on('show.bs.dropdown',function() {
		// 	jQuery('.subnivel .dropdown-menu').addClass('open-megamenu');
		// });

		// jQuery('.subnivel').on('hide.bs.dropdown',function() {
		// 	jQuery('.subnivel .dropdown-menu').removeClass('open-megamenu');
		// });			
		jQuery(document).on("click",".megamenu > a",function(){
			jQuery(".bloque-megamenu-menu").toggleClass('open');
		})


		jQuery(document).on("click",".submenu-mobile .title-mobile", function(){
			jQuery('.bloque-megamenu-menu').removeClass('open');
			jQuery('.carousel-btn.owl-carousel').owlCarousel('destroy');
			// carrusel.trigger('refresh.owl.carousel');
			// carruse2.trigger('refresh.owl.carousel');
		}) 
	}
});





