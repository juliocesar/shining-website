$(document).ready(function() {
  $.fn.oneAtEachTime = function(method, args, after) {
    var collection = this, index = 0;
    (function(e) {
      $(e)[method].apply($(e), args);
      var closure = arguments.callee, next = collection.get(index++);
      if (next) { setTimeout(function() { closure(next); }, (parseInt(after) || 1000)); };
    })(this.get(index));
  };  
  
  // Generates a nice looking table of contents
  $('header').after('<section id="toc"><ol></ol></section>');  
  $('#toc').prepend('<h1>Table of contents</h1>');
  $('section h1').each(function() {
    var container = $(this).parents(':first'), text = $(this).text();
    $('#toc ol').append('<li style="display: none"><a href="#' + container.attr('id') + '">' + text + '</a></li>')
  });
  $('#toc ol li').oneAtEachTime('fadeIn', [], 100);
});