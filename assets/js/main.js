(function($) {
    "use strict";
	
	$(document).ready(function(){
		var $arc_text	= $('.arc');
		$arc_text.arctext({radius: 300});
		
		$('#slider').flexslider({
			animation: "fade",
			selector: ".slider-item",
			directionNav: false
		});
		
		$('.share-toggler').click(function(e){
			e.preventDefault();
			$('.share-tools').toggleClass('toggle');
		});
		$("a.youtube-button").fancybox();
		
		$('.floating-share a').click(function (event){
			event.preventDefault();
			var share_url = document.location,
				windowName = "popUp",
				windowSize = "width=500,height=200,resizable=0,scrollbars=0",
				url = '';
			
			if ( $(this).hasClass('facebook') ) {
				url = 'http://www.facebook.com/sharer/sharer.php?u=' + share_url + '&title=Garuda Indonesia';
			} else if ( $(this).hasClass('twitter') ) {
				url = 'http://twitter.com/intent/tweet?status=Garuda Indonesia+' + share_url;
			} else if ( $(this).hasClass('google-plus') ) {
				url = 'https://plus.google.com/share?url=' + share_url;
			}
			window.open(url, windowName, windowSize);

		});
		
		$('.slider-footer-toggler').click(function(e){
			e.preventDefault();
			console.log($(this).parent().toggleClass('toggle'));
		});
		
		$('.nav-toggler').click(function(e){
			e.preventDefault();
			$('.main-nav').addClass('toggle');
		});
		$('.nav-close').click(function(e){
			e.preventDefault();
			$('.main-nav').removeClass('toggle');
		});
	});
	
})(jQuery);