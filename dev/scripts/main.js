const app = {};

//TypeIt JavaScript starts//

app.headerName = new TypeIt('#typeName', {
  strings: ['CLINT'],
  speed: 150,
  cursor: false,
  startDelay: 2000,
});

app.headerNameKo = new TypeIt('#typeNameKo', {
  strings: ['Web Developer', 'Vocalist', 'Drone Enthusiast', 'KBBQ Master'],
  speed: 150,
  deleteSpeed: 50,
  cursor: false,
  breakLines: false,
  startDelay: 3000,
  loop: true
});

//TypeIt JavaScript ends//

//smoothScroll JavaScript starts//

app.smoothScroll = () => {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            const $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

//smoothScroll JavaScript ends//

//responsiveNav JavaScript starts//

app.burgerAnimate = () => {
  $('.hamburger-menu').click(function() {
    $('.hamburger-menu').toggleClass('active');
    $('.hamburger-ul').toggleClass('active-ul');
  });
}

app.closeNav = () => {
  $('.nav-item').click(function() {
    $('.hamburger-menu').toggleClass('active');
    $('.hamburger-ul').toggleClass('active-ul');
  })
}

//responsiveNav JavaScript ends//

//displayNone JavaScript starts

app.displayNone = function() {
  // $('.ti-cursor').css('display', 'none');
}

//displayNone JavaScript ends

//app.init starts//

app.init = function() {
  app.smoothScroll();
  app.burgerAnimate();
  app.closeNav();
  app.displayNone();
}

//app.init ends//


$(function() {
  AOS.init();
  app.init();
})