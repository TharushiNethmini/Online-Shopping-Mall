/* The password checking and alerts*/
function checkPassword(){
	if(document.getElementById("pwd").value != document.getElementById("rpwd").value){
		alert("Error!!  Password Mismatch!");
		return false;
	}
	else{
		alert("Success!");
		return true;
	}
}


/* The confirm order button*/
function enableButton(){
	if(document.getElementById("policy").checked){
		document.getElementById("confirm").disabled=false;
	}
	else{
		document.getElementById("confirm").disabled=true;
	}
}	

/* The sign in button*/
function enablecreditcard(){
	if(document.getElementById("credit").checked){
		document.getElementById("card").disabled=false;
	}
	else{
		document.getElementById("card").disabled=true;
	}
}	


/* The previous button*/
function goBack() {
  window.history.back();
}



















