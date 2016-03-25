$(document).ready(function() {
  $("form.userInfo").submit(function(event) {

    var score= 0;

    var result= parseInt($("#transport").val());
    score += result;
    var result= parseInt($("#season").val());
    score += result;
    var result= parseInt($("#weather").val());
    score += result;
    var result= parseInt($("#nightlife").val());
    score += result;
    var result= parseInt($("#culture").val());
    score += result;
    var result= parseInt($("#ease").val());
    score += result;
    var result= parseInt($("#kids").val());
    score += result;
    result = parseInt($("input:radio[name=celebs]:checked").val());
    score += result;
    console.log(score);

    if (score <= 30) {
      $(".resultsHead").show();
      $(".miami").show();
      $(".miamiContainer").show();
      $(".miami-content").show()
      $(".surveyH1").hide();
    } else if (score > 30 && score <= 60) {
      $(".resultsHead").show();
      $(".portland").show();
      $(".portlandContainer").show();
      $(".portland-content").show()
      $(".surveyH1").hide();
    } else if (score > 60 && score <= 90) {
      $(".resultsHead").show();
      $(".newYork").show();
      $(".newYorkContainer").show();
      $(".newYork-content").show()
      $(".surveyH1").hide();
    } else if (score > 90 && score <= 120) {
      $(".resultsHead").show();
      $(".tokyo").show();
      $(".tokyoContainer").show();
      $(".tokyo-content").show()
      $(".surveyH1").hide();
    } else {
        alert("Please fill out our surevey to get a destination recommendation.")
        location.reload();
    }



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
