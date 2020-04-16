// JavaScript Document
var iphone7 = document.getElementById("iphone7");
var iphone7plus = document.getElementById("iphone7plus");
var iphone8 = document.getElementById("iphone8");
var iphone8plus = document.getElementById("iphone8plus");
var iphonexr = document.getElementById("iphonexr");
var iphonexs = document.getElementById("iphonexs");
var iphonexsmax = document.getElementById("iphonexsmax");
var iphone11 = document.getElementById("iphone11");
var iphone11pro = document.getElementById("iphone11pro");
var iphone11promax = document.getElementById("iphone11promax");
var capacity = document.getElementById("AppleDevices")

iphone7.addEventListener("click", picLink);
iphone7plus.addEventListener("click", picLink);
iphone8.addEventListener("click", picLink);
iphone8plus.addEventListener("click", picLink);
iphonexr.addEventListener("click", picLink);
iphonexs.addEventListener("click", picLink);
iphonexsmax.addEventListener("click", picLink);
iphone11.addEventListener("click", picLink);
iphone11pro.addEventListener("click", picLink);
iphone11promax.addEventListener("click", picLink);

function picLink() {
	var picID = this.attributes["data-img"].value;
	var pic = document.getElementById(picID);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide"
	}
}

