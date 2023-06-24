$(function(){
    /*var $body    = $('html, body'), // Define jQuery collection
        content  = $('#mainContainer').smoothState({
            onStart : {
                duration: 250,
                render: function () {
                    content.toggleAnimationClass('is-exiting');
                    $body.animate({ 'scrollTop': 0 });
                }
            }
        }).data('smoothState');*/

    $('.alphanum').alphanum({});
    $('.alpha').alpha({});
    $('.numeric').numeric({});

    $('a.back').on('click', function(e){
        e.preventDefault();
        Revision.back(this);
    });

    $('#boxes .box').on('click', function(e){
        e.preventDefault();
        Revision.select_box(this);
    });

    Revision.input_validation_vin('#vin form .field.field-input input');

    $('#vin form#frmVin').on({
        submit: function(e)
        {
            e.preventDefault();
            Revision.send_vin(this);
        }
    });

    Revision.form_validation_register('#vin_valid form#frmRegister');

    $('#vin_valid form#frmRegister button#reset').on({
        click: function(e)
        {
            e.preventDefault();
            Revision.reset('#vin_valid form#frmRegister');
        }
    });

    $('#thanks button').on('click', function(e){
        e.preventDefault();
        $('#boxes').removeClass('hide');
        $('#vin, #vin_result, #vin_result #vin_valid, #vin_result #vin_no_valid, #thanks').addClass('hide');
    });
});