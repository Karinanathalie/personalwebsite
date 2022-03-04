function ConfirmGo(){
	var go = confirm("Are you sure you want to go to that link?")
	if (go){ 
		return true;
	} else{
		return false;
	}
}

//button to top
let buttonTop = document.getElementById("buttonTop");
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 function showAlert() {
    alert ("Welcome!");
  }


