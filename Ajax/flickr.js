var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
"format=json&jsoncallback=?&tags=waterfall,yosemite";

$.getJSON(url, function(data){
    var html = "";
    $.each(data.items, function(i, item){
        html += "<h2>" + item.title + "</h2>";	
        html += "<img src=" + item.media.m + ">";
        html += "<p></p>";
    });

    $("#photos").html(html);
});          
