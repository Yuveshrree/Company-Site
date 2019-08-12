$(function() {

	// $('nav ul li a').click(function(){
	// 	$(this).addClass('active-link');
	// });
	$('.navbar-toggle').click(function(){
		$('nav').slideToggle();
		$('.nav-bars').toggleClass('open');
	});

	$('.caret').click(function(){
		$('.job-list .options').css('max-height', '450px');
	})


	$('[data-popup-open]').on('click', function()  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
	});

	$('[data-popup-close]').on('click', function()  {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
	});


	$('.list').hide();
	$('.list').first().show();
	$('.states').first().addClass('active');
	$('.states').click(function() {
		$('.states').removeClass('active');
		$('.list').hide();
		$('#list-' + $(this).attr('target')).show();
		$(this).addClass('active');
		// $('.job-list .options').css('max-height', '70px');
  });

});