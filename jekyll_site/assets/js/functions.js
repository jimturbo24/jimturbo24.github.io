$(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();

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
