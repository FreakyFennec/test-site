function triadsGenerator() {

	var fondamentale = document.getElementById("fondamentale").value;
    var qualitee = document.getElementById("qualitee").value;
    var groupeCordes = document.getElementById("groupeCordes").value;

    var scales = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"];

    var found = scales.find(element => element == fondamentale);
  
    var indexFondamentaleChoisie = scales.indexOf(found);

    var scalesLength = 8;

    var scale = [];

    // Boucle pour les gammes majeures.
    for (var i = 0; i < scalesLength; i++) {

        if (fondamentale === scales[indexFondamentaleChoisie]) {
            
            if (indexFondamentaleChoisie == 0) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);

            }
            else if (indexFondamentaleChoisie === 1) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);

            }else if (indexFondamentaleChoisie === 2) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);
                
            }else if (indexFondamentaleChoisie === 3) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);
                
            }else if (indexFondamentaleChoisie === 4) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);
                
            }else if (indexFondamentaleChoisie === 5) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);
                
            }else if (indexFondamentaleChoisie === 6) {

                var j = indexFondamentaleChoisie + i;

                scale.push(scales[j]);
                
            }            
        }
    }

// C
    if (indexFondamentaleChoisie === 0) {

        if (qualitee === "Maj") {

            // Pour la gamme majeure pas de changements.

        }else if (qualitee === "minNat") {

            scale[2] = "Eb";
            scale[5] = "Ab";
            scale[6] = "Bb";

        }else if (qualitee === "minHar") {

            scale[2] = "Eb";
            scale[5] = "Ab";

        }else if (qualitee === "minMelAsc") {

            scale[2] = "Eb";

        }else if (qualitee === "minMelDesc") {

            scale[6] = "Bb";
            scale[5] = "Ab";
            scale[2] = "Eb";            

        }else if (qualitee === "dim") {

            scale[2] = "Eb";
            scale[4] = "Gb";
            scale[5] = "Ab";
            scale[6] = "A";
            scale[7] = "B";

        }else if (qualitee === "aug") {

            scale[4] = "G#";

        }else if (qualitee === "sus4") {

            scale[2] = "F";

        }
 // D
    }else if (indexFondamentaleChoisie === 1) {

        if (qualitee === "Maj") {

            scale[2] = "F#";
            scale[6] = "C#";

        }else if (qualitee === "minNat") {

            scale[2] = "F";
            scale[5] = "Bb";

        }else if (qualitee === "minHar") {

            scale[5] = "Bb";
            scale[6] = "C#";

        }else if (qualitee === "minMelAsc") {

            scale[6] = "C#";

        }else if (qualitee === "minMelDesc") {

            scale[5] = "Bb";

        }else if (qualitee === "dim") {

            scale[4] = "Ab";
            scale[5] = "Bb";
            scale[6] = "B";
            scale[7] = "C#";

        }else if (qualitee === "aug") {

            scale[2] = "F#";
            scale[4] = "A#";

        }else if (qualitee === "sus4") {

            scale[2] = "G";
            scale[4] = "A";

        }

// E
    }else if (indexFondamentaleChoisie === 2) {

        if (qualitee == "Maj") {

            scale[1] = "F#";
            scale[2] = "G#";
            scale[5] = "C#";
            scale[6] = "D#";

        }else if (qualitee === "minNat") {

            scale[1] = "F#";
            scale[2] = "G";
            scale[5] = "C";
            scale[6] = "D";

        }else if (qualitee === "minHar") {

            scale[1] = "F#";
            scale[2] = "G";
            scale[5] = "C";
            scale[6] = "D#";

        }else if (qualitee === "minMelAsc") {

            scale[6] = "D#";
            scale[5] = "C#";
            scale[1] = "F#";

        }else if (qualitee === "minMelDesc") {

            scale[1] = "F#";

        }else if (qualitee === "dim") {

            scale[1] = "F#";
            scale[4] = "Bb";
            scale[6] = "C#";
            scale[7] = "D#";

        }else if (qualitee === "aug") {

            scale[2] = "G#";
            scale[4] = "B#";

        }else if (qualitee === "sus4") {

            scale[2] = "A";
            scale[4] = "B";

        }

// F
    }else if (indexFondamentaleChoisie === 3) {

        if (qualitee === "Maj") {

            scale[3] = "Bb";

        }else if (qualitee === "minNat") {

            scale[2] = "Ab";
            scale[3] = "Bb";
            scale[5] = "Db";
            scale[6] = "Eb";

        }else if (qualitee === "minHar") {

            scale[2] = "Ab";
            scale[3] = "Bb";
            scale[5] = "Db";
            scale[6] = "E";

        }else if (qualitee === "minMelAsc") {

            scale[3] = "Bb";
            scale[2] = "Ab";

        }else if (qualitee === "minMelDesc") {

            scale[2] = "Ab";
            scale[3] = "Bb";
            scale[5] = "Db";
            scale[6] = "Eb";

        }else if (qualitee === "dim") {

            scale[2] = "Ab";
            scale[3] = "Bb";
            scale[4] = "B";
            scale[5] = "C#";
            scale[6] = "D";
            scale[7] = "E";

        }else if (qualitee === "aug") {

            scale[4] = "C#";

        }else if (qualitee === "sus4") {

            scale[0] = "Pas";
            scale[2] = "d'accord";
            scale[4] = "sus4";

        }

// G        
    }else if (indexFondamentaleChoisie === 4) {

        if (qualitee === "Maj") {

            scale[6] = "F#";

        }else if (qualitee === "minNat") {

            scale[2] = "Bb";
            scale[5] = "Eb";
            scale[6] = "F";

        }else if (qualitee === "minHar") {

            scale[2] = "Bb";
            scale[5] = "Eb";
            scale[6] = "F#";

        }else if (qualitee === "minMelAsc") {

            scale[2] = "Bb";
            scale[6] = "F#";

        }else if (qualitee === "minMelDesc") {

            scale[2] = "Bb";
            scale[5] = "Eb";

        }else if (qualitee === "dim") {

            scale[2] = "Bb";
            scale[4] = "Db";
            scale[5] = "Eb";
            scale[6] = "E";
            scale[7] = "F#";

        }else if (qualitee === "aug") {

            scale[4] = "D#";

        }else if (qualitee === "sus4") {

            scale[2] = "C";
            scale[4] = "D";

        }

// A
    }else if (indexFondamentaleChoisie === 5) {

        if (qualitee === "Maj") {

            scale[2] = "C#";
            scale[5] = "F#";
            scale[6] = "G#";

        }else if (qualitee === "minNat") {

            // C'est la relative mmineure de C.

        }else if (qualitee === "minHar") {

            scale[6] = "G#";

        }else if (qualitee === "minMelAsc") {

            scale[5] = "F#";
            scale[6] = "G#";
            

        }else if (qualitee === "minMelDesc") {

            // C'est la relative mmineure de C. Comme le mode min harmonique.

        }else if (qualitee === "dim") {

            scale[4] = "Eb";
            scale[6] = "F#";
            scale[7] = "G#";

        }else if (qualitee === "aug") {

            scale[2] = "C#";
            scale[4] = "E#";

        }else if (qualitee === "sus4") {

            scale[2] = "D";
            scale[4] = "E";

        }

// B
    }else if (indexFondamentaleChoisie === 6) {

        if (qualitee === "Maj") {

            scale[1] = "C#";
            scale[2] = "D#";
            scale[4] = "F#";
            scale[5] = "G#";
            scale[6] = "A#";

        }else if (qualitee === "minNat") {

            scale[1] = "C#";
            scale[2] = "D";
            scale[4] = "F#";
            scale[5] = "G";
            scale[6] = "A";

        }else if (qualitee === "minHar") {

            scale[1] = "C#";
            scale[4] = "F#";
            scale[6] = "A#";

        }else if (qualitee === "minMelAsc") {

            scale[1] = "C#";
            scale[4] = "F#";
            scale[5] = "G#";
            scale[6] = "A#";

        }else if (qualitee === "minMelDesc") {

            scale[1] = "C#";
            scale[4] = "F#";

        }else if (qualitee === "dim") {

            scale[1] = "C#";
            scale[6] = "G#";
            scale[7] = "A#";

        }else if (qualitee === "aug") {

            scale[2] = "D#";
            scale[4] = "F##";

        }else if (qualitee === "sus4") {

            scale[0] = "Pas";
            scale[2] = "d'accord";
            scale[4] = "sus4";

        }
    }
    document.getElementById('triadsGenerator').innerHTML = "Triade de " + fondamentale + " " + qualitee + "<br/>pour les cordes " + groupeCordes + " : <br/>" + scale[0] + ", " + scale[2] + ", " + scale[4] + ".";

    return scale;
}
triadsGenerator();

// console.log("La gamme choisie est : " + triadsGenerator());