$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#directors").append(
                    <b>"Title: "</b> + value.title + "<br>" + 
                   "Name: " + value.name + "<br>" 
                );
            });
        }); 
    });
});
