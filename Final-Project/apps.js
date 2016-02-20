$('nav li ul').hide().removeClass('hover-menu');
$('nav li').hover(
  function() {
    $('ul', this).stop().slideDown(50);
  },
  function() {
    $('ul', this).stop().slideUp(50);
  }
);
