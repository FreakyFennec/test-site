/*
    JS-carnet-de-notes-1-03.js
    ======================================
    By AHJ
*/

function displayAllNotes() {

    // Tableau des notes
    const arrayNotes = [
        /*
        
        {
            title: "",
            category: "",
            note: ".",
            descriptionLink: "ici",
            link: ""
        },
        */
        {
            title: "Un background à 100%",
            category: "CSS",
            note: "Vous trouverez une solution chez Css-Tricks. Un site à connaître.",
            descriptionLink: "ici",
            link: "https://css-tricks.com/perfect-full-page-background-image/"
        },
        {
            title: "MathJax (afficher des formules mathématique)",
            category: "API",
            note: "C'est une bibliothèque pour afficher des formules mathématique en JS.",
            descriptionLink: "Plus de détails ici",
            link: "https://fr.acervolima.com/introduction-a-mathjax/"
        },
        {
            title: "Calcul de salaire",
            category: "Rémunération",
            note: "Pour connaître son salaire net précisément et plus rendez-vous.",
            descriptionLink: "ici",
            link: "https://www.salaire-brut-en-net.fr/"
        },
       {
            title: "Scratch (programmation visuelle)",
            category: "CMS",
            note: "C'est un langage qui vise à enseigner la programmation aux plus jeunes. Il fonctionne avec des blocs qui sont des commandes et vous permenttent de créer des jeux, dest histoires et plein d'autres choses.",
            descriptionLink: "à découvrir ici",
            link: "https://scratch.mit.edu/"
        },
        {
            title: "Des exemples de design",
            category: "Webdesign",
            note: "Bien que la page parle des tendences de 2019 - 2020 c'est toujours intéressantet inspirant. Le site canva.com vous propose pleins d'autres sujets à découvrir.",
            descriptionLink: "ici",
            link: "https://www.canva.com/fr_fr/decouvrir/webdesign/"
        },
        {
            title: "Snippets generator",
            category: "OutilsDév",
            note: "Et encore plus vite que vite. Avec ce générateur de snippets pour VSCode, Sublime Text ou Atom vos mains diront adieux aux tendinites.",
            descriptionLink: "ici",
            link: "https://snippet-generator.app/"
        },
        {
            title: "Snippets mode d'emploi",
            category: "OutilsDév",
            note: "Encore plus vite avec ce tutos sur les snippets pour VSCode, vous allez coder à la vitesse de l'éclair.",
            descriptionLink: "ici",
            link: "https://code.visualstudio.com/docs/editor/userdefinedsnippets"
        },
        {
            title: "Raccourcis clavier pour Sublime-Text-3",
            category: "OutilsDév",
            note: "Si vous êtes allérgique à la fenêtre (en anglais) qui possède VSCode, il y toujours ce bon éditeur de texte pour coder.",
            descriptionLink: "La liste des raccourcis c'est sur Github.com",
            link: "https://gist.github.com/thanoss/93793d3643f95e50eb37"
        },
        {
            title: "Raccourcis clavier dans Visual Studio",
            category: "OutilsDév",
            note: "Des raccourcis pour coder plus vite que son ombre. Enfin quand la liste est assimilée, parcequ'il y en a.",
            descriptionLink: "ici",
            link: "https://learn.microsoft.com/fr-fr/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio?view=vs-2022#printable-shortcut-cheatsheet"
        },
        {
            title: "Faites le plein de snippets",
            category: "OutilsDév",
            note: "Le saviez vous mais la roue a déjà été inventée, alors ne vous fatiguez pas il y a peut-être ce que vous cherchez chez 30secondsofcode.",
            descriptionLink: "Plein de snippets pour plusieurs type de langage ici",
            link: "https://www.30secondsofcode.org/"
        },
        {
            title: "Quand çà bug il faut un débuger",
            category: "JS",
            note: "L'outil de débugage de Mozilla peut vous sauver.",
            descriptionLink: "Un aperçu de ses capacitées ici",
            link: "https://hacks.mozilla.org/2019/05/faster-smarter-javascript-debugging-in-firefox/"
        },
        {
            title: "Générateur de fonction cubic-bezier()",
            category: "CSS",
            note: "Les transitions css avec la fonction cubic-bezier() vont vous ébourifer.",
            descriptionLink: "C'est facile de les paramètrer ici",
            link: "https://cubic-bezier.com/#.14,.73,.24,-0.41"
        },
        {
            title: "Comprendre les transitions",
            category: "CSS",
            note: "Quelques exemples de transitions css en préambule à la fonction cubic-bezier().",
            descriptionLink: "C'est surprenant",
            link: "https://dev.to/ananyaneogi/css-can-do-that-18g7"
        },
        {
            title: "CSS can do that?",
            category: "CSS",
            note: "Quelques exemples pour progresser en CSS.",
            descriptionLink: "C'est surprenant",
            link: "https://dev.to/ananyaneogi/css-can-do-that-18g7"
        },
        {
            title: "Color HEX",
            category: "CSS",
            note: "Une page du site w3schools vous permet de générer votre couleur et d'avoir le codage de celle-ci en héxadécimal ou autre.",
            descriptionLink: "C'est simple et beau",
            link: "https://www.w3schools.com/colors/colors_hexadecimal.asp"
        },
        {
            title: "Can I use?",
            category: "OutilsDév",
            note: "Pour savoir comment est supporté votre balise par les différents navigateurs.",
            descriptionLink: "Vérifiez ici",
            link: "https://caniuse.com/"
        },
        {
            title: "Caninclude?",
            category: "OutilsDév",
            note: "On se demande parfois si l'on peut faire telle ou telle imbrication de balises ou autre.",
            descriptionLink: "Pour voir votre idée est possible vous pouvez la vérifier ici",
            link: "https://caninclude.glitch.me/can/include/?child=li&parent=h2/"
        },
        {
            title: "Le Flexbox en 25 minutes",
            category: "CSS",
            note: "Sébastien Imbert propose un très didactique tutos sur le Flexbox.",
            descriptionLink: "Plus de détail chez sur sa chaîne Youtube",
            link: "https://www.youtube.com/watch?v=UcC76tcvLgA"
        },
        {
            title: "La balise canonical pour se prémunir du scraping",
            category: "Sécurité",
            note: "Pour éviter la duplication de vos pages web il existe une balise (canonical).",
            descriptionLink: "Plus de détail chez aide-memoire.blog-machine",
            link: "https://aide-memoire.blog-machine.info/ajouter-automatiquement-des-balises-canonical-a-votre-blog-wordpress/"
        },
        {
            title: "Le scraping de donnée c'est quoi ?",
            category: "Sécurité",
            note: "Technique qui consiste à extraire des données à l'aide d'un programme. Le scrapeur peut copier tout ou partiellement les données de votre site à des fins souvent malveillantes.",
            descriptionLink: "Plus de détail chez Cloudflare",
            link: "https://www.cloudflare.com/fr-fr/learning/bots/what-is-data-scraping/"
        },
        {
            title: "J'ai lu et accepte les Conditions d'Utilisation",
            category: "Vie privée",
            note: "Si vous ne les acceptez pas vous ne pouvez pas accéder au site, alors ils en profitent pour faire ce qu'ils veulent de vos données personnelles.",
            descriptionLink: "Ici vous pourrez voir et tester les sites qui se moquent de votre vie privée",
            link: "https://tosdr.org/"
        },
        {
            title: "Compter le nombre d'occurences dans un array js",
            category: "JS",
            note: "Une vidéo qui explique comment connaître le nombre d'une occurence dans un array",
            descriptionLink: "C'est ici",
            link: "https://www.youtube.com/watch?v=D3SjZmJkWLA"
        },
        {
            title: "Filtrer un array (methode filter et indexOf)",
            category: "JS",
            note: "Un script vidéo qui explique comment filtrer (ou enlever les doublons) dans un array",
            descriptionLink: "Apréciez la clareté de l'explication et sourtout l'accent",
            link: "https://www.youtube.com/watch?v=iSq04YDPOHY"
        },
        {
            title: "Editeur d'expression régulière (regEx)",
            category: "OutilsDév",
            note: "Parfois on s'arrache les cheveux pour élaborer une expression régulière. ",
            descriptionLink: "Sur rubular.com vous pouvez les tester rapidement.",
            link: "https://rubular.com/"
        },
        {
            title: "Désinstaller Edge",
            category: "Navigateurs",
            note: "Windows vous empêche de désinstaller son navigateur installé arbitrairement. Avec Revo Uninstaller pas de problème pour supprimer ce dévoreur d'énergie. ",
            descriptionLink: "Le lien pour le télécharger que je vous propose passe par le site de Malekal pour avoir plus de détail.",
            link: "https://www.malekal.com/revo-uninstaller-desinstaller-proprement-application-facilement/"
        },
        {
            title: "Désactiver Start Boost (Edge)",
            category: "Navigateurs",
            note: "Start Boost est sensé améliorer le chargement du navigateur mais il consomme beaucoup de ressources CPU en arrière plan; même quand il n'est pas activé.",
            descriptionLink: "Voici un site qui propose une modification du registre afin de remédier ce problème.",
            link: "https://fr.101-help.com/030ed60caf-allumer-ou-eteint-startup-boost-dans-edge-en-utilisant-registry-or-group-policy-editor/"
        }
    ];

    function tagCloud() {

        let arrayCategory = [];

        // Fonction qui extrait les objets du tableau arrayNotes
        function objectNote(arrayNotes) { 
            for (let i = 0; i < arrayNotes.length; i++) {
                let note = arrayNotes[i];
            }
            return arrayNotes;
        }
        let note = objectNote(arrayNotes);

// console.log(objectNote(arrayNotes));

        // Fonction qui extrait les catégories des tips
        function extractCategory(note) {
            for (let i in note) {
                const values = Object.values(note[i]);

                arrayCategory.push(values[1]);
            }
        }
        extractCategory(note);

// console.log(arrayCategory);

        // Fonction qui supprime les doublons
        function filterArray(array) {
            let filteredArray = array.filter((value, index) => array.indexOf(value) == index);

            let newArrayFiltered = [];

            for (let i = 0; i < filteredArray.length; i++) {

                const element = filteredArray[i];
                
                newArrayFiltered.push(element);
            }

// console.log(newArrayFiltered);

            return newArrayFiltered;
        }

        let arrayFiltered = filterArray(arrayCategory);


        // Fonction pour compter le nombre d'items identiques
        function tagCounter(array, item) {
            let counter = 0;
            array.flat(Infinity).forEach(x => {
                if(x === item) counter ++;
            })
            return counter;
        }

        // Insére dans le DOM les spans constituant le nuage de mots
        for (let i = 0; i < arrayFiltered.length; i++) {
            const element = arrayFiltered[i];

            let nbreDeOccurences = tagCounter(arrayCategory, element);
            
            document.getElementById('htmltagcloud').innerHTML +=
                '<span id="' + i + '"name="tagCloud" class="wrd tagcloud' + nbreDeOccurences + '"><a href="#tagcloud">' + element + '</a></span>';
        }
    }
    tagCloud();

    function getTagClicked() {
        
        let spans = document.querySelectorAll('span');

        for (let i = 0; i < spans.length; i++) {
            spans[i].addEventListener('click', getId);

            let idSpan = i;

            
            function getId() {

                let arrayCategory = [];

                // Fonction qui extrait les objets du arrayNotes
                function objectNote(arrayNotes) { 
                    /*for (let i = 0; i < arrayNotes.length; i++) {
                        let note = arrayNotes[i];
                    }*/
                    return arrayNotes;
                }
                let note = objectNote(arrayNotes);

// console.log(objectNote(arrayNotes));

                // Fonction qui extrait les catégories des tips
                function extractCategory(note) {
                    for (let i in note) {
                        const values = Object.values(note[i]);

                        arrayCategory.push(values[1]);
                    }
                }
                extractCategory(note);

// console.log(arrayCategory);

                // Fonction qui supprime les doublons
                function filterArray(array) {
                    let filteredArray = array.filter((value, index) => array.indexOf(value) == index);

                    let newArrayFiltered = [];

                    for (let i = 0; i < filteredArray.length; i++) {

                        const element = filteredArray[i];
                        
                        newArrayFiltered.push(element);
                    }
// console.log(newArrayFiltered);

                    return newArrayFiltered;
                }

                let arrayFiltered = filterArray(arrayCategory);

                for (let j = 0; j < arrayFiltered.length; j++) {
                    const cat = arrayFiltered[j];
                    
                    if (idSpan === j) {
                        tagClicked = arrayFiltered[j];
                    }
                }

                function filterArrayObject(array, item) {

                    let counInvalidEntries = 0;

                    function filterByCategory(obj) {

                        if (obj.category === item) {
                            return true;
                        }
                        counInvalidEntries++;

                        return false;
                    }

                    let arrayById = array.filter(filterByCategory);
// console.log(arrayById); // array ["Navigateurs", "Outils de développement", "Java Script", "Vie privée", "Sécurité"]

                    document.getElementById('section-tips').innerHTML = '';

                    function objectNote(arrayById) { 
                        for (let i = 0; i < arrayById.length; i++) {
                            let tip = arrayById[i];
                        }

                        return arrayById;
                    }

                    let tip = objectNote(arrayById);
// console.log(tip);
                    function displayNotes(tip) {
                        for (let i in tip) {
                            const values = Object.values(tip[i]);

                            for (let j = 0; j < values.length; j++) {
                                const element = values[j];
                            }

                            document.getElementById('section-tips').innerHTML +=
                            '<div class="div-tip">' +
                                '<h3 class="title-div">' + values[0] +
                                '</h3><p class="tip">' + values[2] +
                                '</p><a href="' + values[4] + '" class="link"><p class="descriptionLink">' + values[3] +
                                '</p></a>' + 
                            '</div>';
                        }
                    }
                    displayNotes(tip);

                    document.getElementById('title-div-category').innerHTML = '<h3 class="title-category">' + tagClicked + '</h3>';
                }
                filterArrayObject(arrayNotes, tagClicked);
            }            
        }
    }
    getTagClicked();
}
displayAllNotes();