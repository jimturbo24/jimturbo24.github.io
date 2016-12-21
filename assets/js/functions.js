$(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();
	clientStuff();

	$("header h1").fitText(1.5, { minFontSize: '20px', maxFontSize: '55px' });
	$("header .kicker").fitText(2, { minFontSize: '14px', maxFontSize: '26px' });
	$(".biglink").fitText(1.5, { minFontSize: '26px', maxFontSize: '72px' });

});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt(){

	$('.thumb-unit').click(function(){
			$('.work-slider').css('left','-100%');
			$('.work-container').show();
	});

	$('.work-return').click(function(){
			$('.work-slider').css('left',' 0%');
			$('.work-container').hide(800);
	});
}

function workLoad(){
	$.ajaxSetup({ cache: false });

	$('.thumb-unit').click(function() {
		var $this = $(this)
		var newTitle = $this.find('strong').text();
		var newFolder = $this.data('folder');
		var spinner = '<div class="loader">Loading...</div>';
		var newHTML = '/work/' + newFolder + '.html';

		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);

	});
}

function clientStuff() {
	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');
	$('.clients-mobile-nav span').first().addClass('active-client');


	$('.client-logo, .clients-mobile-nav span').click(function() {
		var $this = $(this);
		var $siblings = $this.parent().children();
		var position = $siblings.index($this);

		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$siblings.removeClass('active-client');
		$this.addClass('active-client');
	});

	$('.client-controls-next, .client-controls-prev').click(function() {

		var $this = $(this);
		var curActiveClient = $('.clients-slider').find('.active-client');
		position = $('.clients-slider').children().index(curActiveClient);
		clientNum = $('.client-unit').length;

		if ($this.hasClass('client-controls-next')) {

			if (position < clientNum - 1) {
				$('.active-client').removeClass('active-client').next().addClass('active-client');
			}
			else {
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-client').first().addClass('active-client');
			}
		}
		else {
			if (position > 0) {
				$('.active-client').removeClass('active-client').prev().addClass('active-client');
			}
			else {
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-client').last().addClass('active-client');
			}
		}
	});
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

	})( jQuery );
