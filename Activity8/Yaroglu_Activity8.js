var b = document.querySelector("#movingbutton");
var count = 0;
var a = 500;

b.addEventListener("mouseover",()=>setTimeout(change,a));

var btn = document.getElementById("movingbutton");

btn.onclick = function(){
	count++;
	console.log('here',count);
	if(count==3){
		alert("Level 2")
		a = a-100;
	}
	if(count==6){
		alert("Level 3")
		a = a-100;
	}
	if(count==9){
		alert("Level 4")
		a = a-100;
	}
	if(count==12){
		alert("Level 5")
		a = a-100;
	}
	if(count==15){
		alert("Level 6")
		a = a-100;
	}
}


function change()
{
let i = Math.floor(Math.random()*300)+1;
let j = Math.floor(Math.random()*300)+1;
    b.style.left = i + "px";
    b.style.top = j + "px";
	
};