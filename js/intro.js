const switchBtn = document.getElementsByClassName("switch-btn")[0];

switchBtn.addEventListener("click", function(){

	this.style.right = "0";
	this.style.left = "50%";

	this.innerHTML = "&leftarrow; Switch Off";

	this.classList.toggle("switched-off-btn");

})