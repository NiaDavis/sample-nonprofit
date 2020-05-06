//function hides popup.
function hide_popup(id) {
	if (document.getElementById){
		obj = document.getElementById(id);
		if (obj.style.display == ""){
			obj.style.display = "none";
		}
	}
}
//function shows popup.
function show_popup(id) {
	if (document.getElementById){
		obj = document.getElementById(id);
		if (obj.style.display == "none") {
			obj.style.display = "";
		}
	}
}
