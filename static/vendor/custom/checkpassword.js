// Not working
function checkPasswordMatch(){
	var password = $("#password").val();
	var confirmPassword = $("#confirm_password").val();

	if (password != confirmPassword)
		$("#divCheckPasswordMatch").html("Passwords do not match!");
	else
		$("#divCheckPasswordMatch").html("Passwords match.");
}


$(document).ready(function () {
	$("#confirmPassword").keyup(checkPasswordMatch);
});