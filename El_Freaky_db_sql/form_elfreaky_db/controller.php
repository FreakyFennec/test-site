<?php
    // Verify
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "elfreakydeldetroit";

        $title_post = $_POST['title_post'];
        $post = $_POST['post'];
        $date_post = $_POST['date_post'];

        $name_img = $_POST['name_img'];
        $alt_img = $_POST['alt_img'];


        // Connect to mysqli
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        
        // Verify connexion
        if (mysqli_connect_errno()) {
            echo "Impossible de se connecter à MySQL : " .mysqli_connect_error();
            exit();
        }

        // Prepare query
        $statement = $conn->prepare("INSERT INTO  posts(title_post, post, date_post) VALUES (?, ?, ?)");

        // Bind values and execute insert
        $statement->bind_param("sss",$title_post, $post, $date_post);

        // Prepare query
        $statement = $conn->prepare("INSERT INTO  images(name_img, alt_img) VALUES (?, ?)");

        // Bind values and execute insert
        $statement->bind_param("ss",$name_img, $alt_img);

        
        if ($statement->execute()) {
            print "C'est okay !";
        } else {
            print $msqli->error;
        }
    }
?>