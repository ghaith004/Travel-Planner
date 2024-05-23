<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "csci390";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
<style>
        body {
            background-color: #007BFF; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .login-container {
            background-color: #FFFFFF; 
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 20px;
            color: #333333;
        }
        .login-container label {
            display: block;
            margin-bottom: 5px;
            color: #333333;
            text-align: left;
        }
        .login-container input[type="email"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #CCCCCC;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .login-container input[type="submit"] {
            background-color: #007BFF; 
            color: #FFFFFF;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
        }
        .login-container input[type="submit"]:hover {
            background-color: #0056b3; 
        }
    </style>
    <title>Login</title>
</head>
<body>

<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_POST["email"];
    $code = $_POST["code"];

    
    $_SESSION["email"] = $email;
    $_SESSION["username"] = "Demo User"; 
   
    header("Location: index.html");
    exit();
}
?>

   
    <form method="post" action="login.php">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="code">Password:</label><br>
        <input type="password" id="code" name="code" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
