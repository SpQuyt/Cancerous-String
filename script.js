var counter = 0;
setInterval(function () {
	if (counter % 4 == 0){
		document.getElementById("quoc").style.color = "red";
	}
	else if (counter % 4 == 1){
		document.getElementById("quoc").style.color = "black";
	}
	else if (counter % 4 == 2){
		document.getElementById("quoc").style.color = "yellow";
	}
	else if (counter % 4 == 3){
		document.getElementById("quoc").style.color = "green";
	}
	counter++;
},500);

	
	// clearTimeout(colorchange1);
	// clearTimeout(colorchange2);
	// clearTimeout(colorchange3);
	// clearTimeout(colorchange4);


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
