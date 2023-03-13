-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour el_freaky
CREATE DATABASE IF NOT EXISTS `el_freaky` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `el_freaky`;

-- Listage de la structure de table el_freaky. articles
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `presentation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `illustration` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `category` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Listage des données de la table el_freaky.articles : ~7 rows (environ)
DELETE FROM `articles`;
INSERT INTO `articles` (`id`, `title`, `presentation`, `illustration`, `category`) VALUES
	(1, 'Grandir (Firdaus Kanga)', 'Ne vous fiez pas à la couverture, c\'est pas du tout une histoire de petite fille, loin de là. C\'est plutôt une autobiographie très romancée de l\'auteur vivant à Bombay. Il est issus d\'une famille parsie très ouverte, cultivée et pleine d\'humour. Ça vous changera des historiettes sirupeuses comme des "gulab jamun" pondu par la bollywood brain washing machine.', '<img src="assets/img/Grandir.jpg" alt="Grandir (Firdaus Kanga)">', 'book'),
	(2, 'Terrasses (Cadix)', 'Quand vous me demandez mon âge vous êtes surpris par la réponse, puis vous me demandez mon secret. Je n\'en ai aucun si ce n\'est de bien dormir et d\'éviter les longues expositions au soleil. Eh oui le soleil est l\'ennemi de la peau. Bon à savoir : dans les pays méditerranéens il n\'y a que pour les touristes que l\'on aménage des bronzariums et dans les pays du maghreb c\'est le territoire des femmes.', '<iframe src="pages/pages_A-Frame/terrasses_Cadix-A-Frame.html" allowfullscreen="false"></iframe>', 'town'),
	(3, 'Dark Was the Night (Blind Willie Johnson)', 'Quand j\'entends les premières mesures de cette chanson, je me tais, je ferme les yeux et plus rien ne compte. Chuuuut écoute.', '<iframe width="560" height="315" src="https://www.youtube.com/embed/w2AHeWvRpw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 'music'),
	(4, 'The Maid Freed From The Gallows (John Jacob Niles)', 'The Maid Freed From The Gallows (John Jacob Niles)</h2>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/-nGiDUsiH8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', 'music'),
	(5, 'Les Cavaliers (Joseph Kessel)', 'Mais puisque je vous dis que j\'ai vu Guardi Guedj l\'aïeul de tous les aïeux. J\'étais dans le camion qui l\'emmenait vers une tchaïkhana, j\'ai patiemment attendu d\'arriver pour l\'entendre conter l\'une de ces innombrables histoires de l\'hindou kouch. J\'ai senti mes membres gagnés par l\'arthrite comme Toursen le plus grand tchopendoz, j\'ai eu la jeunesse bravache de Ouroz, j\'ai crié dans l\'oreille de Jehol le cheval fou, j\'ai été Saï le palefrenier de Jehol, d\'abord bon puis perverti par l\'avidité de Zéré… Longtemps après avoir lu et relu plusieurs fois ce livre, je revis avec intensité certains moments que raconte l\'auteur qui a su nous donner une grande part de son amour pour l\'Afghanistan. Je recommande vivement sa lecture et relecture à tous les âges de la vie.', '<img src="assets/img/Les-cavaliers-J-Kessel.jpg" alt="Les Cavaliers (Joseph Kessel)">', 'book'),
	(6, 'La plateforme (Galder Gaztelu-Urrutia)', 'J\'ai dit à un camarade de formation que parfois la vie me semblait comme un banquet maudit où tout le monde dévorait les richesses de la terre sans se soucier de l\'avenir. Quand je me suis souvenu de ce film fait par un réalisateur espagnol qui illustre bien mieux cette idée.', '<img src="assets/img/La-plateforme.jpg" alt="La-plateforme (Galder Gaztelu-Urrutia)">', 'movie'),
	(7, 'Mes parents sont pas là (Thomas Fersen)', 'C\'est par "Pièces montée des grands jours" que j\'ai découvert Thomas Fersen, sa liberté avec les mots m\'avait touché. Mais c\'est une autre chanson que je vous propose à l\'écoute, le choix n\'a pas été simple car il est tellement prolifique. Je ne pense pas (mais je ne suis pas musicien) qu\'il faille s\'attacher à la musique, c\'est surtout ses textes qui sont cisellés comme des pièces d\'orfèvrerie auxquelles il faut prêter attention. Et si t\'as pas de coeur après ça t\'auras au moins un ventricule.', '<iframe width="560" height="315" src="https://www.youtube.com/embed/X86B9wDLVUk" title="YouTube vide', 'music');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
