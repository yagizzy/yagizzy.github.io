
//$(document).ready(function(){
// var url =
 // "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler/4345" 
 // $.getJSON(url, function(data) {
 // var html = "";
 // $.each(data, function(){
 //  html = "<h2>" + data.Adi+ "</h2>";
 //  html += "<img src=" + data.Resim + ">";
 //  html += "<h2>" + data.Aciklama+ "</h2>";
 // });
 // $("#listele").html(html);
// });
 // });
 
 
 $.ajax({
            url:"https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler/4345",
            dataType:"json",
            async:false,
            type:"GET",
            success:function (data){
                for (var i=1;i<4;i++){
                    $("#listele"+i+"").append(data[i]);
                }
            },
            error(){
                console.log("error");
            }
        })