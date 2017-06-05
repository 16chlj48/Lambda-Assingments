document.getElementById("nickname").innerHTML="Chlo-Chlo";
document.getElementById("favorites").innerHTML="Swimming, Coding, Ultimate Frisbee";
document.getElementById("hometown").innerHTML="Portland";
document.body.style.backgroundColor = "red";
document.getElementById("header1").style.backgroundColor="blue";
document.body.style.fontFamily = "sans-serif";

var listitem = document.getElementsByTagName("li");

for (var i = 0; i < listitem.length; i++) {
	listitem[i].className = "listitem";
	listitem[i].style.color = "yellow";
}

var myImg = document.createElement("img");
myImg.src = "http://pngimg.com/uploads/chicken/chicken_PNG2149.png?i=1";
document.body.append(myImg);