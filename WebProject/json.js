$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
				console.log(data);
                $("#directors").append(
                    "Title: " + value.title + "<br>" + 
                   "Name: " + value.name + "<br>" 
                );
            });
        }); 
    });
});
