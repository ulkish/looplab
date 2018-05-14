$(document).ready(function() {
  // Crea efecto de smooth scrolling
  $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - 50
    }, 800 );
    e.preventDefault();
  });
});
