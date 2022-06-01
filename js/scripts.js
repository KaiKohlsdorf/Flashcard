$(document).ready(function() {
  $(".JSClickable").click(function() {
    $(".JSShowing").toggle();
    $(".JSHidden").toggle();
  });
  $(".opClickable").click(function() {
    $(".opShowing").toggle();
    $(".opHidden").toggle();
  });

});