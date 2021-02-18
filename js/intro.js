const switchBtn = document.getElementsByClassName("switch-btn")[0];
const container = document.getElementsByClassName("container")[0];

switchBtn.addEventListener("click", function(){

	this.style.right = "0";
	this.style.left = "50%";

	this.innerHTML = "&leftarrow; Switch Off";

	this.classList.toggle("switched-off-btn");

	this.setAttribute("onclick", "switchOff()");

	container.style.background = "transparent";


})


function switchOff(){
	//at this point, the switched-off-btn should have been added
	switchBtn.classList.remove('switched-off-btn');
	switchBtn.style.right = "50%";
	switchBtn.style.left = "0";
	switchBtn.innerHTML = "Switch On &rightarrow;";
	switchBtn.removeAttribute("onclick");

	container.style.background = "orange";


}


