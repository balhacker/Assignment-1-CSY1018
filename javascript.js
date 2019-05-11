function openSidebar(){			//function to define opening of sidebar in responsive view
	document.getElementById("sidebar").style.width = "35vw";
	document.getElementById("sidebar").style.padding= "30px 5vw 0 3vw";
	document.getElementById("menus").style.color = "white";
}

function closeSidebar() {		//function to define closing of sidebar in responsive view
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("sidebar").style.padding= "0";
	document.getElementById("menus").style.color = "initial";
}

function popUpSearch(){			//function to define popping of popping up search bar in responsive view
	document.getElementById("popup-search").style.display = "block";

}

function closePopUp(){			//function to define closing of popping up search bar in responsive view
	document.getElementById("popup-search").style.display = "none";
}

function revealAboutUs(){		//function to show part of About us section when clicked in Landing Page
	document.getElementById("reveal").style.display = "block";
	document.getElementById("showmore").style.display = "none";
	document.getElementById("showless").style.display = "block";
}

function hideAboutUs(){			//function to hide part of About us section when clicked in Landing Page
	document.getElementById("reveal").style.display = "none";
	document.getElementById("showmore").style.display = "block";
	document.getElementById("showless").style.display = "none";
}


//function to show breaking news slideshow in Landing Page

var slideNumber = 0;

function slideshow() {
  var s;
  var news = document.getElementsByClassName("slides");

  for (s = 0; s < news.length; s++) {					//Taken from:(W3schools.com, n.d.)
    news[s].style.display = "none";  
  }														//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

  slideNumber++;
  if (slideNumber > news.length) {slideNumber = 1}  

  news[slideNumber-1].style.display = "block";  

  setTimeout(slideshow, 4000); 							//changes slide in every 4s
}