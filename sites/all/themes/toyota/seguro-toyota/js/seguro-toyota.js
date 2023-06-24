(function(a) {
    a.fn.validCampo = function(b) {
        a(this).on({
            keypress: function(a) {
                var c = a.which,
                    d = a.keyCode,
                    e = String.fromCharCode(c).toLowerCase(),
                    f = b;
                (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault()
            }
        })
    }
})(jQuery);

var altura = 0;


function calcularcabecera()
{
    altura = jQuery("header").innerHeight();
}

jQuery(window).resize(function() {
    setTimeout(function(){
        calcularcabecera();
    }, 1000);
});

jQuery(document).ready(function () {
    jQuery('.letteronly').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
    jQuery('.numberonly').validCampo('0123456789- ');

    jQuery("#contactenos select").selectpicker("destroy");

    jQuery('#contactenos select').select2({
        minimumResultsForSearch: Infinity
    });

    jQuery("#consulta").change(function(){
        var valor = jQuery(this).val();
        jQuery("#departamento").html("<option value>Elije tu departamento</option>");
        jQuery("#concesionario").html("<option value>Elije donde deseas atenderte</option>");
 
        if(valor != "")
        {
            jQuery.ajax({
                type: "POST",
                dataType: "JSON",
                url: "/listado/concesionariodepartamentos",
                beforeSend: function() {
                  jQuery(".trama-form").addClass("open");
                },
                success: function(data) {
                    jQuery("#departamento").append(data.html);
                    jQuery(".trama-form").removeClass("open");
                }
            })
        }
    });

    jQuery("#departamento").change(function(){
        var valor = jQuery(this).val();
        jQuery("#concesionario").html("<option value>Elije donde deseas atenderte</option>");
        if(valor != "")
        {
            jQuery.ajax({
                type: "POST",
                dataType: "JSON",
                url: "/listado/concesionarioseguros",
                data: {
                    departamento: valor
                },
                beforeSend: function() {
                  jQuery(".trama-form").addClass("open");
                },
                success: function(data) {
                    jQuery("#concesionario").append(data.html);
                    jQuery(".trama-form").removeClass("open");
                }
            })
        }
    });

    jQuery('#menu-gris a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        calcularcabecera();
        var target = this.hash;
        var menu = target;
        target = jQuery(target);
         if(jQuery(target).length > 0)
        {
            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".acordion").click(function(){
        jQuery(".cuerpo-acordion").stop().slideUp();
        if(jQuery(this).find("i").hasClass("fa-chevron-up"))
        {
            jQuery(this).stop().removeClass("active");
            jQuery(this).find("i").removeClass("fa-chevron-up");
        }else{
            jQuery(".acordion").stop().removeClass("active");
            jQuery(".acordion").find("i").removeClass("fa-chevron-up");
            jQuery(this).addClass("active");
            jQuery(this).find("i").addClass("fa-chevron-up");
        }

        jQuery(this).next(".cuerpo-acordion").stop().slideToggle();
    })
})



function enviar(token) {
    jQuery("#frmregistro").validate({
        rules: {
            nombres: "required",
            apellidos: "required",
            email: {
                required: true,
                email: true,
            },
            telefono: {
                required: true,
                maxlength: 9,
                minlength: 7,
                number: true
            },
            mensaje: "required",
            terminos_toyota: "required",
            concesionario: "required",
            consulta: "required",
            departamento: "required"
        },
        messages: {
            nombres: "Por favor, ingresa nombres",
            apellidos: "Por favor, ingresa apellido",
            email: {
                required: "Por favor,  ingresa un email",
                email: "Por favor, ingresa un email válido",
            },
            telefono: {
                required: "Por favor, ingresa un número de teléfoo",
                maxlength: "Por favor, ingresar máximo 9 digitos",
                minlength: "Por favor, ingresar mínimo 7 digitos",
                number: "Por favor, ingrese solo dígitos",
            },
            mensaje : "Por favor, ingresa el mensaje.",
            terminos_toyota: "Por favor, acepte los terminos y condiciones.",
            concesionario: "Por favor, seleccione un concesionario",
            consulta: "Por favor, seleccione un tipo de consulta",
            departamento: "Por favor, seleccione un departameto"
        },
        errorPlacement: function ( error, element ) {
            if (element.prop( "type" ) === "select-one" ) {
                error.insertAfter(element.closest( ".field " ).find(".select2"));

            }else if(element.prop("type") === "checkbox"){
                error.insertAfter( element.closest( ".terminos " ).find(".texto-label") );
            }else {
                element.attr("placeholder", error[0].outerText);
            }
                // error.insertAfter( element );
                //element.val("");
                //element.attr("placeholder",error.text());

        },
        submitHandler: function(form) {

        }
    });


    var isFormValid = jQuery("#frmregistro").valid();
    if (isFormValid) {
        //jQuery(".trama-form").addClass("open");
        jQuery.ajax({
            type: "POST",
            dataType: "JSON",
            url: "/guardar/segurotoyota",
            data: jQuery("#frmregistro").serialize(),
            beforeSend: function() {
              jQuery(".trama-form").addClass("open");
            },
            success: function(data) {
                jQuery(".trama-form").removeClass("open");
                jQuery("label.error").remove();
                jQuery("form input.error").removeClass("error");
              if(data.tipo == 1)
              {
                //jQuery("#descripcion").remove();
                jQuery("#contactenos .container").html(data.mensaje);

              }else if(data.tipo == 2){

                jQuery.each(data.errores,function(indice,elemento){
                    var html = "<label id='error-"+elemento.id+"' class='error'>"+elemento.mensaje+"</label>";

                    var tag = jQuery("#"+elemento.id);
                    tag.addClass("error");

                    if (tag.prop( "type" ) === "select-one" ) {
                        tag.closest(".field.select").append(html);
                    }else if(tag .prop("type") === "checkbox"){
                        tag.closest(".checkbox").append(html);
                    }else {
                        tag.attr("placeholder", elemento.mensaje);
                        // error.insertAfter( element );
                        //element.val("");
                        //element.attr("placeholder",error.text());
                    }
                    // if (tag.prop( "type" ) === "select-one" ) {
                    //     jQuery(html).insertAfter(tag.closest( ".field " ).find(".select2"));
                    // }else if(tag .prop("type") === "checkbox"){
                    //     jQuery(html).insertAfter(tag.closest( ".terminos " ).find(".texto-label") );
                    // }else {
                    //     tag.attr("placeholder", elemento.mensaje);
                    // }
                });
              }else{
                alert(data.mensaje);
              }


            }
        }).fail(function(error){
            alert(error.responseText);
        })
    }
}


jQuery( window ).scroll(function() {
    var altura = jQuery("#banners").height();
    var scroll = jQuery(window).scrollTop();
    if(scroll > altura)
    {
        jQuery("#menu-gris").addClass("fixed");
    }else{

        jQuery("#menu-gris").removeClass("fixed");
    }
});
