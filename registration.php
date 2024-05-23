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
            background-color:cyan; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
       
        
    </style>
    <title>Registration</title>
</head>
<body >

<?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST["email"]);
    $code = $conn->real_escape_string($_POST["code"]);
    $username = $conn->real_escape_string($_POST["username"]);

    $sql = "INSERT INTO profiles (email, code, username) VALUES ('$email', '$code', '$username')";

    if ($conn->query($sql) === TRUE) {
        header("Location: login.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

    
    <form method="post" action="registration.php">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="code">Password:</label><br>
        <input type="password" id="code" name="code" required><br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
