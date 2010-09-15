(function($) {
  var whatWeDo = $('section#what-we-do'),
    topLeft = $('img#top-left-arrow'),
    topRight = $('img#top-right-arrow'),
    bottomLeft = $('img#bottom-left-arrow'),
    bottomRight = $('img#bottom-right-arrow'),
    prototyping = $('section#prototyping'),
    webdev = $('section#web-development'),
    design = $('section#design'),
    consulting = $('section#consulting'),
    cool = (Modernizr.csstransforms && Modernizr.fontface),
    iDevice = !!navigator.userAgent.match(/iPhone|iPad/);
  
  if (!cool || iDevice) return false;

  $(window).resize(function() {
    var offset = whatWeDo.offset();

    $(topLeft).css({
      left: (offset.left - ($(topLeft).outerWidth() / 100 * 120)) + 'px',
      top: (offset.top - ($(topLeft).outerHeight() / 100 * 90)) + 'px',
      height: ((offset.top) - (prototyping.offset().top + prototyping.outerHeight())) + 'px',
      width: (offset.left - (prototyping.offset().left + (prototyping.outerWidth() / 100 * 50))) + 'px'
    });

    $(topRight).css({
      left: (offset.left + (whatWeDo.outerWidth() / 100 * 90)) + 'px',
      top: (offset.top - $(topRight).outerHeight()) + 'px',
      height: (offset.top - (design.offset().top + design.outerHeight())) + 'px',
      width: ((design.offset().left + (design.outerWidth() / 100 * 65)) - (offset.left + whatWeDo.outerWidth())) + 'px'
    });

    $(bottomLeft).css({
      left: (offset.left - ($(bottomLeft).outerWidth() / 100 * 120)) + 'px',
      top: (offset.top + (whatWeDo.outerHeight() / 100 * 90)) + 'px',
      height: ((webdev.offset().top) - (offset.top + (webdev.outerHeight() / 100 * 130))) + 'px',
      width: ((offset.left + (webdev.outerWidth() / 100 * 50)) - (offset.left + whatWeDo.outerWidth())) + 'px'
    });

    $(bottomRight).css({
      left: (offset.left + (whatWeDo.outerWidth() / 100 * 80)) + 'px',
      top: (offset.top + (whatWeDo.outerHeight() / 100 * 90)) + 'px',
      height: ((consulting.offset().top) - (offset.top + consulting.outerHeight())) + 'px',
      width: ((consulting.offset().left + (consulting.outerWidth())) - (offset.left + whatWeDo.outerWidth())) + 'px'
    });
  });
  
  $('section > h1 > a').toggle(
    function(e) {
      $('section > h1 > a.active').trigger('click').removeClass('active');
      $(this).addClass('active');
      $(this).parents('section')
        .find('hr').fadeIn().end()
        .find('ul').slideDown(300);
    },
    function() {
      $(this).removeClass('active');
      $(this).parents('section')
        .find('hr').fadeOut(100).end()
        .find('ul').slideUp(100);
    }
  );
  
  $('body').click(function(e) {
    if (e.target == this) $('section > h1 > a.active').trigger('click');
  });

  $(window).load(function() {
    setTimeout(function() {
      $('img.arrow').show();
      $(window).trigger('resize');
    }, 300);
  });
  $(window).trigger('resize');
  return true;
})(jQuery);