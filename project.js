//alert("Yo!");

window.onload = goNow;
function goNow(){

//TOGGLE MENU FUNCTION

function toggleMenu() {
	var menu = document.querySelector("#main-menu");
	if (menu.className == 'show-small'){
		menu.classList.remove('show-small');
	} else {
		menu.classList.add('show-small');
	}
}

//* SLOW TEXT APPEARANCES */	
	
	var showMessage = function(target, message, index, interval){ //Create function with 4 parameters
		if (index < message.length)
		{
			var array = message.split(" ");
			var messageHolder = document.getElementById(target);
            messageHolder.innerHTML += message[index];
				//Choose what element will contain the message, and add the message character by character
		  setTimeout(function(){ showMessage(target,message, index, interval);}, interval); //Set how long it will take each character to display
			index++;
		}
	}
	

//CURRENT TIME FUNCTION

    var msgH = document.getElementById("hoursOut");
	var msgM = document.getElementById("minsOut");
	var msgS = document.getElementById("secsOut");

	//Get time now
		var timeNow = new Date();

	//Get hours/mins/secs from timeNow
		var hh = timeNow.getHours();
		var mm = timeNow.getMinutes();
		var ss = timeNow.getSeconds();

	//Call function to fix digits
		mm = fixDigit(mm);
		ss = fixDigit(ss);

	//Update HTML output
		msgH.innerHTML = hh + ":";
		msgM.innerHTML = mm + ":";
		msgS.innerHTML = ss ;
	
	function fixDigit(click){
	//If number is less than 10, add "0" to it.
		if(click < 10){
			click = "0" + click;
		}
		return click;
	}//end fixDigit


	//SETTING SKY COLOUR BASED ON TIME OF DAY
	
	var sky = document.querySelector(".window");
	sky.style.backgroundColor = "skyblue";
	
	
	if (hh > 18 || hh < 6){
		sky.style.backgroundColor = "#1c1341";
	} else if (hh >= 6 && hh < 8){
		sky.style.backgroundColor = "darkorange";
	} else if (hh >= 8 && hh < 16){
		sky.style.backgroundColor = "skyblue";
	} else {
		sky.style.backgroundColor = "crimson";
	};
	
	//DISPLAY SUN IN THE MORNING/AFTERNOON AND MOON IN THE EVENING/NIGHT
	
	var sun = document.querySelector("#sun");
	var moon = document.querySelector("#moon");
	
	if (hh > 6 && hh <18){
		sun.style.display = 'block';
		moon.style.display = 'none';
	} else {
		moon.style.display = 'block';
		sun.style.display = 'none';
	}
	
	
	//MORNING/AFTERNOON/NIGHT MESSAGES AND HIDE/UNHIDE ANIMATIONS
	
	var allClouds = document.querySelectorAll(".cloud");
	var kirbyHopping = document.querySelector("#kirby img");
	
	var kirbyFlying = document.querySelector("#kirby_star img");
		
	var kirbySleeping = document.querySelector("#kirby_sleep img");
	var starrySky = document.querySelector("#starrynight img");
	
	var allStars = document.querySelectorAll(".star");


	if (hh >= 18 || hh < 6){
		

		
		/* NIGHT TIME */	//Show Moon, Kirby sleeping ans stars twinkling
		
		kirbySleeping.style.display = "block";
		starrySky.style.display = "block";
		
		kirbyHopping.style.display = "none";
		kirbyFlying.style.display = "none";
		
		for (var i = 0; i < allClouds.length; i++) {
			allClouds[i].style.display = "none";
		}
		
		for (var i = 0; i < allStars.length; i++) {
			allStars[i].style.display = "block";
		}
		
		
		showMessage("msg", "Early to bed, early to rise! Zzzzzz... ", 0, 150);

	} else if (hh >= 6 && hh < 12){
		
		/* MORNING */        //Show Sun, clouds floating and Kirby hopping
		
		
		kirbyHopping.style.display = "block";
		
		kirbyFlying.style.display = "none";
		kirbySleeping.style.display = "none";
		starrySky.style.display = "none";
		
		for (var i = 0; i < allClouds.length; i++) {
			allClouds[i].style.display = "block";
		}
		
		for (var i = 0; i < allStars.length; i++) {
			allStars[i].style.display = "none";
		}
		
		showMessage("msg", "Coffee gets my morning started! What about you?", 0, 150);

	} else {
		
		/* AFTERNOON */      //Show Sun, clouds floating and Kirby flying on star
	
			
		kirbyFlying.style.display = "block";

		kirbyHopping.style.display = "none";
		starrySky.style.display = "none";
		kirbySleeping.style.display = "none";
		
		for (var i = 0; i < allClouds.length; i++) {
			allClouds[i].style.display = "block";
		}
		
		for (var i = 0; i < allStars.length; i++) {
			allStars[i].style.display = "none";
		}
		
		showMessage("msg", "Carpe diem! Seize the day and have some fun!", 0, 150);
	
	};
	
	
	
} //end of goNow function