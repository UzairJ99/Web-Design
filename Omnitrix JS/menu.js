var menu = document.getElementById("bars");
var exit = document.getElementById("exit");
var rightBtn = document.getElementById("right");
var leftBtn = document.getElementById("left");
var resetBtn = document.getElementById("reset");
var currentAlien = document.getElementById("alien");
var alienNum = 0;
var alienList = ["blank.png","heatblast.png", "fourarms.png", "upgrade.png", 
"ghostfreak.png", "xlr8.png", "wildmutt.png", "ripjaws.png", "diamondhead.png", "greymatter.png",
"stinkfly.png"];

//When user clicks the right button
rightBtn.addEventListener("click", function() {
	//checks if alien count is less than the available 10
	if (alienNum < 10) {
		alienNum++;
		currentAlien.src = alienList[alienNum]; //sets the image to the current alien silhouette
	} else {
		alienNum = 1;
		currentAlien.src = alienList[alienNum];
	}
	var id = setInterval(frame, 5);
	var rotate = 0;
	var menuOpacity = 1;
	var exitOpacity = 0;
	var alienOpacity = 0;
	var alienScale = 0;
	function frame() {
	    if (rotate == 90) {
	        clearInterval(id);
	    } else {
	        rotate++;
	        menuOpacity = menuOpacity-0.013;
	        exitOpacity = exitOpacity+0.012;
	        alienOpacity = alienOpacity+0.009;
	        alienScale = alienScale + 0.011;
	        menu.style.transform = "rotate(" + rotate*2 + "deg)";
	        exit.style.transform = "rotate(" + rotate*2 + "deg)";
	        menu.style.opacity = menuOpacity;
	        exit.style.opacity = exitOpacity;
	        currentAlien.style.opacity = alienOpacity;
	        currentAlien.style.transform = "scale(" + alienScale + ")";
	    }
	}
});

leftBtn.addEventListener("click", function() {
	if (alienNum > 1) {
		alienNum--;
		currentAlien.src = alienList[alienNum]; //sets the image to the current alien silhouette
	} else {
		alienNum = 10;
		currentAlien.src = alienList[alienNum];
	}
	var id = setInterval(frame, 5);
	var rotate = 180;
	var menuOpacity = 1;
	var exitOpacity = 0;
	var alienOpacity = 0;
	var alienScale = 0;
	function frame() {
	    if (rotate == 90) {
	        clearInterval(id);
	    } else {
	        rotate--;
	        menuOpacity = menuOpacity-0.013;
	        exitOpacity = exitOpacity+0.012;
	        alienOpacity = alienOpacity+0.009;
	        alienScale = alienScale + 0.011;
	        menu.style.transform = "rotate(" + rotate*2 + "deg)";
	        exit.style.transform = "rotate(" + rotate*2 + "deg)";
	        menu.style.opacity = menuOpacity;
	        exit.style.opacity = exitOpacity;
	        currentAlien.style.opacity = alienOpacity;
	        currentAlien.style.transform = "scale(" + alienScale + ")";
	    }
	}
});

reset.addEventListener("click", function() {
	alienNum = 0;
	currentAlien.src = alienList[alienNum];
	var id = setInterval(frame, 5);
	var rotate = 90;
	var menuOpacity = 0;
	var exitOpacity = 1;
	var alienOpacity = 1;
	var alienScale = 1;
	function frame() {
	    if (rotate == 180) {
	        clearInterval(id);
	    } else {
	        rotate++;
	        menuOpacity = menuOpacity+0.012;
	        exitOpacity = exitOpacity-0.013;
	        alienOpacity = alienOpacity-0.009;
	        alienScale = alienScale - 0.011;
	        menu.style.transform = "rotate(" + rotate*2 + "deg)";
	        exit.style.transform = "rotate(" + rotate*2 + "deg)";
	        menu.style.opacity = menuOpacity;
	        exit.style.opacity = exitOpacity;
	        currentAlien.style.opacity = alienOpacity;
	        currentAlien.style.transform = "scale(" + alienScale + ")";
	    }
	}
});