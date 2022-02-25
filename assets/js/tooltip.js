$(document).ready(function() {
  //initializing tooltip
  $('[data-toggle="tooltip"]').tooltip();
});


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

// optional
		$('#blogCarousel').carousel({
				interval: 5000
		});
