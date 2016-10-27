/** 
 * Designed by @Taras Shypka
 * https://dribbble.com/Bugsster
 * Coded by @Balaj Marius for @Designmodo
 * http://mariusbalaj.com | http://designmodo.com
 */
;(function($, window, document,undefined) {
var $poster = $('.poster2');
$(window).on('mousemove', function(e) {
	
  var w = $(window).width(), //window width
    h = $(window).height(), //window height
    offsetX = 0.5 - e.pageX / w, //cursor position X
    offsetY = 0.5 - e.pageY / h, //cursor position Y
    dy = e.pageY - h / 2, // @h/2 = center of poster
    dx = e.pageX - w / 2, // @w/2 = center of poster
    theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
    angle = theta * 180 / Math.PI - 90, //convert rad in degrees
    offsetPoster = $poster.data('offset'),
    transformPoster = ' rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }
  //poster transform
  $poster.css('transform', transformPoster);
});
})(jQuery, window, document);