// Simple interactivity using jQuery
$(function(){
  $('.nav-toggle').on('click',function(){
    $('.main-nav').slideToggle(200);
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click',function(e){
    var target = $(this.getAttribute('href'));
    if(target.length){
      e.preventDefault();
      $('html,body').animate({scrollTop: target.offset().top - 20}, 400);
    }
  });

  // Fake contact form submission
  $('#contactForm').on('submit',function(e){
    e.preventDefault();
    var name = $(this).find('[name=name]').val() || 'Friend';
    alert('Thanks, ' + name + '! Your message has been received.');
    $(this)[0].reset();
  });
});
