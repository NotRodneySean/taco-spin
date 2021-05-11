<?php

require_once('auth.php');

#
#  TODO
#  1. Set random interval in DB for spinning speed
#  2. Unhide element in index.php that'll show the taco & spin count
#  3. Start the animation
#

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set random interval, store in DB > Spin
$interval = rand (1, 22);
$date = date("Y-m-d");

$query_add_interval = "INSERT INTO `spin`(`speed`, `date`)
VALUES ($interval,'$date')";

if ($conn->query($query_add_interval) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query_add_interval . "<br>" . $conn->error;
}


?>