var listaprecio = null;

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

jQuery(window).on("load",function(){
  jQuery(".trama-form").removeClass("open");
})

jQuery(document).ready(function () {
    jQuery('.letteronly').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
    jQuery('.numberonly').validCampo('0123456789- ');

    jQuery('#document_type').on('change', function(){
        var val = jQuery.trim(jQuery(this).val());
        if (val === '2') {
            jQuery('.field.ruc').removeClass('hide');
        } else {
            jQuery('.field.ruc').addClass('hide');
        }

       if (val === '1') {
            jQuery("#document_number").attr("placeholder","01234567");
            jQuery("#document_number").attr("minlength","8");
            jQuery("#document_number").attr("maxlength","8");
       }else if(val === '2'){
            jQuery("#document_number").attr("placeholder","01234567890");
            jQuery("#document_number").attr("minlength","11");
            jQuery("#document_number").attr("maxlength","11");
       }else if(val === '3'){
            jQuery("#document_number").attr("placeholder","012345678");
            jQuery("#document_number").attr("minlength","9");
            jQuery("#document_number").attr("maxlength","9");
       }else{
            jQuery("#document_number").attr("placeholder","012345678901");
            jQuery("#document_number").attr("minlength","12");
            jQuery("#document_number").attr("maxlength","12");
       }
    });

    jQuery.ajax({
        type: "POST",
        url: "/traer/webservice/1",
        beforeSend: function() {
            jQuery(".trama-form").addClass("open");
        },
        success: function(data) {
            var o = JSON.parse(data);
            jQuery("#document_type").html('<option value="" >Seleccione un tipo de documento</option>');
            jQuery.each(o.documentos[0].return, function(e, t) {
                jQuery("#document_type").append("<option value=" + o.documentos[0].return[e].idTipDoc + " >" + o.documentos[0].return[e].desTipDoc + "</option>")
            });

            jQuery("#code_phone").html('<option value="" >Seleccione una ubicación</option>');
            jQuery.each(o.telefonos[0].return, function(e, t) {
                jQuery("#code_phone").append("<option value=" + o.telefonos[0].return[e].codTel + " >" + o.telefonos[0].return[e].desDep + "</option>")
            });

            jQuery("#department").html('<option value="" >Seleccione un departamento</option>');
            jQuery.each(o.departamentos[0].return, function(e, t) {
                jQuery("#department").append("<option value=" + o.departamentos[0].return[e].idDep + " >" + o.departamentos[0].return[e].desDep + "</option>")
            });

            var id_dep = jQuery("#department").attr("data-departmento");

            if( "" != id_dep)
            {
                jQuery("#department option[value=" + id_dep + "]").attr("selected", "selected");
                jQuery("#department option[value=" + id_dep + "]").trigger("change");
                jQuery("#department").change();
            }

            // var d = {
            //         _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            //         encode: function(e) {
            //             var t, o, i, a, r, n, l, s = "",
            //                 c = 0;
            //             for (e = d._utf8_encode(e); c < e.length;) a = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (o = e.charCodeAt(c++)) >> 4, n = (15 & o) << 2 | (i = e.charCodeAt(c++)) >> 6, l = 63 & i, isNaN(o) ? n = l = 64 : isNaN(i) && (l = 64), s = s + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(n) + this._keyStr.charAt(l);
            //             return s
            //         },
            //         decode: function(e) {
            //             var t, o, i, a, r, n, l = "",
            //                 s = 0;
            //             for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;) t = this._keyStr.indexOf(e.charAt(s++)) << 2 | (a = this._keyStr.indexOf(e.charAt(s++))) >> 4, o = (15 & a) << 4 | (r = this._keyStr.indexOf(e.charAt(s++))) >> 2, i = (3 & r) << 6 | (n = this._keyStr.indexOf(e.charAt(s++))), l += String.fromCharCode(t), 64 != r && (l += String.fromCharCode(o)), 64 != n && (l += String.fromCharCode(i));
            //             return l = d._utf8_decode(l)
            //         },
            //         _utf8_encode: function(e) {
            //             e = e.replace(/rn/g, "n");
            //             for (var t = "", o = 0; o < e.length; o++) {
            //                 var i = e.charCodeAt(o);
            //                 i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128)), t += String.fromCharCode(63 & i | 128))
            //             }
            //             return t
            //         },
            //         _utf8_decode: function(e) {
            //             for (var t = "", o = 0, i = c1 = c2 = 0; o < e.length;)(i = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(i), o++) : 191 < i && i < 224 ? (c2 = e.charCodeAt(o + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), o += 2) : (c2 = e.charCodeAt(o + 1), c3 = e.charCodeAt(o + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
            //             return t
            //         }
            //     },
            //     e = sessionStorage.getItem("csteps");
            // if (null != e) {
            //     var t = JSON.parse(e);
            //     jQuery("#edit-submitted-tipo-de-documento").val(d.decode(t[0])).trigger("change"), u("#edit-submitted-f1-indicativo").val(d.decode(t[5])), u("#edit-submitted-departamento").val(d.decode(t[8]))
            // }
            jQuery(".trama-form").removeClass("open");
        }
    });

    jQuery.ajax({
        type: "POST",
        url: "/traer/ws/modelos",
        beforeSend: function() {
            jQuery(".trama-form").addClass("open");
        },
        success: function(data) {
            var o  = JSON.parse(data);
            var e = jQuery("#model").attr("data-model");
            jQuery.each(o.return, function(e, t) {
            jQuery("#model").append("<option value=" + o.return[e].idModMar + " >" + o.return[e].desModMar + "</option>")
            });

            if( "" != e)
            {
                jQuery("#model option[value=" + e + "]").attr("selected", "selected");
                jQuery("#model option[value=" + e + "]").trigger("change");
                //jQuery("#model").change();
            }

            jQuery(".trama-form").removeClass("open");
        }
    });

    jQuery.ajax({
        type: "POST",
        url: "/traer/conversionsimulador",
        beforeSend: function() {
            jQuery(".trama-form").addClass("open");
        },
        success: function(data) {

            var o = JSON.parse(data);
            cambio = parseFloat(o.GetTipoCambioResult);
            jQuery("#cabio").val(cambio);
            jQuery(".trama-form").removeClass("open");
        }
    });

    jQuery("#cotizador select").selectpicker("destroy");

    jQuery('#cotizador select').select2({
        minimumResultsForSearch: Infinity
    });

    jQuery("#model").on("change", function() {
        var e = jQuery(this).val();
        var version = "";
        var mname = jQuery( "#model option:selected" ).text();
        jQuery("#m-name").val(mname);

        if(e)
        {
            // jQuery.ajax({
            //     type: "GET",
            //     url: "/grabar/ws/solicitud",
            //     data: {
            //       model: e
            //     },
            //     beforeSend: function() {
            //         jQuery(".trama-form").addClass("open");
            //     },
            //     success: function(data) {
            //         var xixa = JSON.parse(data);
            //         jQuery("#numero-operacion-2").attr("value", xixa.return);
            //         jQuery(".trama-form").removeClass("open");
            //     }
            // });

            
            jQuery.ajax({
              type: "POST",
              dataType: "JSON",
              url: "/traer/modelo/codigocotizador",
              data: {
                  c: e,
              },
              beforeSend: function() {
                jQuery(".trama-form").addClass("open");
              },
              success: function(data) {
                  // var nombremodelo = jQuery("#model option[value=" + e + "]").text();
                  // jQuery(".nombre-modelo strong").html(nombremodelo);

                  jQuery(".nombre-modelo strong").html(mname);
                  jQuery(".box-modelo img").attr("src", data.img);
                  jQuery(".btn-simulacion").attr("href",data.simulador);
                  jQuery(".trama-form").removeClass("open");
              }
            })

            jQuery.ajax({
                type: "GET",
                url: "/traer/ws/version",
                data: {
                    model: e
                },
                beforeSend: function() {
                    jQuery(".trama-form").addClass("open");
                },
            }).done(function(data){
                var o  = JSON.parse(data);
                version = jQuery("#version").attr("data-version");
                jQuery("#version").html("<option value='' >Seleccione una versión</option>");
                if("string" != typeof o.return.desVerMod)
                {
                    jQuery.each(o.return, function(e, t) {
                      jQuery("#version").append("<option value=" + o.return[e].idVerMod + " >" + o.return[e].desVerMod + "</option>")
                    })
                }else{
                    jQuery("#version").append("<option value=" + o.return.idVerMod + " >" + o.return.desVerMod + "</option>");
                }
            }).always(function(data){

                jQuery.ajax({
                    type: "POST",
                    url: '/traer/precios/preciosversion',
                    data:{m:e},
                    dataType: "JSON",
                }).done(function(data){
                    listaprecio = (typeof data.precio.return === "undefined")? "":data.precio.return;
                }).always(function(){
                    if( "" != version)
                    {
                        jQuery("#version option[value=" + version + "]").attr("selected", "selected");
                        //jQuery("#version option[value=" + version + "]").trigger("change");
                        jQuery("#version").change();
                    }else{
                      jQuery("#version").val(jQuery("#version option:eq(1)").val()).trigger("change");
                    }

                    jQuery(".trama-form").removeClass("open");
                })
            })

            


            jQuery.ajax({
                type: "GET",
                url: "/traer/ws/ubicacion",
                data: {
                    model: e
                },
                beforeSend: function() {
                    jQuery(".trama-form").addClass("open");
                },
                success: function(o) {
                    o = JSON.parse(o);
                    jQuery("#location").html("<option value=''>Seleccione una ubicación</option>");
                    jQuery.each(o.return, function(e, t) {
                        jQuery("#location").append("<option value=" + o.return[e].idDep + " >" + o.return[e].desDep + "</option>")
                    });

                    jQuery(".trama-form").removeClass("open");
                    jQuery("#location").val(jQuery("#location option:eq(0)").val()).trigger("change");
                }
            })
        }
    })

    jQuery("#location").on("change", function() {
        var e = jQuery(this).val(),
            t = jQuery("#model").val();

        if(e)
        {
            jQuery.ajax({
                type: "POST",
                url: "/traer/ws/concesionarios",
                data: {
                    model: t,
                    dpto: e
                },
                beforeSend: function() {
                    jQuery(".trama-form").addClass("open");
                },
                success: function(o) {
                    jQuery("#dealer").html("<option value=''>Seleccione un concesionario</option>");

                    if("string" != typeof(o = JSON.parse(o)).return.desLocCon)
                    {
                        jQuery.each(o.return, function(e, t) {
                            jQuery("#dealer").append("<option value=" + o.return[e].idLocCon + " >" + o.return[e].desLocCon + "</option>")
                        })
                    }else{
                       jQuery("#dealer").append("<option value=" + o.return.idLocCon + " >" + o.return.desLocCon + "</option>")
                    }

                    jQuery("#dealer").val(jQuery("#dealer option:eq(0)").val()).trigger("change");
                    jQuery(".trama-form").removeClass("open");
                }
            })
        }
    })

    jQuery("#version").on("change", function() {

        var ver = jQuery(this).val();
        var mod = jQuery("#model").val();

        var vname = jQuery( "#version option:selected" ).text();
        jQuery("#v-name").val(vname);

        if(ver)
        {
            // jQuery.ajax({
            //     type: "POST",
            //     url: '/traer/precios/preciosversion',
            //     data:{m:mod,v:ver},
            //     success: function(data) {
            //         var o = JSON.parse(data);
            //         var pre = o.precio.replace(',','');
            //         jQuery("#precio_auto").val(pre);
            //     }
            // })
            var color = jQuery("#color").attr("data-color");
            jQuery("#color").html("<option value>Seleccione un color</option>");

            jQuery.each(listaprecio, function(e, t) {
              if(ver == t.idVerMod)
              {
                jQuery("#color").append("<option value=" + t.codigoColor + " >" + t.nombreColor + "</option>")
              }
            })

            if( "" != color)
            {
                jQuery("#color option[value=" + color + "]").attr("selected", "selected");
                jQuery("#color option[value=" + color + "]").trigger("change");
                jQuery("#color").change();
            }else{
                jQuery("#color").val(jQuery("#s-color option:eq(1)").val()).trigger("change");
            }

            jQuery(".trama-form").removeClass("open");
           
 

            // jQuery.ajax({
            //     type: "GET",
            //     url: "/traer/ws/colores",
            //     data: {
            //         model: mod,
            //         version: ver
            //     },
            //     beforeSend: function() {
            //         jQuery(".trama-form").addClass("open");
            //     },
            //     success: function(o) {
            //         var color = jQuery("#color").attr("data-color");
            //         jQuery("#color").html("<option value=''>Seleccione un color</option>");

            //         if("string" != typeof(o = JSON.parse(o)).return.desCol)
            //         {
            //             jQuery.each(o.return, function(e, t) {
            //                 jQuery("#color").append("<option value=" + o.return[e].idCol + " >" + o.return[e].desCol + "</option>")
            //             })
            //         }else{
            //             jQuery("#color").append("<option value=" + o.return.idCol + " >" + o.return.desCol + "</option>");
            //         }
            //     }
            // })
        }
    })

    jQuery("#color").on("change", function() {
        var codigocolor = jQuery(this).val();
        var codigoversion = jQuery("#version").val();
        if(listaprecio.length > 0){
          jQuery.each(listaprecio, function(e, t) {
            if(codigocolor == t.codigoColor && codigoversion == t.idVerMod)
            {
              pre = t.impPreLis.replace(',','');
              jQuery("#precio_auto").val(pre);
              return false;
            }
          });
        }
          
        jQuery(".trama-form").removeClass("open");
    })

    jQuery("#btn-enviar").click(function(e) {
        e.preventDefault();

        if("" == jQuery("#phone").val() && "" == jQuery("#celular").val())
        {
            jQuery("#phone").prop('required',true);
            jQuery("#celular").prop('required',true);
        }
    });

    jQuery("#celular").keyup(function() {
        jQuery("#phone").removeAttr("required");
        jQuery("#phone").removeClass("error");
        jQuery("#phone").attr("placeholder","4567890");
    });

    jQuery("#phone").keyup(function() {
        jQuery("#celular").removeAttr("required");
        jQuery("#celular").removeClass("error");
        jQuery("#celular").attr("placeholder","987654321");
    })

})

var validobj;

function enviar(token) {
    validobj = jQuery("#cotizar").validate({
        rules: {
            document_type: "required",
            document_number: {
                required: true,
                number: true,
            },
            company: {
                required: {
                    depends: function(element) {
                        return jQuery.trim(jQuery('#document_type').val()) == 2
                    }
                },
            },
            first_name: "required",
            last_name: "required",
            code_phone: "required",
            phone: {
                maxlength: 7,
                minlength: 6,
                number: true
            },
            department:{
                required: true,
                number: true,
                min: 1
            },
            model: "required",
            version: "required",
            color: "required",
            location: "required",
            dealer: "required",
            celular: {
                maxlength: 9,
                minlength: 9,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            terminos_maf: "required"
        },
        messages: {
            document_type: "Por favor, elige un documento",
            document_number: {
                required: "Por favor, ingresa un número de documento",
                number: "Por favor, ingrese solo dígitos",
                minlength: jQuery.validator.format("Por favor ingrese como mínimo {0} dígitos"),
                maxlength: jQuery.validator.format("Por favor ingrese como máximo {0} dígitos"),
            },
            company: {
                required: "Por favor, ingresa nombre la razón social",
            },
            first_name: "Por favor, ingresa nombre",
            last_name: "Por favor, ingresa apellido",
            code_phone: "Por favor, elige código de teléfono",
            phone: {
                required: "Por favor, ingresa un número de teléfoo",
                maxlength: "Por favor, ingresar mínimo 7 digitos",
                minlength: "Por favor, ingresar máximo 6 digitos",
                number: "Por favor, ingrese solo dígitos",
            },
            department:{
                required: "Por favor, elige un departamento",
                number: "Por favor, elige un departamento válido",
                min: "Por favor, elige un departamento de la lista",
            },
            model: "Por favor, elige un modelo",
            version: "Por favor, elige una versión",
            color: "Por favor, elige un color",
            location: "Por favor, elige una ubicación",
            dealer: "Por favor, elige un concesionario",
            celular: {
                required: "Por favor, ingresa un número de celular",
                maxlength: "Por favor, ingresar mínimo 9 digitos",
                minlength: "Por favor, ingresar máximo 9 digitos",
                number: "Por favor, ingrese solo dígitos",
            },
            email: {
                required: "Por favor, ingresa un email",
                email: "Por favor, ingresa un email correctamente",
            },
            terminos_maf: "Por favor, seleccione estos terminos",
        },
        errorPlacement: function ( error, element ) {
            if (element.prop( "type" ) === "select-one" ) {
                error.insertAfter(element.closest( ".field " ).find(".select2"));

            }else if(element.prop("type") === "checkbox"){
                error.insertAfter( element.closest( ".terminos " ).find(".texto-label") );
            }else {
                element.attr("placeholder", error[0].outerText);
                // error.insertAfter( element );
                //element.val("");
                //element.attr("placeholder",error.text());
            }
        },
    });

    var isFormValid = jQuery("#cotizar").valid();
    if (isFormValid) {
        jQuery(".trama-form").addClass("open");
        document.getElementById("cotizar").submit();
    }
 //
}

