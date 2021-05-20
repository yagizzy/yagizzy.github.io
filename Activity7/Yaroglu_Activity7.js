var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {

   if($("name").value==""){	
	alert("You must enter a name and a valid score");
	return false;
   }
   else
	  names.push($("name").value);
  if($("score").value==""){
	 alert("You must enter a name and a valid score");
	return false;
  }else if(100<$("score").value || 0>$("score").value ){
	  alert("You must enter a name and a valid score");
	return false;
  }
  else
	  scores.push($("score").value);
	   
};


var Results = function () {
  var sum = 0;
  var high=0;
  var name;
  var j;
for( var i = 0; i < scores.length; i++ ){
    j = parseInt(scores[i],10);
    sum += j;
    if (j>high) high=j; 
	if(scores[i]==high) name=names[i];
}
var avg = sum/scores.length;

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("Results");
    h2.appendChild(h2Text);
    document.getElementById("results").appendChild(h2);
    var avgg = document.createElement("p");
    var avgText = document.createTextNode("Average Score = " + avg);
    avgg.appendChild(avgText);
    document.getElementById("results").appendChild(avgg);
    var highest = document.createElement("p");
    var highText = document.createTextNode("Highest Score = " + name + " with a score of " + high );
    highest.appendChild(highText);
    document.getElementById("results").appendChild(highest);

};

var displayResults = function () {
    Results();
};

var displayScores = function () {
	
    var table = $("scores_table");
	var header = table.createTHead();
	var row = header.insertRow(0);
    var cellName = row.insertCell(0);
	var cellScores = row.insertCell(1);
    cellName.innerHTML = "<b>Name</b>";
	cellScores.innerHTML = "<b>Scores</b>";
	var rowH2 = table.insertRow(0);
    var cellH2 = rowH2.insertCell(0);
    var h2Node = document.createElement("h2");
    var h2TextNode = document.createTextNode("Scores");
    h2Node.appendChild(h2TextNode);
    cellH2.appendChild(h2Node);
    for (i = 0; i < scores.length; i++) {
		var row = table.insertRow(-1);
        var textNode = document.createTextNode(names[i]);
        var cellNode = row.insertCell(-1);
        cellNode.appendChild(textNode);
        var scoreNode = document.createTextNode(scores[i]);
        var cellNode2 = row.insertCell(-1);
        cellNode2.appendChild(scoreNode);
    }

};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};