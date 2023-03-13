<?php
    // Verify
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "el_freaky";

        $title = $_POST['title'];
        $presentation = $_POST['presentation'];
        $illustration = $_POST['illustration'];
        $category = $_POST['category'];

        // Connect to mysqli
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        
        // Verify connexion
        if (mysqli_connect_errno()) {
            echo "Impossible de se connecter à MySQL : " .mysqli_connect_error();
            exit();
        }

        // Prepare query
        $statement = $conn->prepare("INSERT INTO  articles(title, presentation, illustration, category) VALUES (?, ?, ?, ?)");

        // Bind values and execute insert
        $statement->bind_param("ssss",$title, $presentation, $illustration, $category);

        if ($statement->execute()) {
            print "C'est okay !";
        } else {
            print $msqli->error;
        }
    }
?>