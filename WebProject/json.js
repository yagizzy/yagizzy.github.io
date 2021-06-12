$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
				.then(veri=>console.log(directors));
                $("#directors").append(
                    "Title: " + value.title + "<br>" + 
                   "Name: " + value.name + "<br>" 
                );
            });
        }); 
    });
});
