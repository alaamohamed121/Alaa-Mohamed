<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["full_name"];
    $email = $_POST["email_address"];
    $phone = $_POST["phone_number"];
    $subject = $_POST["email_subject"];
    $message = $_POST["message"];

    $to = "3laamohamed12@gmail.com"; 
    $headers = "From: $fullname <$email>" . "\r\n";
    $messageBody = "Name: $fullname\nEmail: $email\nPhone: $phone\nSubject: $subject\n\n$message";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Oops! An error occurred while sending the email.";
    }
}
?>
