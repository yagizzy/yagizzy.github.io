$(document).ready(function() {
     $("#vprospect").click(function() {
          $("#solution").load("solutions.html #vprospect");
     });
     $("#vconvert").click(function() {
          $("#solution").load("solutions.html #vconvert");
     });
     $("#vretain").click(function() {
          $("#solution").load("solutions.html #vretain");
     });
});