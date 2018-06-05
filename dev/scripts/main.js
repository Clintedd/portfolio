const app = {};


//TypeIt javascript starts//

app.headerHello = new TypeIt('#typeHello', {
  strings: ["Hello! I'm"],
  speed: 150,
  cursor: false
});

app.headerName = new TypeIt('#typeName', {
  strings: ['Clint Lee', 'Web Developer'],
  speed: 150,
  deleteSpeed: 100,
  cursor: false,
  startDelay: 2000
});

app.headerNameKo = new TypeIt('#typeNameKo', {
  strings: ['웹 프로그래머'],
  speed: 230,
  deleteSpeed: 100,
  cursor: false,
  startDelay: 4120
});

//TypeIt javascript ends//

app.menuToggle = () => {
  $('.toggleMenu').on('click', function() {
    $('header ul').toggleClass('open');
  })
}

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

app.init = function() {
  app.smoothScroll();
  app.menuToggle();
}

$(function() {
  app.init();
})