(function(a){a.fn.validCampo=function(b){a(this).on({keypress:function(a){var c=a.which,d=a.keyCode,e=String.fromCharCode(c).toLowerCase(),f=b;(-1!=f.indexOf(e)||9==d||37!=c&&37==d||39==d&&39!=c||8==d||46==d&&46!=c)&&161!=c||a.preventDefault()}})}})(jQuery);

$(function(){
    $('.letteronly').validCampo(' abcdefghijklmnñopqrstuvwxyzáéíóú');
    $('.numberonly').validCampo('0123456789- ');
    $('.placa_alpha').validCampo('0123456789abcdefghijklmnñopqrstuvwxyz');

    $('form').on('submit', function(e){
        e.preventDefault();

        $form = $(this);

        $form.parsley().validate();

        if( $form.parsley().isValid() )
        {
            if (recaptchaToken != null) {
                if( ! $form.hasClass('sending') )
                {
                    $form.addClass('sending');

                    $form[0].submit();
                }
            } else {
                $('#captcha_error').fadeIn();
                setTimeout(function () {
                $('#captcha_error').fadeOut();
                }, 3000);
            }
        }
    });

    $('select').select2({
        minimumResultsForSearch: Infinity
    });

    // $('input#placa').inputmask('***-***',{ 'placeholder': '___-___' });

    $('select#departamento').on('change', function(){
        $this = $(this);
        var departamento_id = $.trim($this.val());

        if(departamento_id != '')
        {
            $.get(base_url + 'consultas/concesionarios/' + departamento_id, function(concesionarios){
                $select_concesionarios = $('select#concesionario');

                // $select_concesionarios.select2('destroy');
                $select_concesionarios.find('option:gt(0)').remove();

                $.each(concesionarios, function(index, concesionario){
                    $option = $('<option />').val(concesionario.id).text(concesionario.nombre.toUpperCase()).data('direccion', concesionario.direccion);
                    $select_concesionarios.append($option);
                });

                // $select_concesionarios.select2({minimumResultsForSearch: Infinity});
            });
        }
    });

    $('select#concesionario').on('change', function(){
        $('#concesionario-direccion').text($(this).find('option:selected').data('direccion'));
    });
});