<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">

	<title>El Freaky Del Detroit (index)</title>

	<!-- favicon -->
	<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-96x96.png">

	<!-- Style -->
	<link rel=stylesheet type="text/css" href="assets/css/style-main.css">
</head>

<body>
	<div class="grid"><!-- grid -->
		<a href="index.html" class="a-header"><!-- header -->
			<header class="header">
				<h1 class="title-site">El Freaky Del Detroit</h1>
			</header>
		</a>
		
		<nav class="nav"><!-- nav -->
			<ul class="ul-nav">
				<a href="index.html" class="a-nav"><li class="li-home">Home</li></a>
				<a href="../blog/blog.html" class="a-nav"><li class="li-blog">Blog</li></a>
				<a href="../contact/contact.html" class="a-nav"><li class="li-contact">Contact</li></a>
				<a href="form_elfreaky_db/blog_form_post.php" class="a-nav"><li class="li-contact">Form</li></a>
			</ul>
		</nav>
				
		<section class="main"><!-- content -->
			<h1 class="title-content">Welcome to the El Freaky's pages</h1>
			<article>
				<h2 class="title-article">Pour mes camarades de formation Dév</h2>
				<p class="presentation-article">
					Comme je vous en raconte tellement et que les paroles s'envolent....<br>
					Je vais vous laisser quelques recommandations pour combler certaines lacunes.<br>
					Si, si, il faut combler. Parce que le chewing-gum des yeux (tous les écrans) ne suffit pas à élargir votre empan de connaissances.<br>
					Mes recommandations seront d'ordre littéraire, musicale, cinématographique, artistique, culinaire et au gré de nos conversations.
				</p>
			</article>
			<?php
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $dbname = "elfreakydeldetroit";

                    // Connect to mysqli
                    $conn = mysqli_connect($servername, $username, $password, $dbname);

                    // Verify connexion
                    if (mysqli_connect_errno()) {
                        echo "Impossible de se connecter à MySQL : " .mysqli_connect_error();
                        exit();
                    }

					// Query
					$req = "SELECT *
							FROM posts
							INNER JOIN videos
							ON posts.id_post = videos.id_video";

					$result = $conn->query($req);
					$num = mysqli_num_rows($result);

					if ($num > 0) {
						while($row = mysqli_fetch_assoc($result)) {
							$title_post = $row['title_post'];
							$post = $row['post'];
							$date_post = $row['date_post'];
							$adress_video = $row['adress_video'];
											
							echo "<article><h2 class='title-article'>".$title_post." (".$date_post.")</h2>
								<p class='presentation-article'>".$post."</p>
								<p class='video'><iframe width='560' height='315' src=' . $adress_video .' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></p>
								</article>";
						}	
					} else {
						echo "0 no results";
					}
					 
                    // Free the memory space allocated for this query of the db
					mysqli_free_result($result);
					// close db
					mysqli_close($conn);
					
			?>		
		</section><!-- /.end content -->
					
		<aside class="aside"><!-- aside -->
			<ul class="ul-aside">
				<a href="carnet_de_notes/carnet-de-notes.html" class="a-aside"><li class="li-aside">Carnet de notes</li></a>
				<a href="IrregularsVerbs/index.html" class="a-aside"><li class="li-aside">Irregulars verbs</li></a>
				<a href="index.html" class="a-aside"><li class="li-aside">El Freaky</li></a>
			</ul>
		</aside>

		<footer class="footer"><!-- footer -->
			<p id="footer">Shapped by "The stinky feet workshop's" &copy 2022</p>
		</footer>
	</div><!-- /.end grid -->
</body>
</html>
