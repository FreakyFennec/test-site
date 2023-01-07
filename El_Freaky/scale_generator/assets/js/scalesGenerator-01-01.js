function scalesGenerator() {

        var fondamentale = document.getElementById("fondamentale").value;
        var qualitee = document.getElementById("qualitee").value;
        var alteration = document.getElementById("alteration").value;
    
        var scales = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"];
    
        var found = scales.find(element => element == fondamentale);
      
        var indexFondamentaleChoisie = scales.indexOf(found);
    
        var scalesLength = 8;
    
        var scaleNotes = [];
    
        // Boucle pour les gammes majeures.
        for (var i = 0; i < scalesLength; i++) {
    
            if (fondamentale === scales[indexFondamentaleChoisie]) {
                
                if (indexFondamentaleChoisie == 0) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
    
                }else if (indexFondamentaleChoisie === 1) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
    
                }else if (indexFondamentaleChoisie === 2) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
                    
                }else if (indexFondamentaleChoisie === 3) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
                    
                }else if (indexFondamentaleChoisie === 4) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
                    
                }else if (indexFondamentaleChoisie === 5) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
                    
                }else if (indexFondamentaleChoisie === 6) {
    
                    var j = indexFondamentaleChoisie + i;
    
                    scaleNotes.push(" " +scales[j]);
                    
                }            
            }
        }
    
    // C
        if (indexFondamentaleChoisie === 0) {
    
            if (qualitee === "Maj") {
    
                // Pour la gamme majeure pas de changements.
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[2] = " Eb";
                scaleNotes[5] = " Ab";
                scaleNotes[6] = " Bb";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[2] = " Eb";
                scaleNotes[5] = " Ab";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[2] = " Eb";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[6] = " Bb";
                scaleNotes[5] = " Ab";
                scaleNotes[2] = " Eb";            
    
            }else if (qualitee === "dim") {
    
                scaleNotes[2] = " Eb";
                scaleNotes[4] = " Gb";
                scaleNotes[5] = " Ab";
                scaleNotes[6] = " A";
                scaleNotes[7] = " B";
    
            }/*else if (qualitee === "aug") {
    
                scale[4] = "G#";
    
            }else if (qualitee === "sus4") {
    
                scale[2] = "E#";
    
            }*/
    // D
        }else if (indexFondamentaleChoisie === 1) {
    
            if (qualitee === "Maj") {
    
                scaleNotes[2] = " F#";
                scaleNotes[6] = " C#";
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[2] = " F";
                scaleNotes[5] = " Bb";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[5] = " Bb";
                scaleNotes[6] = " C#";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[6] = " C#";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[5] = " Bb";
    
            }else if (qualitee === "dim") {
    
                scaleNotes[4] = " Ab";
                scaleNotes[5] = " Bb";
                scaleNotes[6] = " B";
                scaleNotes[7] = " C#";
    
            }/*else if (qualitee === "aug") {
    
                scaleNotes[4] = "A#";
    
            }else if (qualitee === "sus4") {
    
                scaleNotes[3] = "G";
                scaleNotes[6] = "C#";
    
            }*/
    // E
        }else if (indexFondamentaleChoisie === 2) {
    
            if (qualitee == "Maj") {
    
                scaleNotes[1] = " F#";
                scaleNotes[2] = " G#";
                scaleNotes[5] = " C#";
                scaleNotes[6] = " D#";
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[1] = " F#";
                scaleNotes[2] = " G";
                scaleNotes[5] = " C";
                scaleNotes[6] = " D";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[1] = " F#";
                scaleNotes[2] = " G";
                scaleNotes[5] = " C";
                scaleNotes[6] = " D#";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[6] = " D#";
                scaleNotes[5] = " C#";
                scaleNotes[1] = " F#";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[1] = "F#";
    
            }else if (qualitee === "dim") {
    
                scaleNotes[1] = " F#";
                scaleNotes[4] = " Bb";
                scaleNotes[6] = " C#";
                scaleNotes[7] = " D#";
    
            }/*else if (qualitee === "aug") {
    
    
    
            }else if (qualitee === "sus4") {
    
                
    
            }*/
    // F
        }else if (indexFondamentaleChoisie === 3) {
    
            if (qualitee === "Maj") {
    
                scaleNotes[3] = " Bb";
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[2] = " Ab";
                scaleNotes[3] = " Bb";
                scaleNotes[5] = " Db";
                scaleNotes[6] = " Eb";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[2] = " Ab";
                scaleNotes[3] = " Bb";
                scaleNotes[5] = " Db";
                scaleNotes[6] = " E";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[3] = " Bb";
                scaleNotes[2] = " Ab";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[2] = " Ab";
                scaleNotes[3] = " Bb";
                scaleNotes[5] = " Db";
                scaleNotes[6] = " Eb";
    
            }else if (qualitee === "dim") {
    
                scaleNotes[2] = " Ab";
                scaleNotes[3] = " Bb";
                scaleNotes[4] = " B";
                scaleNotes[5] = " C#";
                scaleNotes[6] = " D";
                scaleNotes[7] = " E";
    
            }/*else if (qualitee === "aug") {
    
                
    
            }else if (qualitee === "sus4") {
    
                
    
            }*/
    // G
        }else if (indexFondamentaleChoisie === 4) {
    
            if (qualitee === "Maj") {
    
                scaleNotes[6] = " F#";
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[2] = " Bb";
                scaleNotes[5] = " Eb";
                scaleNotes[6] = " F";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[2] = " Bb";
                scaleNotes[5] = " Eb";
                scaleNotes[6] = " F#";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[2] = " Bb";
                scaleNotes[6] = " F#";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[2] = " Bb";
                scaleNotes[5] = " Eb";
    
            }else if (qualitee === "dim") {
    
                scaleNotes[2] = " Bb";
                scaleNotes[4] = " Db";
                scaleNotes[5] = " Eb";
                scaleNotes[6] = " E";
                scaleNotes[7] = " F#";
    
            }/*else if (qualitee === "aug") {
    
                
    
            }else if (qualitee === "sus4") {
    
                
    
            }*/
    // A
        }else if (indexFondamentaleChoisie === 5) {
    
            if (qualitee === "Maj") {
    
                scaleNotes[2] = " C#";
                scaleNotes[5] = " F#";
                scaleNotes[6] = " G#";
    
            }else if (qualitee === "minNat") {
    
                // C'est la relative mmineure de C.
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[6] = " G#";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[5] = " F#";
                scaleNotes[6] = " G#";
                
    
            }else if (qualitee === "minMelDesc") {
    
                // C'est la relative mmineure de C. Comme le mode min harmonique.
    
            }else if (qualitee === "dim") {
    
                scaleNotes[4] = " Eb";
                scaleNotes[6] = " F#";
                scaleNotes[7] = " G#";
    
            }/*else if (qualitee === "aug") {
    
                
    
            }else if (qualitee === "sus4") {
    
                
    
            }*/
    // B
        }else if (indexFondamentaleChoisie === 6) {
    
            if (qualitee === "Maj") {
    
                scaleNotes[1] = " C#";
                scaleNotes[2] = " D#";
                scaleNotes[4] = " F#";
                scaleNotes[5] = " G#";
                scaleNotes[6] = " A#";
    
            }else if (qualitee === "minNat") {
    
                scaleNotes[1] = " C#";
                scaleNotes[2] = " D";
                scaleNotes[4] = " F#";
                scaleNotes[5] = " G";
                scaleNotes[6] = " A";
    
            }else if (qualitee === "minHar") {
    
                scaleNotes[1] = " C#";
                scaleNotes[4] = " F#";
                scaleNotes[6] = " A#";
    
            }else if (qualitee === "minMelAsc") {
    
                scaleNotes[1] = " C#";
                scaleNotes[4] = " F#";
                scaleNotes[5] = " G#";
                scaleNotes[6] = " A#";
    
            }else if (qualitee === "minMelDesc") {
    
                scaleNotes[1] = " C#";
                scaleNotes[4] = " F#";
    
            }else if (qualitee === "dim") {
    
                scaleNotes[1] = " C#";
                scaleNotes[6] = " G#";
                scaleNotes[7] = " A#";
    
            }/*else if (qualitee === "aug") {
    
                
    
            }else if (qualitee === "sus4") {
    
                
    
            }*/
        }
    
        // console.log('gamme choisie : ' + scaleNotes);
    
        // Affiche gamme générée.
        document.getElementById('scaleDiatoniqueGenerated').innerHTML = fondamentale + qualitee + " : " + scaleNotes;
    
        return scaleNotes;
}
