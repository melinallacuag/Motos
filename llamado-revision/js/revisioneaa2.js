var Revision = (function(){

    var selected_campaign = false;
    var vin = false;
    var valid_vin_length = 17;

    var select_box = function(elm)
    {
        $elm = $(elm);

        selected_campaign = $elm.attr('id').replace('box-', '');
        $('#frmRegister input:hidden[name="campaign"]').val(selected_campaign);

        $('#boxes').addClass('hide');

        open_text_campaign();
    }

    var open_text_campaign = function()
    {
        $('#vin').removeClass('hide');

        $('#vin .text').addClass('hide');
        $('#vin #text-' + selected_campaign).removeClass('hide');
    }

    var input_validation_vin = function(elm)
    {
        $(elm).on({
            keypress: function (e)
            {
                var regex = new RegExp("^[a-zA-Z0-9]+$"),
                    digit_code = !e.charCode ? e.which : e.charCode,
                    digit = String.fromCharCode(digit_code);

                if( digit_code == 13 )
                {
                    return true
                }

                else if( ! regex.test(digit) || digit.toLowerCase() == 'o' )
                {
                    return false;
                }
            },

            paste: function()
            {
                var element = this;
                setTimeout(function () {
                    var text = $(element).val();

                    /* start: clen text */

                    // remove spaces
                    text = text.replace(/\s+/g, '');

                    // remove accents
                    function remove_accent(str) {var map={'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'AE','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ð':'D','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','ß':'s','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'ae','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ü':'u','ý':'y','ÿ':'y','Ā':'A','ā':'a','Ă':'A','ă':'a','Ą':'A','ą':'a','Ć':'C','ć':'c','Ĉ':'C','ĉ':'c','Ċ':'C','ċ':'c','Č':'C','č':'c','Ď':'D','ď':'d','Đ':'D','đ':'d','Ē':'E','ē':'e','Ĕ':'E','ĕ':'e','Ė':'E','ė':'e','Ę':'E','ę':'e','Ě':'E','ě':'e','Ĝ':'G','ĝ':'g','Ğ':'G','ğ':'g','Ġ':'G','ġ':'g','Ģ':'G','ģ':'g','Ĥ':'H','ĥ':'h','Ħ':'H','ħ':'h','Ĩ':'I','ĩ':'i','Ī':'I','ī':'i','Ĭ':'I','ĭ':'i','Į':'I','į':'i','İ':'I','ı':'i','Ĳ':'IJ','ĳ':'ij','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','Ĺ':'L','ĺ':'l','Ļ':'L','ļ':'l','Ľ':'L','ľ':'l','Ŀ':'L','ŀ':'l','Ł':'L','ł':'l','Ń':'N','ń':'n','Ņ':'N','ņ':'n','Ň':'N','ň':'n','ŉ':'n','Ō':'O','ō':'o','Ŏ':'O','ŏ':'o','Ő':'O','ő':'o','Œ':'OE','œ':'oe','Ŕ':'R','ŕ':'r','Ŗ':'R','ŗ':'r','Ř':'R','ř':'r','Ś':'S','ś':'s','Ŝ':'S','ŝ':'s','Ş':'S','ş':'s','Š':'S','š':'s','Ţ':'T','ţ':'t','Ť':'T','ť':'t','Ŧ':'T','ŧ':'t','Ũ':'U','ũ':'u','Ū':'U','ū':'u','Ŭ':'U','ŭ':'u','Ů':'U','ů':'u','Ű':'U','ű':'u','Ų':'U','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','ź':'z','Ż':'Z','ż':'z','Ž':'Z','ž':'z','ſ':'s','ƒ':'f','Ơ':'O','ơ':'o','Ư':'U','ư':'u','Ǎ':'A','ǎ':'a','Ǐ':'I','ǐ':'i','Ǒ':'O','ǒ':'o','Ǔ':'U','ǔ':'u','Ǖ':'U','ǖ':'u','Ǘ':'U','ǘ':'u','Ǚ':'U','ǚ':'u','Ǜ':'U','ǜ':'u','Ǻ':'A','ǻ':'a','Ǽ':'AE','ǽ':'ae','Ǿ':'O','ǿ':'o'};var res='';for (var i=0;i<str.length;i++){c=str.charAt(i);res+=map[c]||c;}return res;}
                    text = remove_accent(text);

                    // remove especial characters
                    text = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');

                    // remove O
                    text = text.replace(/O/g, '');
                    text = text.replace(/o/g, '');

                    /* end: clen text */

                    $(element).val(text);
                }, 100);
            }
        });
    }

    var send_vin = function(form)
    {
        $form = $(form);

        $form.removeClass('with_error');

        vin = $.trim($form.find('input').val());

        var with_error = false,
            error_message = '';

        if( vin == "" || vin.length < valid_vin_length || vin.length > valid_vin_length )
        {
            with_error = true;
            error_message = 'El código VIN de su vehículo debe de tener ' + valid_vin_length + ' caracteres.';
        }

        // NO TIENE NUMERO
        var matches = vin.match(/\d+/g);
        if (matches == null)
        {
            with_error = true;
            error_message = "El código VIN es incorrecto";
        }

        // NO TIENES LETRAS
        if (!vin.match(/[a-z]/i))
        {
            with_error = true;
            error_message = "El código VIN es incorrecto";
        }

        if( with_error )
        {
            $form.find('input').focus();
            $form.addClass('with_error');
            $form.find('p.error').text(error_message);
        }

        else
        {
            _send_vin(form);
        }
    }

    var _send_vin = function(form)
    {
        $form = $(form);

        vin = vin.toUpperCase();

        if( ! $('body').hasClass('block') )
        {
            $('body').addClass('block');

            $.post($form.attr('action'), { vin: vin, model: selected_campaign }, function(response){
                $('body').removeClass('block');

                $('#vin, #vin_result, #vin_result #vin_valid, #vin_result #vin_no_valid').addClass('hide');
                $('#vin_result').removeClass('hide');

                $form.find('input').val('');

                if( response.success )
                {
                    if( response.valid_vin )
                    {
                        $('#vin_result #vin_valid .entered_vin .wrap').text(vin);

                        $('#frmRegister input:hidden[name="vin"]').val(vin);
                        $('#vin_result #vin_valid').removeClass('hide');
                        _populate_model_select();
                        _populate_departments();

                        reset('#vin_valid form#frmRegister');
                    }

                    else
                    {
                        $('#vin_result #vin_no_valid .entered_vin .wrap').text(vin);
                        $('#vin_result #vin_no_valid').removeClass('hide');
                    }
                }

                else if( response.error )
                {
                    $form.addClass('with_error');
                    $('form#verificar_vin p.error').text(response.message);
                }
            }, 'json');
        }

    }

    var _populate_model_select = function()
    {
        var models = [];

        switch(selected_campaign)
        {
            case 'yaris':
                models = ['Yaris'];
            break;

            case 'rav4-hilux-fortuner':
                models = ['Rav4', 'Hilux', 'Fortuner'];
            break;

            case 'prius':
                models = ['Prius'];
            break;

            case 'fj-cruiser':
                models = ['FJ Cruiser'];
            break;

            case 'corolla-avensis':
                models = ['Corolla', 'Avensis', 'Yaris', '4Runner', 'Hilux'];
            break;

            case 'camry':
                models = ['Camry'];
            break;

            case 'rav4':
                models = ['Rav4'];
            break;

            case 'otros':
                models = ['Rav4', 'Camry', 'Corolla', 'Auris', 'Yaris'];
            break;

            case 'prius-airbag':
                models = ['Prius'];
            break;

            case 'emisiones-combustible':
                models = ['Auris', 'Corolla', 'Prius', 'Zelas', 'Lexus'];
            break;

            case 'sensor-bolsas-aire':
                models = ['Hilux', 'Lexus'];
            break;

            case 'prius-ramal':
                models = ['Prius'];
            break;

            case 'resorte-valvula':
                models = ['GT 86'];
            break;

            case 'conjunto-sensor':
                models = ['Avensis'];
            break;

            case 'hinozs-sensor-velocidad':
                models = ['Hino ZS'];
            break;

            case 'etios-airbag-piloto':
                models = ['Etios'];
            break;

            case 'otros-airbag-copiloto':
                models = ['4Runner', 'Corolla', 'Etios', 'Lexus GX 460'];
            break;

            case 'rush-airbag-cortina':
                models = ['Rush'];
            break;

            case 'hino-300-funda-posterior':
                models = ['Hino Serie 300'];
            break;

            case 'prius-cinturon-de-seguridad':
                models = ['Prius'];
            break;

            case 'rav4-brazo-de-suspension':
                models = ['Rav4'];
            break;

            case 'corolla-control-airbag':
                models = ['Corolla'];
            break;

            case 'prius-administracion-energia':
                models = ['Prius'];
            break;

            case 'ty-lx-bomba-combustible-1':
                models = ['4RUNNER', 'CAMRY', 'COROLLA', 'FJ CRUISER', 'FORTUNER', 'HILUX', 'LC PRADO'];
            break;

            case 'ty-lx-bomba-combustible-2':
                models = ['GS 350', 'GX 460', 'IS 350 F SPORT', 'IS200t F Sport', 'IS300', 'IS300 F Sport'];
            break;

            case 'ty-lx-bomba-combustible-3':
                models = ['LC500h Sport', 'LS 500H', 'LS600H', 'LX 570', 'LX PLUS', 'NEW GS 350'];
            break;

            case 'ty-lx-bomba-combustible-4':
                models = ['NEW GS F SPORT', 'NX200T F SPORT', 'NX200T PLUS', 'NX200T STD', 'RC350/300H', 'RX 350'];
            break;

            case 'ty-lx-bomba-combustible-5':
                models = ['RX 350 F SPORT', 'RX 450h', 'RX350/450H', 'RX350L/450', 'RX450hL'];
            break;

            case 'rav4-inflador-airbag-piloto':
                models = ['Rav4'];
            break;

            case 'ty-lx-extension-bomba-combustible':
                models = ['Corolla', '4RUNNER', 'NX 300', 'RX 350 F SPORT', 'Otros'];
            break;

            case 'ty-bomba-combustible':
                models = ['Avanzar', 'Rush'];
            break;

            case 'ty-bomba-combustible-alta-presion':
                models = ['Corolla H/B 1.2 Turbo'];
            break;

            case 'ty-extension-bomba-combustible-gt':
                models = ['GT86'];
            break;

            case 'ty-sensor-de-ondas-milimetricas-radar':
                models = ["YARIS GR", "CH-R"];
            break;
            
            case 'ty-yaris-cinturon-de-seguridad':
                models = ["Sedan", "HB"];
            break;

            case 'airbag-frontal-piloto-fabricados-tmuk':
                models = ["Sedan"];
            break;

            case 'reemplazo-conjunto-tubo-ventilacion-tanque-combustible':
                models = ["IS200t", "GS350", "RC350", "IS250", "IS350", "GS-F", "RC-F"];
            break;
        }

        $selectModel = $('select#modelo');
        $selectModel.find('option:gt(0)').remove();

        if( models.length > 1 )
        {
            // var option = '<option value="">Selecciona un modelo</option>';
            $selectModel.append(option);
        }

        for( pos in models )
        {
            var option = '<option value="' + models[pos] + '">' + models[pos] + '</option>';
            $selectModel.append(option);
        }
    }

    var _populate_departments = function()
    {
        $.get('/llamado-revision/framework/revision/departamentos', function(departments){
            for( pos in departments ) {
                var $option = $('<option/>').val(departments[pos]['id']).text(departments[pos]['nombre']);
                $('#frmRegister select#txt_departamento').append($option);
            }
            _populate_delears();
        }, 'json');
    }

    var _populate_delears = function()
    {
        $('#frmRegister select#txt_departamento').off('change').on('change', function(){
            var $that = $(this),
                department_id = $that.val();

            if( ! $that.hasClass('loading') )
            {
                $('#frmRegister select#txt_concesionario option:gt(0)').remove();

                if( department_id != '' ) {

                    $that.addClass('loading');
                    $('span#loader_dealers').removeClass('hide');

                    $.get('/llamado-revision/framework/revision/concesionarios/' + department_id, function(dealers){
                    // $.get('../contact/api/concesionarios.php?departamento=' + department_id, function(dealers){
                        for( pos in dealers ) {
                            var $option = $('<option/>').val(dealers[pos]['id']).text(dealers[pos]['nombre']);
                            $('#frmRegister select#txt_concesionario').append($option);
                        }

                        $that.removeClass('loading');
                        $('span#loader_dealers').addClass('hide');
                    }, 'json');
                }
            }

        });
    }

    var reset = function(form)
    {
        $form = $(form);
        $form.parsley().reset();
        $form.find('input:text, input#email, select').val('');
    }

    var back = function(elm)
    {
        $(elm).parent().addClass('hide').prev().removeClass('hide');
    }

    var form_validation_register = function(form)
    {
        $form = $(form);

        $form.parsley().on('form:validate', function(formInstance) {
            var is_valid = formInstance.isValid();
            log(is_valid);
            if( is_valid )
            {
                if (recaptchaToken != null) {
                    $form_instance = formInstance.$element;

                    if (!$('body').hasClass('block')) {
                        $('body').addClass('block')

                        $.post($form_instance.attr('action'), $form_instance.serializeArray(), function (res) {
                            if (res.success) {
                                reset($form_instance);
                                $('#thanks').removeClass('hide');
                            }

                            $('body').removeClass('block');
                        }, 'json');
                    }
                } else {
                    $('#captcha_error').fadeIn();
                    setTimeout(function () {
                        $('#captcha_error').fadeOut();
                    }, 3000);
                }
            }
        })
        .on('form:submit', function() {
            return false; // Don't submit form for this demo
        });
    }

    return {
        select_box: select_box,
        input_validation_vin: input_validation_vin,
        send_vin: send_vin,
        reset: reset,
        form_validation_register: form_validation_register,
        back: back
    };

})();
