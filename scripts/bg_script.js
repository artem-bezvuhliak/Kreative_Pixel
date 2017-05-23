	var $header = $(".b-header");
	var $bullets = $(".b-bullets__item");
	var activeClass = "b-bullets__item--active";
	
	var images = [
		"../images/creative_people3.jpg",
		"../images/creative_people4.jpg",
		"../images/creative_people2.jpg",
	];
	
	function setBackgroundImage(index) {
		var imageUrl = images[index];
		$header.css('background-image', 'url(' + imageUrl + ')');
	}
	
	$bullets.each(function(index) {
		var $element = $(this);
		$element.on("click", function() {
			setBackgroundImage(index);
			$bullets.removeClass(activeClass);
			$element.addClass(activeClass);
		});
	});