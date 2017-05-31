$(document).ready(function(){
  //Initial hides//
  $("#janswer").hide();
  $("#oanswer").hide();
$(".card1").click(function(){
  $("#jcard").toggle();
  $("#janswer").toggle();
});
$(".card2").click(function(){
  $("#ocard").toggle();
  $("#oanswer").toggle();
});
});
