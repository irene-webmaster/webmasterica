$(document).ready(function($){
	"use strict";

	//sticky menu
	if ($('.nav-main').length > 0) {
		var $wrapper = $('.nav-main'),
				$wrapperOffset = $wrapper.offset(), $wrapperClone = $wrapper.clone().addClass('sticky');
				$wrapper.parent().prepend($wrapperClone);
				$wrapperClone.hide();
		
		$(window).scroll(function() {
			if ($(window).scrollTop() >= $wrapperOffset.top) {
				$wrapper.css('visibility', 'hidden');
				$wrapperClone.show();
			} else {
				$wrapper.css('visibility', 'visible');
				$wrapperClone.hide();
			}
		});

		// grab an element
		var myElement = document.querySelector(".sticky");
		// construct an instance of Headroom, passing the element
		new Headroom(myElement, {
      tolerance: {
        down: 10,
        up: 1
      }
  	}).init();
	}

	//Main menu initialization
	$(".flexnav").flexNav();

	$('.touch-button').click(function(){
		$(this).toggleClass('close');
	});

	// Portfolio Shuffle Initialize
  shuffleme.init();

  // Smooth Scrollings
  $(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top +10
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

  // Set active menu item
	$('section, footer').each(function(i) {
		var position = $(this).position();
		console.log(position);
		console.log('min: ' + position.top + ' / max: ' + parseInt(position.top + $(this).height()));
		$(this).scrollspy({
			min: position.top,
			max: position.top + $(this).height(),
			onEnter: function(element, position) {
				if(console) console.log('entering ' +  element.id);
				$('.flexnav a[href="#' + element.id + '"]').addClass('active');
			},
			onLeave: function(element, position) {
				if(console) console.log('leaving ' +  element.id);
				$('.flexnav a[href="#' + element.id + '"]').removeClass('active');
			}
		});
	});

	//contact-form
	if ($('#contact-form').length > 0){
		$('#contact-form').on('submit', function(e) {
			$.post('mail.php', $(this).serialize(), function(feedback) {
				$('#contact-form .message p').remove();
				$('#contact-form .message').append(feedback);
			});
			e.preventDefault();
		});
	}
});

// Skills animate
$(window).bind('scroll',function(){
	"use strict";

	var offset = (document.all)?document.body.scrollTop:window.pageYOffset;

	if(offset > 2550){ // 2550 skills bars position in pixels
		$('.software-skills ul li').each(function(){
			var $wd = $(this).find('.progress').attr('data-process');
			
			if($(this).find('.progress').width() === 0) {
				$(this).find('.progress').animate({'width': $wd}, 700); //animating bars
				$(this).find('.value').delay(500).fadeIn("slow"); //appear values
			}
		});
	}
});