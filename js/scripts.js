//Back End

var answers = [];
var new_array = [];
var change_array = function(new_array) {
  new_array.push(answers[1])
  new_array.push(answers[0])
  new_array.push(answers[2])
};

//Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    answers = [question1, question2, question3, question4, question5];
    change_array(new_array);
    alert(new_array);

    $("#output").text(answers[0]);
    $("#output2").text(answers[1]);
    $("#output3").text(answers[2]);
    $("#output4").text(answers[3]);
    $("#output5").text(answers[4]);
    event.preventDefault();
  });

});
