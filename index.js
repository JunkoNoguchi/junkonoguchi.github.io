$(function() {

  $('form button').on('click', function(event) {
      event.preventDefault();
      $("form").fadeOut(2000);
  })

  $(".about-flex").hide();

  $(".about").on('mouseenter', function() {
    $(".about-flex").slideDown(4000);
  })

});
