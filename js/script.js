$(document).ready(function () {
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
		ScrollReveal().reveal('.animate-left',{
		origin: 'left',
		duration: 1000,
		distance: '25rem',
		delay:300
	});
	ScrollReveal().reveal('.animate-right',{
		origin: 'right',
		duration: 1000,
		distance: '25rem',
		delay:600
	});
	ScrollReveal().reveal('.animate-top',{
		origin: 'top',
		duration: 1000,
		distance: '25rem',
		delay:300
	});
	ScrollReveal().reveal('.animate-bottom',{
		origin: 'bottom',
		duration: 1000,
		distance: '25rem',
		delay:300
	});
});