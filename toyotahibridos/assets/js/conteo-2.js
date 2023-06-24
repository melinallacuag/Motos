$(function(){
    var correct_answers = 0;

    $('.q-a .question .option .wrap-option').on('click', function(){

        $qa = $(this).parent().parent().parent();

        $question        = $qa.find('.question');
        $question_height = $question.outerHeight();

        $answer          = $qa.find('.answer');
        $answer.show();
        $answer_height   = $answer.outerHeight();
        $answer.hide();

        $qa_height = $question_height > $answer_height ? $question_height : $answer_height;

        $option_correct = $(this).parent().data('correct');
        if ( $option_correct == '1' ) correct_answers++;

        if ( ! $qa.hasClass('answered') )
        {
            $qa.addClass('answered');

            $check = $(this).find('.check');

            if ( ! $check.hasClass('checked') )
            {
                $check.addClass('checked');

                setTimeout(function(){
                    $qa.height($qa_height);

                    $answer.css({
                        position: 'absolute',
                        top: 0,
                        left: 0
                    });

                    $question.fadeOut();
                    $answer.fadeIn(function(){
                        $qa.removeAttr('style');
                        $answer.removeAttr('style');
                        $answer.show();
                    });

                    if ( $('.q-a.answered').length >= 7 )
                    {
                        $('#resultado').addClass(correct_answers >= 5 ? 'bien' : 'mal' );
                        $('#resultado #count').html('<img src="'+base_url+'assets/img/conteo/conteo-2/'+correct_answers+'_7.png">');
                        $('#resultado').show();
                    }
                }, 500);
            }
        }
    });
});