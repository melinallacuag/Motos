var selec_ci = 10;
var selec_cf = 10;
var pre = 0;
var listaprecio = null;
var selec_m = 12;
var cambio = 0;
var listatvalue = null;
var tvalue = 0;
var sel_tvalue = 'N';
var seguro = 0;
var sel_seguro = 'N';
var textovalue = "";
var contador = 0;

jQuery(window).on("load",function(){ 
  //jQuery(".trama-form").removeClass("open");
})

function recargacambio()
{
  var idintervalo = setInterval(function(){ 
    if(cambio != 0)
    {
      cargadefunciones();
      clearInterval(idintervalo);
    }
  }, 1000);

  var idintervalo2 = setInterval(function(){ 
    if(contador == 3)
    {
      console.log(contador);
      jQuery(".trama-form").removeClass("open");
      clearInterval(idintervalo2);
    }
  }, 1000);
}

jQuery(document).ready(function () {

  jQuery("#financiamiento select").selectpicker("destroy");
  jQuery('#financiamiento select').select2({
      minimumResultsForSearch: Infinity
  });


  jQuery.ajax({
      type: "POST",
      url: "/traer/conversionsimulador",
      beforeSend: function() {
        jQuery(".trama-form").addClass("open");
      },
  }).done(function(data) {
        var o = JSON.parse(data);
        cambio = parseFloat(o.GetTipoCambioResult);
  }).always(function() {
    //jQuery(".trama-form").removeClass("open");
    cargartoyotavalue()
  });

  jQuery("#s-cuotainicial").on("change", function() {
    selec_ci = jQuery(this).val();
    calculos();
  })

  jQuery("#s-cuotafinal").on("change", function() {
    selec_cf = jQuery(this).val()
    calculos();
  })

  jQuery("#s-plazomeses").on("change", function() {
    selec_m = jQuery(this).val()
    calculos();
  })

  jQuery("#s-modelo").on("change", function() {
    var e = jQuery(this).val();
    var version = "";
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
        var o = JSON.parse(data); 
        version = jQuery("#s-version").attr("data-version");
        jQuery("#s-version").html("<option value>Seleccione una versión</option>");

        if("string" != typeof o.return.desVerMod)
        {
          jQuery.each(o.return, function(e, t) {
            jQuery("#s-version").append("<option value=" + o.return[e].idVerMod + " >" + o.return[e].desVerMod + "</option>")
          })
        }else{
          jQuery("#s-version").append("<option value=" + o.return.idVerMod + " >" + o.return.desVerMod + "</option>");
        }
    }).always(function() {
      jQuery.ajax({
          type: "POST",
          url: '/traer/precios/preciosversion',
          data:{m:e},
          dataType: "JSON",
      }).done(function(data) {
          listaprecio = (typeof data.precio.return === "undefined")? "":data.precio.return;

      }).always(function() {
         llamardatosmodelo(e);
          if( "" != version)
          {
            jQuery("#s-version option[value=" + version + "]").attr("selected", "selected"); 
            jQuery("#s-version").change(); 
          }else{
            jQuery("#s-version").val(jQuery("#s-version option:eq(1)").val()).trigger("change");
          } 

        /*jQuery.ajax({
          type: "GET",
          url: "/traer/ws/colores",
          data: {
              model : jQuery("#s-modelo").val(),
              version: idVerMod
          },
          beforeSend: function() {
            
          },
        }).done(function(data) {
            var o = JSON.parse(data); 
            
        }).always(function() {
        }); */
      });
    });  

    reiniciar();
  });

  jQuery("#s-version").on("change", function() {
    var idVerMod = jQuery(this).val();

    jQuery("#s-color").html("<option value>Seleccione un color</option>");

    jQuery.each(listaprecio, function(e, t) {
      if(idVerMod == t.idVerMod)
      {
        jQuery("#s-color").append("<option value=" + t.codigoColor + " >" + t.nombreColor + "</option>")
      }
    })

    jQuery("#s-color").val(jQuery("#s-color option:eq(1)").val()).trigger("change");


    selec_ci = jQuery("#s-cuotainicial").val();
    selec_cf = jQuery("#s-cuotafinal").val();
    selec_m = jQuery("#s-plazomeses").val();

    if(idVerMod != '')
    {
      jQuery.each(listatvalue, function(e, t) {
        if(idVerMod == listatvalue[e].idVerMod)
        {
          tvalue = listatvalue[e].precioSoles / cambio ; //dolares

          textovalue = listatvalue[e].descripcion;
          var tvalues = listatvalue[e].precioSoles; //soles

          jQuery(".toyotavalue.t-info").html(textovalue);
          jQuery(".mantenimiento .monto").html(textotipocambio(tvalue,tvalues));
          jQuery(".incluir-mantenimiento").show();
        }
      })
    }else{
      textovalue = '';
      tvalue = 0;
      sel_tvalue = 'N';

      jQuery("#ch-value").prop( "checked", false);
      jQuery(".mantenimiento .monto").html(textotipocambio(0,0));
      jQuery(".incluir-mantenimiento").hide();
      jQuery(".activo-value").addClass("hide");
    }

    todoacero();
    jQuery("#s-lugar").val(jQuery("#s-lugar option:eq(0)").val()).trigger("change");
    reiniciar();
  })

  jQuery("#s-color").on("change", function() {
    var codigocolor = jQuery(this).val();
    var codigoversion = jQuery("#s-version").val();
    if(listaprecio.length > 0){
      jQuery.each(listaprecio, function(e, t) {
        if(codigocolor == t.codigoColor && codigoversion == t.idVerMod)
        {
          pre = t.impPreLis.replace(',','');
          calculos();
          return false;
        }
      });
    }
      
    jQuery(".trama-form").removeClass("open");

  })

  jQuery("#s-lugar").on("change", function() {
    var e = jQuery(this).val();

    if(e > 0)
    {
      jQuery.ajax({
        type: "POST",
        url: "/traer/ws/segurobylugar",
        data: {
            model : jQuery("#s-modelo").val(),
            version : jQuery("#s-version").val(),
            dep : e,
            pa : pre,
        },
        beforeSend: function() {
          jQuery(".trama-form").addClass("open");
        },
      }).done(function(data) {
            var o = JSON.parse(data); 
            seguro = (o.seguro == null) ? 0 : o.seguro;
            var segs = seguro * cambio;
            jQuery(".seguro .monto").html(textotipocambio(seguro,segs));

            if(e == 0)
            {
              jQuery(".incluir-seguro").hide();
            }else{
              jQuery(".incluir-seguro").show();
            }
      }).always(function() {
        jQuery(".trama-form").removeClass("open");
      });

    }else{

      todoacero();
      jQuery(".trama-form").removeClass("open");
    }
    reiniciar(); 
  })

  jQuery("#ch-value").click(function() {  
      if(jQuery("#ch-value").is(':checked')) {  
          jQuery(".activo-value").removeClass("hide");
          sel_tvalue = 'S';
      } else {  
          
          jQuery(".activo-value").addClass("hide");
          sel_tvalue = 'N';
      }  

      reiniciar();
  });

  jQuery("#ch-seguro").click(function() {  
      if(jQuery("#ch-seguro").is(':checked')) {  
          sel_seguro = 'S';
          jQuery(".activo-seguro").removeClass("hide");
      } else {  
          sel_seguro = 'N';
          jQuery(".activo-seguro").addClass("hide");
      }  

      reiniciar();
  }); 

  jQuery(".calcular .btn-m").click(function(e) {  
      e.preventDefault();
       jQuery(".calcular").addClass("hide");
      jQuery.ajax({
          type: "POST",
          url: "/traer/ws/irresistible",
          data: {
              model : jQuery("#s-modelo").val(),
              version : jQuery("#s-version").val(),
              color : jQuery("#s-color").val(),
              dep : (jQuery("#s-lugar").val() == 0) ? "":jQuery("#s-lugar").val(),
              s : seguro,
              ss : sel_seguro,
              pa : pre,
              ci : selec_ci,
              cf : selec_cf,
              m : selec_m,
              tv : tvalue,
              stv : sel_tvalue,
              tc : cambio,
              ttv : textovalue
          },
          beforeSend: function() {
            jQuery(".trama-form").addClass("open");
          },
      }).done(function(data) {
          var o = JSON.parse(data); 
          var tcea = o.tcea;
          var irre = o.irresistible;
          var legal = o.legal;
          irres = irre * cambio;
          jQuery(".tasa").removeClass("hide");
          jQuery(".tasa span").html(tcea);
          jQuery("#legales .legal").html(legal);
          jQuery(".cirresistible .cuota").html(o.textoirresistible);
          jQuery(".cirresistible").removeClass("hide");
          jQuery(".btn-cotiza").removeClass("hide");    
      }).always(function() {
        jQuery(".trama-form").removeClass("open");
      }); 
  }); 
})

function textotipocambio(dolares,soles)
{
  return "$ "+formatomoneda(dolares)+" o S/ "+formatomoneda(soles);
}

function todoacero()
{
  seguro = 0;
  sel_seguro = 'N';
  jQuery("#ch-seguro").prop( "checked", false);
  jQuery(".seguro .monto").html(textotipocambio("0.00","0.00"));
  jQuery(".incluir-seguro").hide(); 
  jQuery(".activo-seguro").addClass("hide");
}

function cargartoyotavalue()
{
  jQuery.ajax({
      type: "POST",
      url: "/traer/ws/toyotavalue",
      beforeSend: function() {
        jQuery(".trama-form").addClass("open");
      },
  }).done(function(data) {
        var o = JSON.parse(data);
        listatvalue = o.return.listaRespuesta;
  }).always(function(){
    cargarlugar();
  });
}

function cargarlugar()
{
  jQuery.ajax({
    type: "POST",
    url: "/traer/webservice/1",
    beforeSend: function() {
      jQuery(".trama-form").addClass("open");
    }
  }).done(function(data){
      var o = JSON.parse(data); 

      jQuery("#s-lugar").html("");
      jQuery.each(o.departamentos[0].return, function(e, t) {
          jQuery("#s-lugar").append("<option value=" + o.departamentos[0].return[e].idDep + " >" + o.departamentos[0].return[e].desDep + "</option>")
      });
  }).always(function() {
    cargadefunciones();
  });
}

function cargadefunciones()
{
  var e = "";
  jQuery.ajax({
      type: "POST",
      url: "/traer/ws/modelos",
      beforeSend: function() {
        jQuery(".trama-form").addClass("open");
      },
  }).done(function(data) {
      var o = JSON.parse(data);
      e = jQuery("#s-modelo").attr("data-model");
      
      jQuery("#s-modelo").html("<option value>Seleccione una modelo</option>");

      jQuery.each(o.return, function(e, t) {
          jQuery("#s-modelo").append("<option value=" + o.return[e].idModMar + " >" + o.return[e].desModMar + "</option>")
      });
 
  }).always(function() {
    if( "" != e)
    {
      jQuery("#s-modelo option[value=" + e + "]").attr("selected", "selected"); 
      jQuery("#s-modelo").change(); 
      //llamardatosmodelo(e);
    }else{
      jQuery(".trama-form").removeClass("open");
    }
  });
}


function formatomoneda(num) {

  var arreglomoneda = parseFloat(num).toFixed(2).toString().split(".");
  var inicio = arreglomoneda[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var valor = inicio +".00";

  if(arreglomoneda.length == 2)
  {
    valor = inicio+"."+arreglomoneda[1];
  }

  // var valor = parseFloat(num).toFixed(2).replace(',', '.').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // valor = valor.substring(0,valor.length - 3);
  return valor;
}

function calculos()
{
  reiniciar();
  var pres = pre * cambio;
  jQuery(".precio .monto").html(textotipocambio(pre,pres));

  var ti = (pre * selec_ci)/100;
  var tis = ti * cambio;
  jQuery(".cuota .monto").html(textotipocambio(ti,tis));

  var tf = (pre * selec_cf)/100;
  var tfs = tf * cambio;
  jQuery(".cuota.final .monto").html(textotipocambio(tf,tfs));
  jQuery(".cfinal .monto").html(textotipocambio(tf,tfs));
  jQuery(".cuotas .n-mes").html(selec_m);
}

function llamardatosmodelo(codmodelo)
{
  jQuery.ajax({
      type: "POST",
      dataType: "JSON",
      url: "/traer/modelo/codigosimulador",
      data: {
          c: codmodelo,
      },
  }).done(function(e) {
      var nombremodelo = jQuery("#s-modelo option[value=" + codmodelo + "]").text(); 
      jQuery(".content-nombre-modelo strong").html(nombremodelo); 
      jQuery(".car-modelo").attr("src", e.img);
      jQuery(".btn-cotiza a").attr("href",e.cotizar);
  });
}

function reiniciar()
{
  jQuery("#legales .legal").html("");
  jQuery(".calcular").removeClass("hide");
  jQuery(".cirresistible").addClass("hide");
  jQuery(".btn-cotiza").addClass("hide");
}