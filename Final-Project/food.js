// $(document).ready(function () {
//     $(".hoverli").hover(
//   function () {
//      $('ul.hover-menu').slideDown('medium');
//   },
//   function () {
//      $('ul.hover-menu').slideUp('medium');
//   }
// );
// });
$('nav li ul').hide().removeClass('hover-menu');
$('nav li').hover(
  function() {
    $('ul', this).stop().slideDown(50);
  },
  function() {
    $('ul', this).stop().slideUp(50);
  }
);
// $('.text').hide().removeClass('text').addClass('text-js');

//$('.thumb').hover(function(){
    // $(this).find('.text-js').fadeToggle();
//});
