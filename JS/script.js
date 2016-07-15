/*function cl(names, ind){
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
	color("apple");
};
cl("leave").onclick = function () {
alert("hello");
};

window.onload = setInterval(function(){
	color("all")}, 2000);

cl("input").onclick = function () {
	if (cl("input").checked) {
		cl("apple").classList.add("apple_move");
	}
	else  {
		cl("apple").classList.remove("apple_move");
	}
};

function color(arg) {
	
		var col = Math.floor(Math.random() * 360 ) + 1;

		cl(arg).style.cssText = "background: hsl(" + col + ", 100%, 50%); transition: 1s;";
};
cl("but").onclick = function(){
	alert("ok");
}*/



	/*a.addEventListener("click", function() {
			a.style.cssText = "background: green;";
	});

a.addEventListener("click", function() {
			alert("hello");
});
a.addEventListener("click", function() {
			a.style.cssText = "border: 3px solid red;";
		});*/

		var divs = document.getElementsByTagName("div");
		var color = ['red', 'blue', 'yellow', 'green'];

		// for (let i = 0; i < divs.length -1; i++) {
		// 	var l = divs[i];
		// 	l.addEventListener("click", function(){
		// 		l.style.background = color[i];
		// 	});

		// };
// function colo() {
// 					for (var j = 0; j < color.length; j++) {
// 						return function() {
// 							var j = j;
// 							return color[j];
// 					};
// 		
/*var p = false;		
divs[0].addEventListener("click", function(){
				this.style.background = color[0];
				alert("1");
			},p);
divs[1].addEventListener("click", function(e){
				this.style.background = color[1];
				alert("2");
				e.stopPropagation();
			},p);
divs[2].addEventListener("click", function(event){
				this.style.background = color[2];
				alert("3");
				console.dir(event);
				alert(event.clientX + " " + event.clientY)
				event.stopPropagation();
			},p);
divs[3].addEventListener("click", function(){
				this.style.background = color[3];
				alert("4");
			},p);*/
var a = 55;
function Create(arg1, arg2, arg3) {
	this.name = arg1;
	this.title = arg2;
	this.age = arg3;

	this.a = 13;
	this.show = function(){
		alert (this.name + "" + this.title + "" + this.age + "  " + a);
	} 
	var f1 = function() {
		confirm(Create.a);
	};
	var f2 = function() {
		confirm();
	};
	this.conf = function() {
		f1();
		f2();

	};
	alert("Hi");
};
Create.f3 = function(){
	prompt(Create.a);

};
Create.a = 77;
var user = new Create("Peter", "Sir", "25");

/*alert(typeof (user) + "" + user.title);*/

var user1 = new Create("ddd", "aaa", "2");
/*user1.show();*/
/*user.conf();*/
Create();