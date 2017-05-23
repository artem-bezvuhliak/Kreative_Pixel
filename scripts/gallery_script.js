function Gallery(sSelector){
	var g = $(this);

	g.gallery 			= $(sSelector);	
	g.pictures  		= g.gallery.find(".b-picture-container");
	g.preview 			= g.gallery.find(".b-preview");
	g.previewImage 		= g.gallery.find(".b-preview__image");
	g.closeIcon 		= g.gallery.find(".b-close-icon")
	g.current			= 0;

	g.showPreview = function() {
		var picture = $(this);
		g.current = g.pictures.index(picture); // сохраняем в свойство current порядковый номер дива с картинкой по которой мы кликаем
		g.display(picture); // показываем превью с большой картинкой
	} // показать блок

	g.closePreview = function(event) {
		if (!event || $(event.target).hasClass("b-preview")) {
			g.preview.removeClass("b-show-preview");
		}
	} // скрыть блок

	g.display = function(oPicture) { 
		var smallImage = oPicture.find(".b-picture")
			,bigImageSrc = smallImage.attr("src").replace("small_", ""); // заменяем путь
			//console.log(bigImageSrc);


			g.previewImage.attr("src", bigImageSrc); // подставим в превью путь к большому фот
			g.preview.addClass("b-show-preview"); // сделаем видимым блок превью
	} // получение пути большого фото

	g.pictures.click(g.showPreview); // при щелчке  по изображ. 
	g.preview.click(g.closePreview); // при щелчке вне изображения
}	

