function calculadoraFinanciamiento() {
	$('.bloque-disena-financiamiento .selectores select').selectpicker();
	$('#filter-inicial').slider({
		min: 0,
		max: 30,
		val: 0,
		slide: function( event, ui ) {
			$('#filter-inicial span.ui-slider-handle').html('<span class="number">'+ (ui.value + 10) +'%</span>');
		},
		create: function( event, ui ) {
			$('#filter-inicial').append('<ul class="steps"></ul>');
			for (var i=0; i<2; i++){
				if(i == 0){
					$('<li><span>10%</span></li>').appendTo('#filter-inicial .steps');
				} else {
					$('<li><span>40%</span></li>').appendTo('#filter-inicial .steps');
				}
			}
			$('#filter-inicial .steps li').css({
				width: '100%'
			})
		},
		change: function( event, ui ) {
			traerPrecios();
		}
	});

	$('#filter-meses').slider({
		min: 0,
		max: 12,
		val: 0,
		slide: function( event, ui ) {
			$('#filter-meses span.ui-slider-handle').html('<span class="number">'+ (ui.value + 24) +'</span>');
			$('.slider-filter4 .valor').html((ui.value + 24) + " meses");
		},
		create: function( event, ui ) {
			$('#filter-meses').append('<ul class="steps"></ul>');
			for (var i=0; i<2; i++){
				if(i == 0){
					$('<li><span>24</span></li>').appendTo('#filter-meses .steps');
				} else {
					$('<li><span>36</span></li>').appendTo('#filter-meses .steps');
				}
			}
			$('#filter-meses .steps li').css({
				width: '100%'
			})
		},
		change: function( event, ui ) {
			traerPrecios();
		}
	});

	$('#filter-final').slider({
		min: 0,
		max: 40,
		val: 0,
		slide: function( event, ui ) {
			$('#filter-final span.ui-slider-handle').html('<span class="number">'+ (ui.value + 10) +'%</span>');
		},
		create: function( event, ui ) {
			$('#filter-final').append('<ul class="steps"></ul>');
			for (var i=0; i<2; i++){
				if(i == 0){
					$('<li><span>10%</span></li>').appendTo('#filter-final .steps');
				} else {
					$('<li><span>50%</span></li>').appendTo('#filter-final .steps');
				}
			}
			$('#filter-final .steps li').css({
				width: '100%'
			})
		},
		change: function( event, ui ) {
			traerPrecios();
		}
	});
}


function traerPrecios(){
	var m="24";
	var porci="10";
	var porfi="10";
	if (jQuery(".bloque-disena-financiamiento .box1 #filter-meses .number").text()!="") {
		m=jQuery(".bloque-disena-financiamiento .box1 #filter-meses .number").text();
	}
	if (jQuery(".bloque-disena-financiamiento .box1 #filter-inicial .number").text().split("%").join("")!="") {
		porci=jQuery(".bloque-disena-financiamiento .box1 #filter-inicial .number").text().split("%").join("");
	}
	if (jQuery(".bloque-disena-financiamiento .box1 #filter-final .number").text().split("%").join("")) {
		porfi=jQuery(".bloque-disena-financiamiento .box1 #filter-final .number").text().split("%").join("");
	}

	//console.log("m " + m);
	//console.log("porci " + porci);
	//console.log("porfi " + porfi);

	var version=$("#edit-submitted-datos-del-vehiculo-version").val();
	$('.bloque-cotizar.trespasos .bloque-disena-financiamiento.form-cotizador').append("<div class='loading' style='position: absolute; z-index: 1; top: 0; left: 50%; width: 100%; height: 100%; background: #f6f6f6; transform: translate3d(-50%, 0, 0); display: table; z-index: 3;'> <div class=' overlay' style='text-transform: uppercase; letter-spacing: 0.4em; font-size: 1.15em; font-weight: bold; text-align: center; display: table-cell; vertical-align: middle;'>loading..</div> </div>");
	$.ajax({
		type: "POST",
		dataType: "JSON",
		url: '/traer/precios/version',
		data:{p:m,ci:porci,cf:porfi,v:version},
		success: function(data) {
			$.ajax({
				type: "GET",
				dataType: "JSON",
				url: '/traer/conversion',
				success: function(obj) {
					//inicio campos hidden para enviar con el post del formulario
					$('#p-c').val(m); //meses
					$('#por-ci-c').val(porci); //porcentaje cuota inicial
					$('#por-cf-c').val(porfi); //porcentaje cuota final
					$('#valor-c').val('$'+data.precio); //valor vehiculo
					$('#ci-c').val('$'+data.cuota_inicial); //valor cuota inicial
					$('#cf-c').val("$"+data.cuota_balon); //valor cuota final
					$('#i-c').val('$'+data.cuota_mensual); //valor cuota irresistible
					//fin campos hidden para enviar con el post del formulario

					//Pintar en el dom la información
					$('#precio-vehiculo').html('$'+data.precio);
					$('#cuota-inicial').html('$'+data.cuota_inicial);
					$('#cuota-final').html("$"+data.cuota_balon);
					$('#cuota-irresistible').html('$'+data.cuota_mensual);

					//Converti valores a soles
					$('.bloque-cotizar.trespasos .bloque-disena-financiamiento.form-cotizador .loading').remove();
					$('.soles').remove();
					//console.log('TipoCambio', obj.GetTipoCambioTDPResult.TipoCambio);
					// var solPrecio = data.precio.replace(',','');
					// var resuPre = solPrecio * obj.GetTipoCambioTDPResult.TipoCambio;
					// $('#precio-vehiculo').after('<span>'+'S/'+currencyFormatDE(resuPre)+'</span>');

					// var solInicio = data.cuota_inicial.replace(',','');
					// var resul = solInicio * obj.GetTipoCambioTDPResult.TipoCambio;
					// $('#cuota-inicial').after('<p class="valor soles">'+'S/'+currencyFormatDE(resul)+'</p>');

					// var cuotaFija = data.cuota_balon.replace(',','');
					// var resulFija = cuotaFija * obj.GetTipoCambioTDPResult.TipoCambio;
					// $('#cuota-final').after('<p class="valor soles">'+'S/'+currencyFormatDE(resulFija)+'</p>');

					// var cuotaMensual = data.cuota_mensual.replace(',','');
					// var resulMen = cuotaMensual * obj.GetTipoCambioTDPResult.TipoCambio;
					// $('#cuota-irresistible').after('<p class="valor soles">'+'S/'+currencyFormatDE(resulMen)+'</p>');
	
				}
			});
		}
	});

}

//funcion Formar numero puntos y comas
function currencyFormatDE(num) {
	var valor = num.toFixed(2).replace(',', '.').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	valor = valor.substring(0,valor.length - 3);
  	return valor;
}


function cotizadorInfo() {
	$("#edit-submitted-datos-del-vehiculo-modelo").unbind("change");
	$("#edit-submitted-datos-del-vehiculo-modelo").on("change",function(){
		var model=$(this).val();

		$.ajax({
			type: "GET",
			url: '/traer/ws/version',
			data:{"model":model},
			success: function(data) {
				data=JSON.parse(data);
				$('#edit-submitted-datos-del-vehiculo-version').html('<option value>Seleccione una versión</option>');

				if (typeof(data.return.desVerMod)!="string" ) {
					$.each(data.return, function(i, item) {
						$('#edit-submitted-datos-del-vehiculo-version').append('<option value='+data.return[i].idVerMod+' >'+data.return[i].desVerMod+'</option>');
					});
				} else {
					$('#edit-submitted-datos-del-vehiculo-version').append('<option value='+data.return.idVerMod+' >'+data.return.desVerMod+'</option>');
				}
				$("#edit-submitted-datos-del-vehiculo-version").selectpicker("refresh");

				var modelo1 = $("button[data-id='edit-submitted-datos-del-vehiculo-modelo']").attr('title');
				var version1 =  $("button[data-id='edit-submitted-datos-del-vehiculo-version']").attr('title');

				$('#v-name').attr('value',version1);
				$('#m-name').attr('value',modelo1);

				if($('#edit-submitted-datos-del-vehiculo-version').attr('data-default') != 0){
					$("#edit-submitted-datos-del-vehiculo-version").val($('#edit-submitted-datos-del-vehiculo-version').attr('data-default'));
					$("#edit-submitted-datos-del-vehiculo-version").change();
					$('#edit-submitted-datos-del-vehiculo-version').attr('data-default','');
				}

			}
		});


		$.ajax({
			type: "GET",
			url: '/traer/ws/ubicacion',
			data:{"model":model},
			success: function(data) {
				$('#ubicacion-select').html('<option selected value>Seleccione una ubicación</option>');
				data=JSON.parse(data);
				$.each(data.return, function(i, item) {
					$('#ubicacion-select').append('<option value='+data.return[i].idDep+' >'+data.return[i].desDep+'</option>');
				});

				$("#ubicacion-select").selectpicker("refresh");
			}
		});

		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: '/traer/calculadora',
			data:{c:model},
			success: function(data) {
				jQuery('.personalizar').attr('href',data.url);
			}
		});
		$("#edit-submitted-datos-del-vehiculo-modelo").selectpicker("refresh");
	});

	$("#ubicacion-select").on("change",function(){
				var dpto=$(this).val();
				var model=$('#edit-submitted-datos-del-vehiculo-modelo').val();

				$.ajax({
					type: "POST",
					url: '/traer/ws/concesionarios',
					data:{"model":model,"dpto":dpto},
					success: function(data) {
						$('#concesionario-select').html('<option selected value>Seleccione un Concesionario</option>');
						data=JSON.parse(data);
						if (typeof(data.return.desLocCon)!="string" ) {
							$.each(data.return, function(i, item) {
								$('#concesionario-select').append('<option value='+data.return[i].idLocCon+' >'+data.return[i].desLocCon+'</option>');
							});
						}else{
							$('#concesionario-select').append('<option value='+data.return.idLocCon+' >'+data.return.desLocCon+'</option>');
						}


						$("#concesionario-select").selectpicker("refresh");
					}
				});

			});

}

//Resumen Financiamiento "SI"
function resumentFinanci(){
	$.ajax({
		type: "GET",
		dataType: "JSON",
		url: '/traer/conversion',
		success: function(obj) {
			//console.log('TipoCambio', obj.GetTipoCambioTDPResult.TipoCambio);
			jQuery('.valor').each( function(){
				var valor = jQuery(this).find('p').text().replace(/[.*+,+?^${}()|[\]\\]/g, '');
				//var x = valor * obj.GetTipoCambioTDPResult.TipoCambio;
				var att= jQuery(this).find('p').attr('class');
				var classes = att.split(' ');
				//jQuery(this).append('<p class='+classes[0]+'>'+'S/'+currencyFormatDE(x)+'</p>');
				jQuery('.'+classes[0]).addClass(classes[1]);
			});
		}
	});
}


jQuery(document).ready(function() {
	jQuery(".paso1 .webform-next").click(function() {
		calculadoraFinanciamiento();
	});

	//Resumen Financiamiento "SI" conversion a soles
	if(jQuery('.thank-you .data-financiamiento').length == 1){
		resumentFinanci();
	}

	//Inicio Financiamiento "SI"
	$("#financiamientoSI").on("change",function(){
		var checkResult=$(this).is(':checked');
		var version=$('#edit-submitted-datos-del-vehiculo-version').val();
		$('#edit-submitted-datos-del-vehiculo-version').attr('data-default', version);

		if (checkResult) {
			jQuery.ajax({
				type: "POST",
				url: '/traer/paso3',
				success: function(data) {
					$('#paso3-paso2').remove();
					$('.paso2 .red-consecionarios').remove();
					$('.form-cotizador .title').remove();
					$('.paso3').append(data);
					jQuery.ajax({
						type: "POST",
						url: '/traer/financiamiento',
						success: function(data) {
							$('.paso2').append(data);
							$('.step2').removeClass("last");
							$('.paso3din').css('display','inline-block');
							calculadoraFinanciamiento();
							cotizadorInfo();
							traerPrecios();
							$('#edit-submitted-datos-del-vehiculo-modelo').change();
							$('select').selectpicker('refresh');
						}
					});
					//$("#edit-submitted-datos-del-vehiculo-version").change();
				}
			});
		}
	});

	//Inicio Financiamiento "NO"
	$("#financiamientoNO").on("change",function(){
		var checkResult=$(this).is(':checked');
		var version=$('#edit-submitted-datos-del-vehiculo-version').val();
		$('#edit-submitted-datos-del-vehiculo-version').attr('data-default', version);

		if (checkResult) {
			jQuery.ajax({
				type: "POST",
				url: '/traer/paso3',
				success: function(data) {
					$('.bloque-disena-financiamiento').remove();
					$('.paso3din').css('display','none');
					$('.step2').addClass("last");
					$('.paso2').append( "<div class='red-consecionarios'>"+data+"</div>" );
					$('.paso3').empty();
					cotizadorInfo();
					//$('#edit-submitted-datos-del-vehiculo-modelo').change();
					$('select').selectpicker('refresh');
				}
			});
		}
	});
})
