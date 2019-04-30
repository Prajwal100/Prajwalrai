$(document).ready(function (){
  
	"use strict";
	 // Preloader
	 $(window).on('load', function () {
		if ($('#preloader').length) {
		  $('#preloader').delay(100).fadeOut('slow', function () {
			$(this).remove();
		  });
		}
	  });
	
	// wow animation
	new WOW().init();
	// message popup
	$(document).ready(function(){
		$("#contact-box").click(function(){
			$("#form").toggle();
		});
	});
	// bottom-top
$(document).ready(function(){
	$(window).scroll(function() {
		 if ($(this).scrollTop() >75) {
			 $('.back-to-top').fadeIn();
		 } else {
			 $('.back-to-top').fadeOut();
		 }
	   });
	});
   $('.back-to-top').click(function(){
	 $('body,html').animate({
	   scrollTop:0
	 },800);
	 return True;
   });

   
     //smooth scroll
	 var scroll = new SmoothScroll('a[href*="#"]',{
		 speed:500
	 });


	/* Setting Sizes 
	-----------------------------------------------------*/
	
	function setSizes() {
		
		/* General */
		$('.logo-content').css({'margin-top': '-'+($('.logo-content').height()/2)+'px'});
		
		/* Profile */
		
		$('.profile-content').css({'margin-top': '-'+($('.profile-content').height()/2)+'px'});
		
		/* Portfolio */
		$('.project-info').css({'margin-top': '-'+($('.project-info').height()/2)+'px'});
		
		/* Contact */

		
	}
	
	setSizes();
	$(window).resize(function() {
	  setSizes();
	  checkPhotos();
	});
	
	/* Navigation
	-----------------------------------------------------*/
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='down') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: 1 });
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='up') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: function() {
		  return -$(this).height()+1;
		}
	  });
	


});




