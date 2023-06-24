var acciones = {
    listo: function()
    {

        if (jQuery(".buscador select").length > 0)
        {
            jQuery(".buscador select").selectpicker("destroy");
            jQuery('.buscador select').select2({
              minimumResultsForSearch: Infinity
            });
        }


        jQuery.ajax({
            type: "POST",
            dataType: "json",
            url: "/traer/beneficiomodelo",
            success: function(data) {
                var html = "";
                jQuery.each(data.data,function(indice,elemento){
                    html = "<option value='"+elemento.id+"' >"+elemento.nombre+"</option>";
                    jQuery("#b-modelo").append(html);
                });
            }
        });

        jQuery("#b-modelo").on("change",acciones.cargaversion);
        jQuery(".buscador .btn-rojo-detalle").click(acciones.cargalistado)



        jQuery(".buscador .btn-siguiente").click(function(e){
            e.preventDefault();
            jQuery("html,body").animate({
                "scrollTop": jQuery(".resultado").offset().top
            })
        });
    },
    cargaversion: function()
    {
        var modelo = jQuery(this).val();
        if(modelo)
        {
            jQuery.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    m: modelo
                },
                url: "/traer/beneficioversion",
                success: function(data) {
                    var html = "";
                    jQuery("#b-version").html("");
                    jQuery.each(data.data,function(indice,elemento){
                        html = "<option value='"+elemento.id+"' data-precio='"+elemento.precio_sugerido+"' data-descripcion='"+elemento.descripcion+"' >"+elemento.nombre+"</option>";
                        jQuery("#b-version").append(html);
                    });
                }
            });
        }else{
            jQuery("#b-version").html('<option value="">Seleccione un versión</option>');
        }
    },
    cargalistado: function(e)
    {

        e.preventDefault();
        var version = jQuery("#b-version").val();
        var precio = jQuery("#b-version option:selected").data("precio");
        var descripcion = jQuery("#b-version option:selected").data("descripcion");

        jQuery(".columna-cuadro-1 .fila-contenido .columna").eq(1).html("S/. "+precio);
        jQuery(".columna-cuadro-1 .fila-contenido .columna").eq(2).html(descripcion);
        jQuery(".columna-cuadro-1 .fila-titulo .columna-mobile").eq(1).html("S/. "+precio);
        jQuery(".columna-cuadro-1 .fila-titulo .columna-mobile").eq(2).html(descripcion);

        if(version)
        {
            jQuery(".buscador").addClass("sticky").css({"top":jQuery("header.header").innerHeight()});
            jQuery.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    v: version
                },
                url: "/traer/beneficiolistado",
                success: function(data) {
                    var html = "";
                    jQuery(".columna-cuadro-2 .fila-contenido").remove();
                    jQuery(".columna-cuadro-2 .fila-detalle").remove();
                    jQuery.each(data.data,function(indice,elemento){
                        var listado = "";
                        if(elemento.contenido)
                        {
                            listado = "<ul>";
                            jQuery.each(elemento.contenido,function(i,el){
                                listado+="<li>"+el+"</li>";
                            })
                            listado+="</ul>";
                        }

                        var texto1 = "";
                        var texto2 = "";

                        if(elemento.kilometros == 1)
                        {
                            texto1 = "Inspección gratuita";
                            texto2 = "GRATIS";
                        }else{
                            texto1 = elemento.kilometros+",000 km";
                            texto2 = "S/. "+elemento.precio;
                        }

                        html = "<div class='fila fila-contenido'><i class='fas fa-plus-square icono-hover-desktop'></i><a href='#' class='abrir-detalle'><i class='fas fa-plus-square'></i></a>";
                        html+= "<div class='columna columna-kilometros'>"+texto1+"</div>";
                        html+= "<div class='columna'>"+texto2+"</div>";
                        html+= "<i class='fas fa-chevron-right'></i><div class='columna-detalle'>";
                        html+="<h4>Detalle de servicio</h4>";
                        html+= listado;
                        html+= "</div>";
                        html+= "</div>";
                        jQuery(".columna-cuadro-2").append(html);
                    });

                    jQuery(".buscador .btn-siguiente").fadeIn("slow");

                    jQuery(".resultado").fadeIn("slow",function(){
                        // var lugar = jQuery(this);
                        // jQuery("html,body").animate({
                        //     "scrollTop": lugar.offset().top
                        // })


                    });
                }
            });
        }else{
            jQuery(".columna-cuadro-2 .fila-titulo").remove();
            jQuery(".columna-cuadro-2 .fila-detalle").remove();
        }
    }
}

jQuery(document).ready(acciones.listo);
