$(function(){
    $("#birthday").datepicker();
});
var pls = [
    "ActionScript", 
    "AppleAcript", 
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
    ];
$( "#pl" ).autocomplete({
    source: pls 
    });