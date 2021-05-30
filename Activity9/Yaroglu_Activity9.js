$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		var img = $(this).attr("href");
		$("#image").attr("src", img);
				
		var title = $(this).attr("title");
		$("#title").text(title);

		// cancel the default action of the link
	    evt.preventDefault();
		var img = $(this).attr("href");
		var title = $(this).attr("title");
		
		$("#title").fadeOut(1000,function(){
			$("#title").text(title).fadeIn(1000);
		});
	$("#image").fadeOut(1000,function(){
		$("#image").attr("src",img).fadeIn(1000);
	});
	}); // end click
	
	// move focus to first thumbnail
	
	$("li:first-child a").focus();
	$("#image").hide().fadeIn(1000);
	$("#title").hide().fadeIn(1000);
}); // end ready