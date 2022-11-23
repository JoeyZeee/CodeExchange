<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'phplogin';
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// We don't have the password or email info stored in sessions so instead we can get the results from the database.
$stmt = $con->prepare('SELECT password, email, num_bits, rank FROM accounts WHERE id = ?');
// In this case we can use the account ID to get the account info.
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($password, $email, $num_bits, $rank);
$stmt->fetch();
$stmt->close();

if ($_SESSION['name'] == "Joey Z" || $_SESSION['name'] == "Alex C") {
  $rank = "Admin";
} else if ($num_bits >= 0 && $num_bits <= 500) {
  $rank = "Newbie";
} else if ($num_bits > 500 && $num_bits <= 1500) {
  $rank = "Rookie";
} else if ($num_bits > 1500 && $num_bits <= 3000) {
  $rank = "Advanced";
} else if ($num_bits > 3000 && $num_bits <= 5000) {
  $rank = "Expert";
} else {
  $rank = "Undefined";
}

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Profile Page</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
	</head>
	<body class="loggedin">
		<nav class="navtop">
			<div>
				<h1>CodeExchange</h1>
        <a href="home.php"><i class="fas fa-home"></i>Home</a>
				<a href="profile.php"><i class="fas fa-user-circle"></i>Profile</a>
				<a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
			</div>
		</nav>
		<div class="content">
			<h2>Profile Page</h2>
			<div>
				<p>Your account details are below:</p>
				<table>
					<tr>
						<td>Username:</td>
						<td><?=$_SESSION['name']?></td>
					</tr>
					<tr>
						<td>Password:</td>
						<td><?=$password?></td>
					</tr>
					<tr>
						<td>Email:</td>
						<td><?=$email?></td>
					</tr>
          <tr>
            <td>Number of Bits:</td>
            <td><?=$num_bits?></td>
          </tr>
          <tr>
            <td>Your Rank:</td>
            <td><?=$rank?></td>
          </tr>
				</table>
			</div>
		</div>
	</body>
</html>
