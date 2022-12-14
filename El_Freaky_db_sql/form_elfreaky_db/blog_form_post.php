<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- favicon -->
	<link rel="icon" type="image" sizes="96x96" href="assets/img/favicons/favicon-96x96.png">
    <title>Form Glossary</title>
    <!-- Style -->
    <link rel="stylesheet" href="assets/css/style_main.css">
    <link rel="stylesheet" href="assets/css/style_mobile.css">
</head>
<body>
    <div id="container">
        <header>
            <p id="title_header">The nine dev</p>
            <img class="img_header" src="assets/img/tag_Lyon_DSC_0015.png" alt="imgHeader">
        </header>
        <nav>
            <ul class="ul_navigation">
                <li><a href="../index.php" class="home">Home</a></li>
                <li><a href="#" class="blog">Blog</a></li>
                <li><a href="#" class="contact">Contact</a></li>
                <li><a href="#" class="admin">Admin</a></li>
            </ul>
        </nav>
        <main>
            <article>
                <h1 id="title_article">Form Blog</h1>
                
                <form method="post" action="controller.php">
                    <fieldset id="fieldsetText">
                        <div>                    
                            <label id="inputTextLabel" for="title_post">Titre post</label>
                            <input type="text" id="inputText" name="title_post" required minlength="2" maxlength="20" size="20"></input><br>
                                            
                            <label id="inputTextLabel" for="date_post">Date post</label>
                            <input type="date" id="inputText" name="date_post" required minlength="4" maxlength="50" size="20"></input><br>
                                           
                            <label id="textAreaLabel" for="post">Contenu</label>
                            <textarea type="text" id="textArea" name="post" required rows="3" cols="33"></textarea><br>
                                          
                            <label id="inputTextLabel" for="name_img">Image</label>
                            <input type="text" id="inputText" name="name_img" required minlength="4" maxlength="50" size="20"></input><br>

                            <label id="inputTextLabel" for="alt_img">Alt img</label>
                            <input type="text" id="inputText" name="alt_img" required minlength="4" maxlength="50" size="20"></input><br>
                        </div>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </article>
        </main>
        <footer><small>Shapped by "The Stinky Feet Workshop's" © 2022</small></footer>
    </div>
</body>
</html>