<?php
//Variables passed by the form
//header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);

$userName = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$eMail = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$message = filter_input(INPUT_POST, 'userMessage', FILTER_SANITIZE_STRING);

if(isset($userName, $eMail, $message) && !empty($userName) && !empty($eMail) && !empty($message)) {

	if(!filter_var($eMail, FILTER_VALIDATE_EMAIL)){
		echo '<p class="fail">E-mail is not valid</p>';
	} else {

		// Variables for the 'mail' function
		$to = 'admin@admin.com'; // Change this to your own e-mail
		$subject = 'A message from my website'; // Change the subject to whatever you like
		$from = 'This Message From: ' . $userName . $eMail;

		if(mail($to, $subject, $message, $from)) {
			echo '<p class="success">Your message has been sent successfully</p>';
		} else {
			echo '<p class="fail">Something went wrong</p>';
		}
	}

} else {
	echo '<p class="fail">Please Fill All Required Fields</p>';
}
?>