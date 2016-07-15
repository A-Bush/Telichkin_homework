function cl(names, ind){
	if (ind) {
		return document.getElementsByClassName(names)[ind];
	}
	else {
		return document.getElementsByClassName(names)[0];
	}
}

cl("button_right").onclick = function() {
	cl("apple").style.background = "green";
};
cl("button_left").onclick = function() {
	cl("apple").style.background = "blue";
};
cl("apple").onclick = function() {
	cl("apple").style.background = "";
};
cl("arrow_left").onclick = function() {
	cl("apple").classList.add("class", "some");
};
cl("leave").onclick = function () {

    var col = Math.floor(Math.random() * 360 ) + 1;

    cl("apple").style.cssText = "background: hsl(+" + col + ", 100%, 50%); transition: transform 1s;";
};


window.onload = setInterval(function () {

	var col = Math.floor(Math.random() * 360 ) + 1;

	cl("all").style.cssText = "background: hsl(+" + col + ", 100%, 50%); transition: transform 1s;";
}, 2000);

cl("input").onclick = function () {
    if (cl("input").checked) {
        cl("apple").classList.add("apple_move");
    }
    else  {
        cl("apple").classList.remove("apple_move");
    }
};