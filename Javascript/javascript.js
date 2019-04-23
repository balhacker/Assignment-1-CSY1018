function OpenSidebar(){			//function to define opening of sidebar in responsive view
	document.getElementById("sidebar").style.width = "35vw";
	document.getElementById("sidebar").style.padding= "30px 5vw 0 3vw";
	document.getElementById("menus").style.color = "white";
}

function CloseSidebar() {		//function to define closing of sidebar in responsive view
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("sidebar").style.padding= "0";
	document.getElementById("menus").style.color = "initial";
}

function PopUpSearch(){			//function to define popping of popping up search bar in responsive view
	document.getElementById("popup-search").style.display = "block";

}

function ClosePopUp(){			//function to define closing of popping up search bar in responsive view
	document.getElementById("popup-search").style.display = "none";
}

