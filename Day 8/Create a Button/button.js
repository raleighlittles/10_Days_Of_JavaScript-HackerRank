var btn = document.getElementById("btn");
	btn.addEventListener("click",function() {
		var current_value = this.innerHTML;
		this.innerHTML = parseInt(current_value)+1;
	});