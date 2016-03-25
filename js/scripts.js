$(document).ready(function() {
  $("form.userInfo").submit(function(event) {

    var score= 0;

    var result= parseInt($("#transport").val());
    score += result;
    console.log(score);
    var result= parseInt($("#season").val());
    score += result;
    console.log(score);
    var result= parseInt($("#weather").val());
    score += result;
    console.log(score);
    var result= parseInt($("#nightlife").val());
    score += result;
    console.log(score);
    var result= parseInt($("#culture").val());
    score += result;
    console.log(score);
    var result= parseInt($("#ease").val());
    score += result;
    console.log(score);
    var result= parseInt($("#kids").val());
    score += result;
    console.log(score);
    result = parseInt($("input:radio[name=celebs]:checked").val());
    score += result;
    console.log(score)

    if (score <= 30) {
      $(".miami").show();
    } else if (score > 30 && score <= 60) {
      $(".portland").show();
    } else if (score > 60 && score <= 90) {
      $(".newYork").show();
    } else if (score > 90 && score <= 120) {
      $(".tokyo").show();
    } else if (score = NaN) {
      alert("Please fill out our surevey to get a destination recommendation.")
    } else {

    }
    // if (score < 60) {
    //   $(".conservative").show();
    // } else if (score === 60) {
    //   $(".independent").show();
    // } else {
    //   $(".liberal").show();
    // }


    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form.userInfo").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    $(".name").text(nameInput);
    $(".date").text(dateInput);
    // console.log(nameInput, dateInput);
    $(".results1").show();
    $(".userInfo").hide();
    event.preventDefault();
  });
});
