<?php
//     Response text
// {
//     "type": "shortcut",
//     "token": "XXXXXXXXXXXXX",
//     "action_ts": "1581106241.371594",
//     "team": {
//       "id": "TXXXXXXXX",
//       "domain": "shortcuts-test"
//     },
//     "user": {
//       "id": "UXXXXXXXXX",
//       "username": "aman",
//       "team_id": "TXXXXXXXX"
//     },
//     "callback_id": "shortcut_create_task",
//     "trigger_id": "944799105734.773906753841.38b5894552bdd4a780554ee59d1f3638"
//   }

require_once("auth.php");

$conn = new mysqli($server, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$users = "SELECT user_id, full_name FROM users";

$users_result = $conn->query($users);

function getSlackGuess($user_guess) {
    json_encode($user_guess);
}


?>