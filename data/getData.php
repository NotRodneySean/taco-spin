<?php

require_once("auth.php");

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$users = "SELECT user_id, full_name FROM users";
$guess = "SELECT user_id, name, value, guess_date FROM guess";
$totals = "SELECT user_id, name, guess, spin_count, date_won FROM totals";

$users_result = $conn->query($users);
$guess_result = $conn->query($guess);
$totals_result = $conn->query($totals);

// Users
$users_array = Array();
if ($users_result->num_rows > 0) {
  while($users_row = $users_result->fetch_assoc()) {
    $users_array[] = $users_row;
  }
}
$json_users_array = json_encode($users_array);

// Guesses
$guess_array = Array();
if ($guess_result->num_rows > 0) {
  while($guess_row = $guess_result->fetch_assoc()) {
    $guess_array[] = $guess_row;
  }
}
$json_guess_array = json_encode($guess_array);

// Totals
$totals_array = Array();
if ($totals_result->num_rows > 0) {
  while($totals_row = $totals_result->fetch_assoc()) {
    $totals_array[] = $totals_row;
  }
}
$json_totals_array = json_encode($totals_array);

?>
<script>
let users = <?php echo $json_users_array; ?>;
let guesses = <?php echo $json_guess_array ?>;
let totals = <?php echo $json_totals_array; ?>;
</script>
<?php

$conn->close();

?>