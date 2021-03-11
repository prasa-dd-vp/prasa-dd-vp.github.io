(function($) {
  "use strict"; // Start of use strict
  document.getElementById('main').style.backgroundColor = 'white';
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //switch to dark and light theme
  var switchToDarkMode = true;
  $('#light-dark-switch').click(function(){
    if (switchToDarkMode){
      document.getElementById('main').style.backgroundColor = 'black';
      switchToDarkMode = false;
    } else{
      document.getElementById('main').style.backgroundColor = 'white';
      switchToDarkMode = true;
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
