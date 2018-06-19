var counter = 0;
function color_fking_change(counter) {
	if (counter == 10){
		counter = 0;
	}
	else{
		colorchange1 = setTimeout(
		function() {
			document.getElementById("quoc").style.color = "red";
		},1000);
	colorchange2 = setTimeout(
		function() {
			document.getElementById("quoc").style.color = "black";
		},1800);
	colorchange3 = setTimeout(
		function() {
			document.getElementById("quoc").style.color = "yellow";
		},2600);
	colorchange4 = setTimeout(
		function() {
			document.getElementById("quoc").style.color = "green";
		},3400);
	
	}
	color_fking_change(counter+1);
}
	
	// clearTimeout(colorchange1);
	// clearTimeout(colorchange2);
	// clearTimeout(colorchange3);
	// clearTimeout(colorchange4);

setInterval(color_fking_change(),0);
function change(){
	var inString = document.getElementById("InputString").value;
	var len = inString.length;
	var outstring = document.getElementById("OutputString");
	var count1 = 0;
	var count2 = 0;
	outstring.innerHTML = '';



	for (var i = 0; i < len; i++){
		var random = Math.floor((Math.random() * 2) + 1);
		if (random == 1){
			count1++;
			if (count1 < 3){
				outstring.innerHTML += inString[i].toLowerCase();
			}
			else {
				outstring.innerHTML += inString[i].toUpperCase();
				count1 = 0;
				count2++;
			}
		}
		else if (random == 2){
			count2++;
			if (count2 < 3){
				outstring.innerHTML += inString[i].toUpperCase();
			}
			else {
				outstring.innerHTML += inString[i].toLowerCase();
				count2 = 0;
				count1++;
			}	
		}
	}
}

function wannacopy(){
	var text = document.querySelector("#OutputString");
	text.select();
	document.execCommand("copy");
}

function reset(){
	var text = document.querySelector("#InputString");
	text.select();
	document.execCommand("delete");
}
