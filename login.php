<?php
// Include the database connection file
include_once "connect.php";

// Check if the form is submitted for sign-up
if (isset($_POST["signup"])) {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"]; // Note: Hash the password for security
    
    // Check if both fields are not empty
    if (!empty($username) && !empty($password)) {
        // Check if the email address has the correct domain
        if (filter_var($username, FILTER_VALIDATE_EMAIL) && strpos($username, '@hicas.ac.in') !== false) {
            // SQL query to check if the email already exists
            $check_email_query = "SELECT * FROM users WHERE username = '$username'";
            $result = $conn->query($check_email_query);
            
            if ($result->num_rows > 0) {
                echo "Email address already registered.";
            } else {
                // Email address is not registered, proceed with signup
                // SQL query to insert user information into the database
                $sql = "INSERT INTO users(username, password) VALUES ('$username', '$password')";
                
                // Execute the SQL query
                if ($conn->query($sql) === TRUE) {
                    $signup_success_message = "User added successfully!";
                    // Redirect to login page or any other page
                    header("Location: bluehtml.html");
                    exit();
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
            }
        } else {
            echo "Invalid email address. Please use an email address with the @hicas.ac.in domain.";
        }
    } else {
        echo "Username and password cannot be empty.";
        header("Location: bluehtml.html");
    }
}




// Check if the form is submitted for sign-in
if (isset($_POST["signin"])) {
    // Retrieve form data
    $email = $_POST["username"];
    $password = $_POST["password"]; // Note: Hash the password for security

    // SQL query to check if the user exists in the database
    $sql = "SELECT * FROM users WHERE username='$email' AND password='$password'";

    // Execute the SQL query
    $result = $conn->query($sql);

    if($email == "" && $password == "") {
        echo "Invalid email or password";
        header("Location: bluehtml.html");
        exit();
    }

    // Check if the user exists
    if ($result->num_rows > 0) {
        // User authenticated, redirect to dashboard or any other page
        header("Location: home2.html");
        exit();
    } else {
        echo "Invalid email or password";
    }
}

// Close the database connection
$conn->close();
?>
