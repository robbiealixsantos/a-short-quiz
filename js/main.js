$(document).ready(function() {  
    generateQuestion(0);
});

var i = 0;
var correctCount = 0 ;

function generateQuestion(index) {
    $('input[type=radio]').prop('checked',false);               
    $("#question").html(quizDataJson[index].question);
    $("#answerOption1Label").html(quizDataJson[index].option1);
    $("#answerOption2Label").html(quizDataJson[index].option2);
    $("#answerOption3Label").html(quizDataJson[index].option3);
}

function checkAnswer() {
    var rightAnswer = $("#answerStatus").html("You got it right!");

    if($('#answerOption1').is(':checked') && quizDataJson[i].option1 == quizDataJson[i].answer) { 
        correctCount++; 
        rightAnswer;
    }
    else if($('#answerOption2').is(':checked') && quizDataJson[i].option2 == quizDataJson[i].answer) {
        correctCount++;
        rightAnswer;
    }
    else if($('#answerOption3').is(':checked') && quizDataJson[i].option3 == quizDataJson[i].answer) {
        correctCount++;
        rightAnswer;
    }
    else {
        $("#answerStatus").html("You got it wrong!");
    }
      
    i++;

    if(quizDataJson.length - 1 < i){
        $("#feedbackModalLabel").html("You're all done!")
        $("#answerStatus").html("You finished with " + correctCount + " questions correct out of " + quizDataJson.length);
        $('#answerStatus').after('<div>Exiting this popup will refresh the page.</div>');
        $('#feedbackModal').modal('show');
        $('#feedbackModal').on('hidden.bs.modal', function () {
            location.reload(true);
        });
    }

    $("#currentScore").html("Current Score: " + correctCount + " out of " + quizDataJson.length);

    $('#feedbackModal').modal('show');
    generateQuestion(i);
}  