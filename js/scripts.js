$(document).ready(function() {
  //Initial hides//
  $("#janswer").hide();
  $("#oanswer").hide();
  $("#vanswer").hide();
$(".card1").click(function() {
  $("#jcard").toggle();
  $("#janswer").toggle();
  });
$(".card2").click(function() {
  $("#ocard").toggle();
  $("#oanswer").toggle();
  });
$(".card3").click(function() {
  $("#vcard").toggle();
  $("#vanswer").toggle();
  });
});
