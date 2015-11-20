//  ========== 
//  = Animated Scroll = 
//  ========== 
//jQuery(document).ready(function(){
	//jQuery('#topnav').localScroll(3000);
	//jQuery('#startbtn').localScroll(5000);
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	//jQuery('#top-section').parallax("50%", 0.1);
	//jQuery('#work').parallax("50%", 0.3);
	//jQuery('#about').parallax("50%", 0.1);
	//jQuery('#services').parallax("50%", 0.1);
	//jQuery('#contact').parallax("50%", 0.1);

//});

//  ========== 
//  = Auto Slide = 
//  ========== 
$('#myCarousel').carousel({
    interval: 3200
});

$('.navbar').scrollspy()

//hide menu after click on mobile
jQuery('.nav-collapse .nav > li > a').click(function(){
	jQuery('.collapse.in').removeClass('in').css('height', '0');
});

//  ========== 
//  = Portfolio Filter = 
//  ========== 
jQuery.noConflict()(function($){
	var $container = $('#container-folio');
		
	if($container.length) {
		$container.waitForImages(function() {
			
			// initialize isotope
			$container.isotope({
			  itemSelector : '.box',
			  layoutMode : 'fitRows'
			});
			
			// filter items when filter link is clicked
			$('#filters a').click(function(){
			  var selector = $(this).attr('data-filter');
			  $container.isotope({ filter: selector });
			  $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
			  
			  return false;
			});
			
		},null,true);
	}
});

//custom modal//
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})