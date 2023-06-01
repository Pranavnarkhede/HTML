<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$city = $_POST['city'];
$address = $_POST['address'];
$marks10 = $_POST['marks10'];
$marks12 = $_POST['marks12'];



$file = fopen("student_data.txt", "a");
$data = "First Name: $firstName\nLast Name: $lastName\nAge: $age\nDate of Birth: $dob\nCity: $city\nAddress: $address\n10th Marks: $marks10\n12th Marks: $marks12\n\n";
fwrite($file, $data);
fclose($file);

echo "Form submitted successfully!";
?>
