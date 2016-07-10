function cl(names, ind){
	if (ind) {	
		return document.getElementsByClassName(names)[ind];
	}
	else {
		return document.getElementsByClassName(names)[0];
	} 
};

cl("button_right").onclick = function() {
	cl("apple").style.background = "green";
}
cl("button_left").onclick = function() {
	cl("apple").style.background = "blue";
}
cl("apple").onclick = function() {
	cl("apple").style.background = "";
}
cl("arrow_left").onclick = function() {
	cl("apple").setAttribute("class", "some");
}
