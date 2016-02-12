$(document).ready(
    function () {
        $(".hoverli").hover(
          function () {
             $('ul.hover-menu').finish().slideDown('medium');
          },
          function () {
             $('ul.hover-menu').finish().slideUp('medium');
          }
    );
});
