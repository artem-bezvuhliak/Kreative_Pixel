function Scroll (sSelector) {

	var s = this;

//------------------------------------	
	s.elem 		= $(sSelector);
	s.topBtn 	= s.elem.find(".btn-upstairs");

//------------------------------------

	s.slowScroll = function(event) {
		event.preventDefault();
		$("html,body").stop().animate({scrollTop : 0}, "slow");
	}

//------------------------------------
	s.topBtn.bind("click", s.slowScroll);
}	