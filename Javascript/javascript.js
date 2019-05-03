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

function revealAboutUs(){		//function to show part of About us section when clicked
	document.getElementById("reveal").style.display = "block";
	document.getElementById("showmore").style.display = "none";
	document.getElementById("showless").style.display = "block";
}

function hideAboutUs(){			//function to hide part of About us section when clicked
	document.getElementById("reveal").style.display = "none";
	document.getElementById("showmore").style.display = "block";
	document.getElementById("showless").style.display = "none";
}

//function to show breaking news slideshow

var index = 0;

function slideshow() {
  var a;
  var news = document.getElementsByClassName("slides");

  for (a = 0; a < news.length; a++) {					//Taken from:(W3schools.com, n.d.)
    news[a].style.display = "none";  
  }

  index++;
  if (index > news.length) {index = 1}  

  news[index-1].style.display = "block";  

  setTimeout(slideshow, 4500); 						//changes slide in every 4.5s
}