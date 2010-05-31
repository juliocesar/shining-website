$(document).ready(function() {
  // Generates a nice looking table of contents
  $('header').after('<section id="toc"><ol></ol></section>');  
  $('section h1').each(function() {
    var container = $(this).parents(':first'), text = $(this).text();
    $('#toc ol').append('<li><a href="#' + container.attr('id') + '">' + text + '</a></li>')
  });
  $('#toc').prepend('<h1>Table of contents</h1>');  
});