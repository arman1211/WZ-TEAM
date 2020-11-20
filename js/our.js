 $(function(){
 $('#about-block').hover(function(){
 	$('#about').stop().slideToggle();

 });
  $('#team-block').hover(function(){
 	$('#team').stop().slideToggle();

 });
   $('#services-block').hover(function(){
 	$('#service').stop().slideToggle();

 });
    $('#contact-block').hover(function(){
 	$('#contact').stop().slideToggle();

 });



$('#about-block').click(function(){
 	$.scrollify.move('#about');

 });








 $('.first.circle').circleProgress({
    value: 0.92
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
  });

$('.second.circle').circleProgress({
    value: 0.45
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(45 * progress) + '<i>%</i>');
  });

  $('.third.circle').circleProgress({
    value: 0.67
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(67 * progress) + '<i>%</i>');
  });



});