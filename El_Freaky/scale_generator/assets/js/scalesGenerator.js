function scalesGenerator() {

	var fondamentale = document.getElementById("fondamentale").value;
    var qualitee = document.getElementById("qualitee").value;

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

                scale.push(" " + scales[j]);

            }else if (indexFondamentaleChoisie === 1) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);

            }else if (indexFondamentaleChoisie === 2) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);
                
            }else if (indexFondamentaleChoisie === 3) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);
                
            }else if (indexFondamentaleChoisie === 4) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);
                
            }else if (indexFondamentaleChoisie === 5) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);
                
            }else if (indexFondamentaleChoisie === 6) {

                var j = indexFondamentaleChoisie + i;

                scale.push(" " + scales[j]);
                
            }            
        }
    }

// C
    if (indexFondamentaleChoisie === 0) {

        if (qualitee === "Maj") {

            // Pour la gamme majeure pas de changements.

        }else if (qualitee === "minNat") {

            scale[2] = " Eb";
            scale[5] = " Ab";
            scale[6] = " Bb";

        }else if (qualitee === "minHar") {

            scale[2] = " Eb";
            scale[5] = " Ab";

        }else if (qualitee === "minMelAsc") {

            scale[2] = " Eb";

        }else if (qualitee === "minMelDesc") {

            scale[6] = " Bb";
            scale[5] = " Ab";
            scale[2] = " Eb";            

        }else if (qualitee === "dim") {

            scale[2] = " Eb";
            scale[4] = " Gb";
            scale[5] = " Ab";
            scale[6] = " A";
            scale[7] = " B";

        }/*else if (qualitee === "aug") {

            scale[4] = " G#";

        }else if (qualitee === "sus4") {

            scale[2] = " E#";

        }*/
 // D
    }else if (indexFondamentaleChoisie === 1) {

        if (qualitee === "Maj") {

            scale[2] = " F#";
            scale[6] = " C#";

        }else if (qualitee === "minNat") {

            scale[2] = " F";
            scale[5] = " Bb";

        }else if (qualitee === "minHar") {

            scale[5] = " Bb";
            scale[6] = " C#";

        }else if (qualitee === "minMelAsc") {

            scale[6] = " C#";

        }else if (qualitee === "minMelDesc") {

            scale[5] = " Bb";

        }else if (qualitee === "dim") {

            scale[4] = " Ab";
            scale[5] = " Bb";
            scale[6] = " B";
            scale[7] = " C#";

        }/*else if (qualitee === "aug") {

            scale[4] = " A#";

        }else if (qualitee === "sus4") {

            scale[3] = " G";
            scale[6] = " C#";

        }*/

// E
    }else if (indexFondamentaleChoisie === 2) {

        if (qualitee == "Maj") {

            scale[1] = " F#";
            scale[2] = " G#";
            scale[5] = " C#";
            scale[6] = " D#";

        }else if (qualitee === "minNat") {

            scale[1] = " F#";
            scale[2] = " G";
            scale[5] = " C";
            scale[6] = " D";

        }else if (qualitee === "minHar") {

            scale[1] = " F#";
            scale[2] = " G";
            scale[5] = " C";
            scale[6] = " D#";

        }else if (qualitee === "minMelAsc") {

            scale[6] = " D#";
            scale[5] = " C#";
            scale[1] = " F#";

        }else if (qualitee === "minMelDesc") {

            scale[1] = " F#";

        }else if (qualitee === "dim") {

            scale[1] = " F#";
            scale[4] = " Bb";
            scale[6] = " C#";
            scale[7] = " D#";

        }/*else if (qualitee === "aug") {



        }else if (qualitee === "sus4") {

            

        }*/

// F
    }else if (indexFondamentaleChoisie === 3) {

        if (qualitee === "Maj") {

            scale[3] = " Bb";

        }else if (qualitee === "minNat") {

            scale[2] = " Ab";
            scale[3] = " Bb";
            scale[5] = " Db";
            scale[6] = " Eb";

        }else if (qualitee === "minHar") {

            scale[2] = " Ab";
            scale[3] = " Bb";
            scale[5] = " Db";
            scale[6] = " E";

        }else if (qualitee === "minMelAsc") {

            scale[3] = " Bb";
            scale[2] = " Ab";

        }else if (qualitee === "minMelDesc") {

            scale[2] = " Ab";
            scale[3] = " Bb";
            scale[5] = " Db";
            scale[6] = " Eb";

        }else if (qualitee === "dim") {

            scale[2] = " Ab";
            scale[3] = " Bb";
            scale[4] = " B";
            scale[5] = " C#";
            scale[6] = " D";
            scale[7] = " E";

        }/*else if (qualitee === "aug") {

            

        }else if (qualitee === "sus4") {

            

        }*/

// G        
    }else if (indexFondamentaleChoisie === 4) {

        if (qualitee === "Maj") {

            scale[6] = " F#";

        }else if (qualitee === "minNat") {

            scale[2] = " Bb";
            scale[5] = " Eb";
            scale[6] = " F";

        }else if (qualitee === "minHar") {

            scale[2] = " Bb";
            scale[5] = " Eb";
            scale[6] = " F#";

        }else if (qualitee === "minMelAsc") {

            scale[2] = " Bb";
            scale[6] = " F#";

        }else if (qualitee === "minMelDesc") {

            scale[2] = " Bb";
            scale[5] = " Eb";

        }else if (qualitee === "dim") {

            scale[2] = " Bb";
            scale[4] = " Db";
            scale[5] = " Eb";
            scale[6] = " E";
            scale[7] = " F#";
 
        }/*else if (qualitee === "aug") {

            

        }else if (qualitee === "sus4") {

            

        }*/

// A
    }else if (indexFondamentaleChoisie === 5) {

        if (qualitee === "Maj") {

            scale[2] = " C#";
            scale[5] = " F#";
            scale[6] = " G#";

        }else if (qualitee === "minNat") {

            // C'est la relative mmineure de C.

        }else if (qualitee === "minHar") {

            scale[6] = " G#";

        }else if (qualitee === "minMelAsc") {

            scale[5] = " F#";
            scale[6] = " G#";
            

        }else if (qualitee === "minMelDesc") {

            // C'est la relative mmineure de C. Comme le mode min harmonique.

        }else if (qualitee === "dim") {

            scale[4] = " Eb";
            scale[6] = " F#";
            scale[7] = " G#";

        }/*else if (qualitee === "aug") {

            

        }else if (qualitee === "sus4") {

            

        }*/

// B
    }else if (indexFondamentaleChoisie === 6) {

        if (qualitee === "Maj") {

            scale[1] = " C#";
            scale[2] = " D#";
            scale[4] = " F#";
            scale[5] = " G#";
            scale[6] = " A#";

        }else if (qualitee === "minNat") {

            scale[1] = " C#";
            scale[2] = " D";
            scale[4] = " F#";
            scale[5] = " G";
            scale[6] = " A";

        }else if (qualitee === "minHar") {

            scale[1] = "C#";
            scale[4] = "F#";
            scale[6] = "A#";

        }else if (qualitee === "minMelAsc") {

            scale[1] = " C#";
            scale[4] = " F#";
            scale[5] = " G#";
            scale[6] = " A#";

        }else if (qualitee === "minMelDesc") {

            scale[1] = " C#";
            scale[4] = " F#";

        }else if (qualitee === "dim") {

            scale[1] = " C#";
            scale[6] = " G#";
            scale[7] = " A#";

        }/*else if (qualitee === "aug") {

            

        }else if (qualitee === "sus4") {

            

        }*/
    }
    document.getElementById('scalesGenerator').innerHTML = fondamentale + qualitee + " : <br>" + scale;

 



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


// Canvas du manche guitare avec les notes./////////////////////
////////////////////////////////////////////////////////////////
    function draw_4() {

        var fondamentale = document.getElementById("fondamentale").value;
        var alteration = document.getElementById("alteration").value;
        var qualitee = document.getElementById("qualitee").value;
        // var groupeCordes = document.getElementById("groupeCordes").value;
        var canvas = document.getElementById('canvas_4');

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
        }

        var scales = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"];

        var found = scales.find(element => element == fondamentale);
      
        var indexFondamentaleChoisie = scales.indexOf(found);

        var scalesLength = 7;

        var scale = [];

        console.log("Fondamentale : " + fondamentale);
        console.log("Alteration : " + alteration);
        console.log("Qualitee : " + qualitee);
        //console.log("Groupe de cordes : " + groupeCordes);
        console.log("Index fondamentale choisie : " + indexFondamentaleChoisie);

        function gammesSolfege() {
    // Portée ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Lignes ////////////////////////////////////////////////////////////////////////////////////////
            // Lignes courtes ht
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                /*ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 7, 25, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 18, 25, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 28, 25, 1);
                ctx.fill();*/

            // Lignes longues
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(1, 39, 535, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(1, 49, 535, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(1, 60, 535, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(1, 71, 535, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(1, 81, 535, 1);
                ctx.fill();

            // Lignes courtes bs 
                /*ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 92, 25, 1);
                ctx.fill();
             
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 102, 25, 1);
                ctx.fill();

                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.rect(60, 113, 25, 1);
                ctx.fill();*/
            
        // Clé de Sol
        function cleDeSol() {

            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                ctx.save();
                ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
            
            // Boucle 4
                ctx.beginPath();
                ctx.strokeStyle = 'rgb(1, 0, 0)';
                ctx.miterLimit = 4;
                ctx.lineWidth = 0.003549;
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.moveTo(40.489742, 154.305590);
                ctx.bezierCurveTo(38.951000, 153.975330, 37.920778, 153.425420, 36.886371, 152.382170);
                ctx.bezierCurveTo(36.034307, 151.522820, 35.540404, 150.633810, 35.265434, 149.464520);
                ctx.bezierCurveTo(35.051089, 148.553030, 35.109784, 146.317870, 35.369214, 145.512410);
                ctx.bezierCurveTo(35.957250, 143.686700, 37.257481, 142.606710, 39.049901, 142.455170);
                ctx.bezierCurveTo(40.850108, 142.302970, 42.459280, 143.813760, 42.456168, 145.653180);
                ctx.bezierCurveTo(42.454268, 146.787150, 41.729551, 147.962130, 40.689543, 148.517490);
                ctx.bezierCurveTo(39.856695, 148.962220, 38.509913, 148.663240, 37.356541, 147.777570);
                ctx.lineTo(36.858418, 147.395060);
                ctx.lineTo(36.800178, 147.829250);
                ctx.bezierCurveTo(36.570956, 149.538220, 37.749841, 151.591400, 39.437293, 152.422130);
                ctx.bezierCurveTo(41.100049, 153.240700, 42.542096, 153.278220, 44.111655, 152.543730);
                ctx.bezierCurveTo(45.322042, 151.977320, 46.208303, 150.921030, 46.914987, 149.202580);
                ctx.bezierCurveTo(47.429625, 147.951130, 47.522179, 147.270710, 47.446802, 145.292930);
                ctx.bezierCurveTo(47.323192, 142.049680, 47.110483, 140.634050, 45.060660, 129.412650);
                ctx.bezierCurveTo(41.658613, 110.788670, 41.634089, 110.660550, 40.490182, 105.535610);
                ctx.bezierCurveTo(38.380397, 96.083307, 37.912619, 93.148339, 37.910293, 89.348645);
                ctx.bezierCurveTo(37.908193, 85.802688, 38.612307, 83.829628, 40.530250, 82.007771);
                ctx.bezierCurveTo(41.971793, 80.638446, 43.357278, 79.991434, 44.847949, 79.991434);
                ctx.bezierCurveTo(45.605763, 79.991434, 45.797887, 80.034384, 46.428265, 80.344717);
                ctx.bezierCurveTo(47.857759, 81.048455, 49.173188, 82.979884, 49.740346, 85.207809);
                ctx.bezierCurveTo(50.178490, 86.928942, 50.131360, 89.828689, 49.627742, 92.136199);
                ctx.bezierCurveTo(49.365140, 93.339382, 48.540995, 95.785257, 48.105784, 96.652995);
                ctx.bezierCurveTo(47.617054, 97.627450, 46.317939, 99.538287, 45.357343, 100.695660);
                ctx.bezierCurveTo(44.339956, 101.921430, 42.202967, 104.439100, 42.133686, 104.369820);
                ctx.bezierCurveTo(41.711863, 102.614280, 41.452225, 101.263230, 41.060647, 99.368601);
                ctx.lineTo(42.499589, 97.929784);
                ctx.bezierCurveTo(46.737029, 94.072301, 48.208273, 91.896725, 48.503313, 89.551263);
                ctx.bezierCurveTo(48.756765, 87.536409, 47.050705, 85.003744, 45.245564, 84.715089);
                ctx.bezierCurveTo(44.334374, 84.569383, 42.923179, 85.215839, 42.092594, 86.159433);
                ctx.bezierCurveTo(40.725724, 87.712272, 40.016818, 90.079766, 40.026552, 93.059260);
                ctx.lineTo(40.032052, 94.726349);
                ctx.lineTo(41.059257, 99.620069);
                ctx.bezierCurveTo(42.508115, 106.522660, 42.890356, 108.505090, 43.620394, 112.903080);
                ctx.bezierCurveTo(43.973891, 115.032650, 44.936371, 120.671180, 45.759241, 125.433140);
                ctx.bezierCurveTo(47.921564, 137.946510, 48.248153, 139.975690, 48.676029, 143.555990);
                ctx.bezierCurveTo(48.878380, 145.249150, 48.854152, 147.932080, 48.628929, 148.772370);
                ctx.bezierCurveTo(48.218891, 150.302170, 47.384813, 151.677400, 46.203888, 152.770750);
                ctx.bezierCurveTo(44.629058, 154.228800, 42.631700, 154.765270, 40.489795, 154.305590);
                ctx.fill();
                ctx.stroke();
                
            // Boucle 1
                ctx.beginPath();
                ctx.strokeStyle = 'rgb(1, 0, 0)';
                ctx.miterLimit = 4;
                ctx.lineWidth = 0.003549;
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.moveTo(40.158704, 132.054450);
                ctx.bezierCurveTo(37.859019, 130.328530, 36.498376, 128.576710, 35.848342, 126.504900);
                ctx.bezierCurveTo(35.398973, 124.780970, 35.564335, 122.905140, 36.056580, 121.668750);
                ctx.bezierCurveTo(36.922935, 119.492690, 37.990017, 118.044490, 39.430906, 117.086590);
                ctx.bezierCurveTo(40.245873, 116.544800, 42.494146, 115.750350, 42.494146, 115.750350);
                ctx.lineTo(43.337151, 120.359710);
                ctx.lineTo(42.001172, 120.920170);
                ctx.bezierCurveTo(40.633424, 121.620950, 39.557499, 123.016800, 39.147638, 124.622200);
                ctx.bezierCurveTo(38.916731, 125.526640, 38.936313, 127.150270, 39.189968, 128.131680);
                ctx.bezierCurveTo(39.422335, 129.030750, 39.959519, 130.353080, 40.656770, 131.742350);
                ctx.bezierCurveTo(40.916109, 132.259090, 41.115412, 132.694770, 41.099661, 132.710520);
                ctx.bezierCurveTo(41.083921, 132.726220, 40.660479, 132.431040, 40.158708, 132.054450);
                ctx.fill();
                ctx.stroke();
                
            // Boucle 2 
                ctx.beginPath();
                ctx.strokeStyle = 'rgb(1, 0, 0)';
                ctx.miterLimit = 4;
                ctx.lineWidth = 0.003549;
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.moveTo(47.643319, 136.097950);
                ctx.lineTo(47.442540, 134.994110);
                ctx.lineTo(48.706714, 134.220170);
                ctx.bezierCurveTo(49.528012, 133.717360, 50.844179, 132.337470, 51.363668, 131.533720);
                ctx.bezierCurveTo(52.667720, 129.516120, 52.792510, 126.047130, 51.648899, 123.604720);
                ctx.bezierCurveTo(51.210667, 122.668780, 49.975685, 121.441790, 48.911287, 120.884820);
                ctx.bezierCurveTo(48.059636, 120.439170, 46.727162, 120.055430, 46.031361, 120.055430);
                ctx.lineTo(44.904945, 120.072830);
                ctx.lineTo(44.090153, 115.395000);
                ctx.lineTo(45.770860, 115.468300);
                ctx.bezierCurveTo(48.480117, 115.586450, 50.670158, 116.671360, 52.489795, 118.564830);
                ctx.bezierCurveTo(54.554534, 120.742200, 55.387552, 123.428560, 55.372624, 125.648260);
                ctx.bezierCurveTo(55.345754, 129.097200, 54.545852, 131.263010, 52.576145, 133.219960);
                ctx.bezierCurveTo(51.697852, 134.092580, 50.692023, 134.750450, 49.573976, 135.360760);
                ctx.bezierCurveTo(49.122517, 135.607200, 47.643319, 136.097960, 47.643319, 136.097960);
                ctx.fill();
                ctx.stroke();
                
            // Boucle 3
                ctx.beginPath();
                ctx.strokeStyle = 'rgb(1, 0, 0)';
                ctx.miterLimit = 4;
                ctx.lineWidth = 0.003549;
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.moveTo(39.802376, 136.995730);
                ctx.bezierCurveTo(37.643408, 136.745480, 35.599303, 136.018040, 33.984771, 135.089560);
                ctx.bezierCurveTo(30.769742, 133.240680, 27.914766, 129.602470, 26.995051, 126.182260);
                ctx.bezierCurveTo(25.658442, 121.211710, 26.944641, 114.713890, 29.794329, 110.900750);
                ctx.bezierCurveTo(31.320819, 108.858170, 39.364615, 100.769090, 39.364615, 100.769090);
                ctx.lineTo(40.441996, 105.652790);
                ctx.bezierCurveTo(40.441996, 105.652790, 38.864328, 107.286100, 37.666442, 108.414270);
                ctx.bezierCurveTo(32.863890, 112.937310, 30.190175, 116.375700, 29.262056, 119.222270);
                ctx.bezierCurveTo(28.712355, 120.908230, 28.497201, 123.825660, 28.775180, 125.824260);
                ctx.bezierCurveTo(29.111440, 128.241880, 30.307991, 130.516750, 32.300190, 132.525950);
                ctx.bezierCurveTo(34.968955, 135.217520, 37.941784, 136.505360, 41.497702, 136.510320);
                ctx.bezierCurveTo(42.213397, 136.511320, 44.072296, 136.312670, 44.886226, 136.040320);
                ctx.lineTo(46.119748, 135.627580);
                ctx.bezierCurveTo(46.119748, 135.627580, 46.209008, 136.094090, 46.266893, 136.322490);
                ctx.bezierCurveTo(46.266893, 136.322490, 43.293471, 137.400390, 39.802376, 136.995730);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        }cleDeSol();
            
        
    // Armures //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Cycle des quintes ////////////////////////////////////////////////////////////////////////////////////////////////////
            // Gamme de G////////////////////////////////////////////////////////////////////////////////////////////////////////
            function armureGmajEmin() {
                function dieseF3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseF3();
            } // End armure Gmaj //////////////////////////////////////////////////////////////////////////////////////////////

            // Gamme de Dmaj///////////////////////////////////////////////////////////////////////////////////////////////////
            function armureDmaj() {
                function dieseF3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseF3();

                function dieseC2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -38.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseC2();

            } // End armure Dmaj //////////////////////////////////////////////////////////////////////////////////////////////

            // Gamme de Emaj //////////////////////////////////////////////////////////////////////////////////////////////////
            function armureEmaj() {
                function dieseF3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseF3();

                function dieseC2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -38.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseC2();

                function dieseG2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 21.339244, -24.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                } dieseG2();

                function dieseD2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 21.339244, -45.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseD2();
            } // End armure Emaj

            // Gamme de Amaj 
            function armureAmaj() {
                function dieseF3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseF3();

                function dieseC2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -38.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseC2();

                function dieseG2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 21.339244, -24.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                } dieseG2();    
            } // End armure Amaj

            // Armure Bmaj //////////////////////////////////////////////////////////
            function armureBmaj() {
                function dieseF3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseF3();

                function dieseC2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -38.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseC2();

                function dieseG2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 21.339244, -24.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                } dieseG2();

                function dieseD2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 21.339244, -45.176814);
                        
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgb(1, 0, 0)';
                        ctx.miterLimit = 4;
                        ctx.lineWidth = 0.027345;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.495288, 103.298670);
                        ctx.lineTo(63.460171, 103.647200);
                        ctx.lineTo(63.487371, 99.721951);
                        ctx.lineTo(64.469408, 99.394521);
                        ctx.lineTo(64.482708, 92.286614);
                        ctx.lineTo(63.474501, 92.595524);
                        ctx.lineTo(63.461601, 88.608987);
                        ctx.lineTo(64.495318, 88.270217);
                        ctx.lineTo(64.495318, 81.642957);
                        ctx.lineTo(65.436608, 81.642957);
                        ctx.lineTo(65.491908, 88.085487);
                        ctx.lineTo(71.780415, 85.958267);
                        ctx.lineTo(71.780415, 79.420870);
                        ctx.lineTo(72.696535, 79.420870);
                        ctx.lineTo(72.738035, 85.811727);
                        ctx.lineTo(73.886315, 85.456827);
                        ctx.lineTo(73.886315, 89.479224);
                        ctx.lineTo(72.696505, 89.821854);
                        ctx.lineTo(72.696505, 96.943021);
                        ctx.lineTo(73.868575, 96.586841);
                        ctx.lineTo(73.886275, 100.492740);
                        ctx.lineTo(72.696465, 100.871570);
                        ctx.lineTo(72.696465, 107.771890);
                        ctx.lineTo(71.780345, 107.771890);
                        ctx.lineTo(71.706745, 101.027180);
                        ctx.lineTo(65.437108, 103.162620);
                        ctx.lineTo(65.436578, 109.893890);
                        ctx.lineTo(64.495298, 109.893890);
                        ctx.moveTo(71.780355, 97.083871);
                        ctx.lineTo(71.741655, 89.962314);
                        ctx.lineTo(65.462468, 92.115164);
                        ctx.lineTo(65.500868, 99.211891);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                }dieseD2();

                function dieseA2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 41, -28.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }dieseA2();

            } // End armure Bmaj

        // Cycle des quartes ////////////////////////////////////////////////////////////////////////////////////////////////////
            // Armure de Dmin ////////////////////////////////////////////////////////////////////////////////////////////////////
            function armureFmajDmin() {
                function bemolB2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolB2();

            } // End armure FmajDmin. ///////////////////////////////////////////////////////////////////////////////////////////

            // Armure de Gmin ////////////////////////////////////////////////////////////////////////////////////////////////////
            function armureGmin() {
                function bemolB2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolB2();

                function bemolE3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -70.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolE3();

            } // End armure Gmin. ////////////////////////////////////////////////////////////////////////////////////////////////

            // Armure de Cmin ////////////////////////////////////////////////////////////////////////////////////////////////////
            function armureCmin() {
                function bemolB2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolB2();

                function bemolE3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -70.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolE3();
                
                function bemolA2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -51.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolA2();

            } // End armure Cmin. ////////////////////////////////////////////////////////////////////////////////////////////////

            // Armure de Fmin ////////////////////////////////////////////////////////////////////////////////////////////////////
            function armureFmin() {
                function bemolB2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolB2();

                function bemolE3() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -70.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolE3();
                
                function bemolA2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -51.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolA2();

                function bemolD2() {

                    if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        ctx.save();
                        ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 10, -65.176814);
                        
                        ctx.beginPath();
                        ctx.lineWidth = 0.014324;
                        ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.moveTo(64.466327, 98.885942);
                        ctx.lineTo(65.320317, 98.885942);
                        ctx.lineTo(65.325317, 121.492360);
                        ctx.lineTo(65.971467, 121.025630);
                        ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                        ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                        ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                        ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                        ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                        ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                        ctx.lineTo(64.466357, 98.885942);
                        ctx.fill();
                        ctx.restore();
                    }
                }bemolD2();

            } // End armure Fmin. ////////////////////////////////////////////////////////////////////////////////////////////

    //Altérations ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Dièses ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Dièses F //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseF1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 20.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF1.

            function dieseF2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -16.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF2.

            function dieseF3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF3.

            function dieseF3A() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 285, -55.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF3A.

            function dieseF3Adim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 315, -55.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF3Adim.

            function dieseF3G() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 285, -55.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF3G.

            function dieseF4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -90.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseF4.

        // Dièses C //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseC1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -1.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC1.

            function dieseC2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -38.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC2

            function dieseC2Dmin() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 202, -38.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC2Dmin

            function dieseC2Emin() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 202, -38.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC2Emin

            function dieseC2Fdim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 202, -38.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC2Fdim

            function dieseC3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -75.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseC3
                
        // Dièses G //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseG1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 15.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseG2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -24.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseG2BminMelAsc() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 275, -24.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseG3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -60.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseG3A() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 315, -60.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseG3Adim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 345, -60.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }
                
        // Dièses D //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseD1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -8.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseD2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -45.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseD2Emin() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 230, -45.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseD3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -80.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }   
           
        // Dièses A //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseA1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 15.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseA2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -28.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseA2BminHar() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 305, -27.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            } // End dieseA2BminHar.

            function dieseA3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -65.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }
            
        // Dièses E //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseE1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 22.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseE2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -13.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseE3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -50.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseE4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -85.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }
            
        // Dièses B //////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function dieseB1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 15.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseB2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -33.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function dieseB3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -70.176814);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.495288, 103.298670);
                    ctx.lineTo(63.460171, 103.647200);
                    ctx.lineTo(63.487371, 99.721951);
                    ctx.lineTo(64.469408, 99.394521);
                    ctx.lineTo(64.482708, 92.286614);
                    ctx.lineTo(63.474501, 92.595524);
                    ctx.lineTo(63.461601, 88.608987);
                    ctx.lineTo(64.495318, 88.270217);
                    ctx.lineTo(64.495318, 81.642957);
                    ctx.lineTo(65.436608, 81.642957);
                    ctx.lineTo(65.491908, 88.085487);
                    ctx.lineTo(71.780415, 85.958267);
                    ctx.lineTo(71.780415, 79.420870);
                    ctx.lineTo(72.696535, 79.420870);
                    ctx.lineTo(72.738035, 85.811727);
                    ctx.lineTo(73.886315, 85.456827);
                    ctx.lineTo(73.886315, 89.479224);
                    ctx.lineTo(72.696505, 89.821854);
                    ctx.lineTo(72.696505, 96.943021);
                    ctx.lineTo(73.868575, 96.586841);
                    ctx.lineTo(73.886275, 100.492740);
                    ctx.lineTo(72.696465, 100.871570);
                    ctx.lineTo(72.696465, 107.771890);
                    ctx.lineTo(71.780345, 107.771890);
                    ctx.lineTo(71.706745, 101.027180);
                    ctx.lineTo(65.437108, 103.162620);
                    ctx.lineTo(65.436578, 109.893890);
                    ctx.lineTo(64.495298, 109.893890);
                    ctx.moveTo(71.780355, 97.083871);
                    ctx.lineTo(71.741655, 89.962314);
                    ctx.lineTo(65.462468, 92.115164);
                    ctx.lineTo(65.500868, 99.211891);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

    // Bèmols ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Bèmols B //////////////////////////////////////////////////////////////////////////////////////
            function bemolB1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -18.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolB2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolB3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -92.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }
        
        // Bèmols E ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function bemolE1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 3.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolE2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -34.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolE3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -70.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolE4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -107.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

        // Bèmols A ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function bemolA1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -13.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolA2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.339244, -51.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolA2D() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 145, -51.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolA3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -87.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolA4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -110.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }
        
        // Bèmols D ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function bemolD1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -27.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolD2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -65.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolD2G() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 230, -65.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolD3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -102.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

        // Bèmols G ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function bemolG1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, 3.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolG2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -45.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolG2C() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 120, -45.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolG3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -80.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolG4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -105.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

        // Bèmols C ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function bemolC1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -22.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolC2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -60.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

            function bemolC3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -97.176814);
                    
                    ctx.beginPath();
                    ctx.lineWidth = 0.014324;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(64.466327, 98.885942);
                    ctx.lineTo(65.320317, 98.885942);
                    ctx.lineTo(65.325317, 121.492360);
                    ctx.lineTo(65.971467, 121.025630);
                    ctx.bezierCurveTo(67.899947, 119.632640, 70.660254, 115.512400, 71.053914, 114.080460);
                    ctx.bezierCurveTo(71.527304, 112.358530, 71.604554, 111.348750, 69.894424, 111.158260);
                    ctx.bezierCurveTo(68.256377, 110.975800, 65.493367, 112.810380, 65.493367, 112.810380);
                    ctx.bezierCurveTo(65.493367, 112.810380, 67.968737, 110.776600, 70.008074, 110.449630);
                    ctx.bezierCurveTo(72.448134, 110.058420, 73.324794, 110.981010, 73.202314, 113.455200);
                    ctx.bezierCurveTo(73.042454, 116.684370, 64.506957, 122.380980, 64.506957, 122.380980);
                    ctx.lineTo(64.466357, 98.885942);
                    ctx.fill();
                    ctx.restore();
                }
            }

        // Bèmols F //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Augmentées ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Augmentées F //////////////////////////////////////////////////////////////////////////////////////////////////////
            function augmenteF1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -33.339244, -37.176814);
                    
                    ctx.beginPath();
                    ctx.lineJoin = 'miter';
                    ctx.strokeStyle = 'rgb(0, 0, 0)';
                    ctx.lineCap = 'butt';
                    ctx.lineWidth = 0.070004;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(89.040059, 34.477875);
                    ctx.lineTo(92.188504, 34.477875);
                    ctx.lineTo(92.179704, 37.642006);
                    ctx.lineTo(95.394103, 37.642006);
                    ctx.lineTo(95.390103, 34.477875);
                    ctx.lineTo(98.538547, 34.477875);
                    ctx.lineTo(98.538547, 37.652852);
                    ctx.lineTo(95.388377, 37.652852);
                    ctx.lineTo(95.388377, 40.832595);
                    ctx.lineTo(98.538547, 40.827895);
                    ctx.lineTo(98.538547, 44.002871);
                    ctx.lineTo(95.390103, 44.002871);
                    ctx.lineTo(95.390103, 40.822562);
                    ctx.lineTo(92.161478, 40.822562);
                    ctx.lineTo(92.188538, 44.002871);
                    ctx.lineTo(89.040094, 44.002871);
                    ctx.lineTo(89.040094, 40.827895);
                    ctx.lineTo(92.230046, 40.832595);
                    ctx.lineTo(92.230046, 37.662998);
                    ctx.lineTo(89.040094, 37.652838);
                    ctx.fill();
                    ctx.stroke();
                }
            }

            function augmenteF2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -33.339244, 37.176814);
                    
                    ctx.beginPath();
                    ctx.lineJoin = 'miter';
                    ctx.strokeStyle = 'rgb(0, 0, 0)';
                    ctx.lineCap = 'butt';
                    ctx.lineWidth = 0.070004;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(89.040059, 34.477875);
                    ctx.lineTo(92.188504, 34.477875);
                    ctx.lineTo(92.179704, 37.642006);
                    ctx.lineTo(95.394103, 37.642006);
                    ctx.lineTo(95.390103, 34.477875);
                    ctx.lineTo(98.538547, 34.477875);
                    ctx.lineTo(98.538547, 37.652852);
                    ctx.lineTo(95.388377, 37.652852);
                    ctx.lineTo(95.388377, 40.832595);
                    ctx.lineTo(98.538547, 40.827895);
                    ctx.lineTo(98.538547, 44.002871);
                    ctx.lineTo(95.390103, 44.002871);
                    ctx.lineTo(95.390103, 40.822562);
                    ctx.lineTo(92.161478, 40.822562);
                    ctx.lineTo(92.188538, 44.002871);
                    ctx.lineTo(89.040094, 44.002871);
                    ctx.lineTo(89.040094, 40.827895);
                    ctx.lineTo(92.230046, 40.832595);
                    ctx.lineTo(92.230046, 37.662998);
                    ctx.lineTo(89.040094, 37.652838);
                    ctx.fill();
                    ctx.stroke();
                }
            }

            function augmenteF3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -33.339244, -0.176814);
                    
                    ctx.beginPath();
                    ctx.lineJoin = 'miter';
                    ctx.strokeStyle = 'rgb(0, 0, 0)';
                    ctx.lineCap = 'butt';
                    ctx.lineWidth = 0.070004;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(89.040059, 34.477875);
                    ctx.lineTo(92.188504, 34.477875);
                    ctx.lineTo(92.179704, 37.642006);
                    ctx.lineTo(95.394103, 37.642006);
                    ctx.lineTo(95.390103, 34.477875);
                    ctx.lineTo(98.538547, 34.477875);
                    ctx.lineTo(98.538547, 37.652852);
                    ctx.lineTo(95.388377, 37.652852);
                    ctx.lineTo(95.388377, 40.832595);
                    ctx.lineTo(98.538547, 40.827895);
                    ctx.lineTo(98.538547, 44.002871);
                    ctx.lineTo(95.390103, 44.002871);
                    ctx.lineTo(95.390103, 40.822562);
                    ctx.lineTo(92.161478, 40.822562);
                    ctx.lineTo(92.188538, 44.002871);
                    ctx.lineTo(89.040094, 44.002871);
                    ctx.lineTo(89.040094, 40.827895);
                    ctx.lineTo(92.230046, 40.832595);
                    ctx.lineTo(92.230046, 37.662998);
                    ctx.lineTo(89.040094, 37.652838);
                    ctx.fill();
                    ctx.stroke();
                }
            }

            function augmenteF4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -33.339244, -37.176814);
                    
                    ctx.beginPath();
                    ctx.lineJoin = 'miter';
                    ctx.strokeStyle = 'rgb(0, 0, 0)';
                    ctx.lineCap = 'butt';
                    ctx.lineWidth = 0.070004;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(89.040059, 34.477875);
                    ctx.lineTo(92.188504, 34.477875);
                    ctx.lineTo(92.179704, 37.642006);
                    ctx.lineTo(95.394103, 37.642006);
                    ctx.lineTo(95.390103, 34.477875);
                    ctx.lineTo(98.538547, 34.477875);
                    ctx.lineTo(98.538547, 37.652852);
                    ctx.lineTo(95.388377, 37.652852);
                    ctx.lineTo(95.388377, 40.832595);
                    ctx.lineTo(98.538547, 40.827895);
                    ctx.lineTo(98.538547, 44.002871);
                    ctx.lineTo(95.390103, 44.002871);
                    ctx.lineTo(95.390103, 40.822562);
                    ctx.lineTo(92.161478, 40.822562);
                    ctx.lineTo(92.188538, 44.002871);
                    ctx.lineTo(89.040094, 44.002871);
                    ctx.lineTo(89.040094, 40.827895);
                    ctx.lineTo(92.230046, 40.832595);
                    ctx.lineTo(92.230046, 37.662998);
                    ctx.lineTo(89.040094, 37.652838);
                    ctx.fill();
                    ctx.stroke();
                }
            }

    // Bécarres //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Bécarres C
            function becareC1() {

            }

            function becareC2() {

            }

            function becareC3() {

            }

        // Bécarres D
            function becareD1() {

            }

            function becareD2() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 95, 15.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareD3() {

            }

        // Bécarres E
            function becareE1() {

            }

            function becareE2() {

            }

            function becareE3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 120, 10.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

        // Bécarres F
            function becareF1() {

            }

            function becareF2() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 105, 42.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareF3() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 120, 10.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

        // Bécarres G
            function becareG1() {

            }

            function becareG2() {

            }

            function becareG3() {

            }

        // Bécarres A
            function becareA1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -145.981885, 62.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareA2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 10.981885, 32.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareA3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -145.981885, 62.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

        // Bécarres B
            function becareB1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -145.981885, 62.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareB2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 40.981885, 25.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareB2D() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 40.981885, 25.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

            function becareB3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 145.981885, -15.583260);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(1, 0, 0)';
                    ctx.miterLimit = 4;
                    ctx.lineWidth = 0.027345;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(200.001510, 42.995433);
                    ctx.lineTo(200.001540, 21.339721);
                    ctx.lineTo(200.942830, 21.339721);
                    ctx.lineTo(200.998130, 27.782248);
                    ctx.lineTo(208.244260, 25.508489);
                    ctx.lineTo(208.202660, 47.468652);
                    ctx.lineTo(207.286540, 47.468652);
                    ctx.lineTo(207.212940, 40.723943);
                    ctx.moveTo(207.286580, 36.780633);
                    ctx.lineTo(207.247880, 29.659076);
                    ctx.lineTo(200.968690, 31.811926);
                    ctx.lineTo(201.007090, 38.908653);
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            }

    // Notes ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Notes C /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteC1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -18.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC1B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 141.339244, -18.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -55.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC2C() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 200.339244, -55.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC2D() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 198.339244, -55.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC2E() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 198.339244, -55.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteC3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -92.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes D /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteD1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 25.339244, -23.576814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteD1B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 170, -23.576814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteD2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -60.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteD2D() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 230, -60.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteD2E() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 225.339244, -60.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteD3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -97.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes E //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteE1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, 7.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteE2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 55.339244, -28.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteE2B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 200, -28.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteE3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -65.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteE3F() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 250, -65.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteE4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -103.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes F /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteF1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, 3.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 85.339244, -34.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF2B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 235, -34.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -70.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF3E() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 281, -70.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF3G() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 280, -70.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF3Adim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 310, -70.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteF4() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -108.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes G /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteG1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -2.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteG2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 115.339244, -39.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteG2B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 270, -39.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteG3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -76.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteG3A() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 310, -76.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteG3Adim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 340, -76.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes A /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteA1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -7.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteA2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 140.339244, -44.576814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteA2B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 300, -44.576814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteA3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -81.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteA3A() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 340, -81.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteA3Adim() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 370, -81.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Notes B ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function noteB1() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -13.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteB1B() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 111.339244, -13.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteB2() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 170.339244, -50.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteB2A() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 330.339244, -50.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function noteB3() {

                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -87.176814);

                    ctx.beginPath();
                    ctx.lineWidth = 0.035373;
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.moveTo(79.547643, 110.568870);
                    ctx.bezierCurveTo(79.560983, 107.833650, 81.589245, 105.432510, 86.190344, 105.447710);
                    ctx.bezierCurveTo(90.076298, 105.460510, 92.771009, 107.851720, 92.776734, 110.573880);
                    ctx.bezierCurveTo(92.782834, 113.317500, 90.133924, 115.724760, 86.160223, 115.766390);
                    ctx.bezierCurveTo(81.585793, 115.769390, 79.534212, 113.312550, 79.547643, 110.568870);
                    ctx.fill();
                    ctx.restore();      
                }
            }

        // Lignes courtes //////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Lignes courtes basses ///////////////////////////////////////////////////////////////////////////////////////
        
            function ligneCourteB1() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 125, 0.176814);

                    ctx.beginPath();
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.rect(60, 102, 25, 1);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function ligneCourteC1() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 155, -10.176814);

                    ctx.beginPath();
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.rect(60, 102, 25, 1);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function ligneCourteC1C() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 2, -10.176814);

                    ctx.beginPath();
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.rect(60, 102, 25, 1);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            function ligneCourteD1C() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 39, -10.176814);

                    ctx.beginPath();
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.rect(60, 102, 25, 1);
                    ctx.fill();
                    ctx.restore();      
                }
            }

            // Lignes courtes hautes ///////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            function ligneCourteA3A() {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');  

                    ctx.save();
                    ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 354, -73);

                    ctx.beginPath();
                    ctx.fillStyle = 'rgb(0, 0, 0)';
                    ctx.rect(60, 102, 25, 1);
                    ctx.fill();
                    ctx.restore();      
                }
            }

    // Scales //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Scales C ////////////////////////////////////////////////////////////////////////////////////////////////////////
                if (indexFondamentaleChoisie === 0) {

                    ligneCourteC1C();
                    ligneCourteD1C();

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();
                            
                        }else if (qualitee === "minNat") {

                            armureCmin();
                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();

                        }else if (qualitee === "minHar") {

                            armureCmin();
                            becareB2();
                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();

                        }else if (qualitee === "minMelAsc") {

                            armureCmin();
                            becareB2();
                            becareA2();
                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();

                        }else if (qualitee === "minMelDesc") {

                            armureCmin();
                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();

                        }else if (qualitee === "dim") {

                            armureCmin();
                            becareB2D();
                            bemolG2C();
                            noteC1();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2C();

                        }
                    } // End altération.

            // Scales D ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 1) {

                    ligneCourteD1C();

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureDmaj();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();

                        }else if (qualitee === "minNat") {

                            armureFmajDmin();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();

                        }else if (qualitee === "minHar") {

                            armureFmajDmin();
                            dieseC2Dmin();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();

                        }else if (qualitee === "minMelAsc") {

                            armureFmajDmin();
                            dieseC2Dmin();
                            becareB2D();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();

                        }else if (qualitee === "minMelDesc") {

                            armureFmajDmin();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();
                                
                        }else if (qualitee === "dim") {

                            armureFmajDmin();
                            bemolA2D();
                            dieseC2Dmin();
                            noteD1();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2D();
                            noteD2D();

                        }
                    }

            // Scales E ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 2) {

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureEmaj();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }else if (qualitee === "minNat") {

                            armureGmajEmin();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }else if (qualitee === "minHar") {

                            armureGmajEmin();
                            dieseD2Emin();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }else if (qualitee === "minMelAsc") {

                            armureGmajEmin();
                            dieseD2Emin();
                            dieseC2Emin();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }else if (qualitee === "minMelDesc") {

                            armureGmajEmin();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }else if (qualitee === "dim") {

                            armureGmajEmin();
                            dieseD2Emin();
                            dieseC2Emin();
                            noteE2();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();

                        }
                    }
                    
            // Scales F ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 3) {

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureFmajDmin();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }else if (qualitee === "minNat") {

                            armureFmin();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }else if (qualitee === "minHar") {

                            armureFmin();
                            becareF3();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }else if (qualitee === "minMelAsc") {

                            armureFmin();
                            becareD2();
                            becareF3();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }else if (qualitee === "minMelDesc") {

                            armureFmin();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }else if (qualitee === "dim") {

                            armureFmin();
                            dieseC2Fdim();
                            becareD2();
                            becareF3();
                            noteF2();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3E();

                        }
                    }

            // Scales G ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 4) {

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureGmajEmin();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            
                        }else if (qualitee === "minNat") {

                            armureGmin();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();

                        }else if (qualitee === "minHar") {

                            armureGmin();
                            dieseF3G();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();

                        }else if (qualitee === "minMelAsc") {

                            armureGmin();
                            becareE3();
                            dieseF3G();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();

                        }else if (qualitee === "minMelDesc") {

                            armureGmin();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();

                        }

                        else if (qualitee === "dim") {

                            armureGmin();
                            bemolD2G();
                            dieseF3G();
                            noteG2();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();

                        }
                    }

            // Scales A ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 5) {

                    ligneCourteA3A();

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureAmaj();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            noteA3A();

                        }else if (qualitee === "minNat") {

                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            noteA3A();

                        }else if (qualitee === "minHar") {

                            dieseG3A();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            noteA3A();

                        }else if (qualitee === "minMelAsc") {

                            dieseG3A();
                            dieseF3A();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            noteA3A();

                        }else if (qualitee === "minMelDesc") {

                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteG3A();
                            noteA3A();
                        
                        }else if (qualitee === "dim") {

                            dieseG3Adim();
                            dieseF3Adim();
                            noteA2();
                            noteB2();
                            noteC2E();
                            noteD2E();
                            noteE3F();
                            noteF3G();
                            noteF3Adim();
                            noteG3Adim();
                            noteA3Adim();

                        }
                    }
        
            // Scales B ////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                }else if (indexFondamentaleChoisie === 6) {

                        ligneCourteB1();
                        ligneCourteC1();

                    if (alteration === " ") {

                        if (qualitee === "Maj") {

                            armureBmaj();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();

                        }else if (qualitee === "minNat") {

                            armureDmaj();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();

                        }else if (qualitee === "minHar") {

                            armureDmaj();
                            dieseA2BminHar();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();

                        }else if (qualitee === "minMelAsc") {

                            armureDmaj();
                            dieseA2BminHar();
                            dieseG2BminMelAsc();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();

                        }else if (qualitee === "minMelDesc") {

                            armureDmaj();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();

                        }else if (qualitee === "dim") {

                            armureDmaj();
                            dieseA2BminHar();
                            dieseG2BminMelAsc();
                            becareF2();
                            noteB1B();
                            noteC1B();
                            noteD1B();
                            noteE2B();
                            noteF2B();
                            noteG2B();
                            noteA2B();
                            noteB2A();
                        }
                    }
                }
            }
        }gammesSolfege();   
    }draw_4();   




////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



// Canvas du manche guitare avec les notes./////////////////////
////////////////////////////////////////////////////////////////
    function draw_6() {

        var fondamentale = document.getElementById("fondamentale").value;
        var qualitee = document.getElementById("qualitee").value;
        var canvas = document.getElementById('canvas_6');

        var scales = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"];

        var found = scales.find(element => element == fondamentale);
      
        var indexFondamentaleChoisie = scales.indexOf(found);

        var scalesLength = 7;

        var scale = [];
        
      // On vide le canvas
      function emptyRect() {
                  if (canvas.getContext) {
                        var ctx = canvas.getContext('2d');

                        ctx.clearRect(0, 0, canvas.width, canvas.height),
                        ctx.beginPath();
                  }
            }
            emptyRect();

    // Dessin du manche.
        function manche() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

    // La touche.
                context.fillStyle = "#872813";
                context.fillRect(8,17,600,110);

    // Les frettes.
                context.fillStyle = "blue";
                context.fillRect(8, 17, 7, 109); // Sillet.
                context.fillRect(70, 17, 3, 109); // Frette 01.
                context.fillRect(123, 17, 3, 109); // Frette 02.
                context.fillRect(173, 17, 3, 109); // Frette 03.
                context.fillRect(221, 17, 3, 109); // Frette 04.
                context.fillRect(265, 17, 3, 109); // Frette 05.
                context.fillRect(307, 17, 3, 109); // Frette 06.
                context.fillRect(347, 17, 3, 109); // Frette 07.
                context.fillRect(385, 17, 3, 109); // Frette 08.
                context.fillRect(420, 17, 3, 109); // Frette 09.
                context.fillRect(454, 17, 3, 109); // Frette 10.
                context.fillRect(486, 17, 3, 109); // Frette 11.
                context.fillRect(516, 17, 3, 109); // Frette 12.
                context.fillRect(544, 17, 3, 109); // Frette 13.
                context.fillRect(571, 17, 3, 109); // Frette 14.
                context.fillRect(596, 17, 3, 109); // Frette 15.

    // Les cordes.
                context.fillStyle = "grey";
                context.fillRect(10, 20, 600, 1); // String 01.
                context.fillRect(10, 40, 600, 1); // String 02.
                context.fillRect(10, 60, 600, 2); // String 03.
                context.fillRect(10, 80, 600, 2); // String 04.
                context.fillRect(10, 100, 600, 3); // String 05.
                context.fillRect(10, 120, 600, 3); // String 06.
                
    // Les repères.
                context.fillStyle = "white";
                context.beginPath(); // Dot 03.
                context.arc(150, 71, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 05.
                context.arc(245, 71, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 07.
                context.arc(328, 71, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 09.
                context.arc(405, 71, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 12-1.
                context.arc(503, 50, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 12-2.
                context.arc(503, 90, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // Dot 15.
                context.arc(585, 71, 5, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
            }
        }
        manche();

    // Dessin des notes.
    // C
        function notesC() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // C.
                context.arc(375, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(60, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(534, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(255, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(444, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(163, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(587, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C.
                context.arc(375, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("C", 372, 23);

                context.fillStyle = "white";
                context.fillText("C", 57, 43);

                context.fillStyle = "white";
                context.fillText("C", 531, 43);

                context.fillStyle = "white";
                context.fillText("C", 253, 63);

                context.fillStyle = "white";
                context.fillText("C", 441, 83);

                context.fillStyle = "white";
                context.fillText("C", 161, 103);

                context.fillStyle = "white";
                context.fillText("C", 584, 103);

                context.fillStyle = "white";
                context.fillText("C", 372, 123);
            }
        }
        
    // D
        function notesD() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // D.
                context.arc(444, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(163, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(587, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(337, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(5, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(506, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(255, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D.
                context.arc(444, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("D", 441, 23);

                context.fillStyle = "white";
                context.fillText("D", 161, 43);

                context.fillStyle = "white";
                context.fillText("D", 585, 43);

                context.fillStyle = "white";
                context.fillText("D", 335, 63);

                context.fillStyle = "white";
                context.fillText("D", 3, 83);

                context.fillStyle = "white";
                context.fillText("D", 504, 83);

                context.fillStyle = "white";
                context.fillText("D", 253, 103);

                context.fillStyle = "white";
                context.fillText("D", 441, 123);
            }
        }
        
    // E
        function notesE() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // E.
                context.arc(5, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // E.
                context.arc(506, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // E.
                context.arc(255, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // E.
                context.arc(410, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // E.
                context.arc(113, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // E.
                context.arc(561, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // E.
                context.arc(337, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // E.
                context.arc(5, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // E.
                context.arc(506, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("E", 3, 23);

                context.fillStyle = "white";
                context.fillText("E", 504, 23);

                context.fillStyle = "white";
                context.fillText("E", 253, 43);

                context.fillStyle = "white";
                context.fillText("E", 408, 63);

                context.fillStyle = "white";
                context.fillText("E", 111, 83);

                context.fillStyle = "white";
                context.fillText("E", 559, 83);

                context.fillStyle = "white";
                context.fillText("E", 335, 103);

                context.fillStyle = "white";
                context.fillText("E", 3, 123);

                context.fillStyle = "white";
                context.fillText("E", 504, 122);
            }
        }
        
    // F
        function notesF() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // F.
                context.arc(60, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(534, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(297, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(444, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(163, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(587, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(375, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(60, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(534, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("F", 58, 23);

                context.fillStyle = "white";
                context.fillText("F", 532, 23);

                context.fillStyle = "white";
                context.fillText("F", 295, 43);

                context.fillStyle = "white";
                context.fillText("F", 442, 63);

                context.fillStyle = "white";
                context.fillText("F", 161, 83);

                context.fillStyle = "white";
                context.fillText("F", 585, 83);

                context.fillStyle = "white";
                context.fillText("F", 373, 103);

                context.fillStyle = "white";
                context.fillText("F", 58, 123);

                context.fillStyle = "white";
                context.fillText("F", 532, 123);
            }
        }
        
    // G
        function notesG() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // G.
                context.arc(163, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G.
                context.arc(587, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G.
                context.arc(375, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G.
                context.arc(5, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G.
                context.arc(506, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G.
                context.arc(255, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G.
                context.arc(444, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G.
                context.arc(163, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G.
                context.arc(587, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("G", 161, 23);

                context.fillStyle = "white";
                context.fillText("G", 585, 23);

                context.fillStyle = "white";
                context.fillText("G", 373, 43);

                context.fillStyle = "white";
                context.fillText("G", 3, 63);

                context.fillStyle = "white";
                context.fillText("G", 504, 63);

                context.fillStyle = "white";
                context.fillText("G", 252, 83);

                context.fillStyle = "white";
                context.fillText("G", 442, 103);

                context.fillStyle = "white";
                context.fillText("G", 161, 123);

                context.fillStyle = "white";
                context.fillText("G", 585, 123);
            }
        }
        
    // A
        function notesA() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // A.
                context.arc(255, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // A.
                context.arc(444, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // A.
                context.arc(113, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                
                context.beginPath(); // A.
                context.arc(561, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // A.
                context.arc(337, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // A.
                context.arc(5, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A.
                context.arc(506, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A.
                context.arc(255, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("A", 253, 23);

                context.fillStyle = "white";
                context.fillText("A", 442, 43);

                context.fillStyle = "white";
                context.fillText("A", 111, 63);

                context.fillStyle = "white";
                context.fillText("A", 560, 63);

                context.fillStyle = "white";
                context.fillText("A", 335, 83);

                context.fillStyle = "white";
                context.fillText("A", 3, 103);

                context.fillStyle = "white";
                context.fillText("A", 504, 103);

                context.fillStyle = "white";
                context.fillText("A", 253, 123);
            }
        }
        
    // B
        function notesB() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // B.
                context.arc(337, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(5, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(506, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(211, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(410, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(113, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // B.
                context.arc(561, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // B.
                context.arc(337, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("B", 335, 23);

                context.fillStyle = "white";
                context.fillText("B", 3, 43);

                context.fillStyle = "white";
                context.fillText("B", 504, 43);

                context.fillStyle = "white";
                context.fillText("B", 209, 63);

                context.fillStyle = "white";
                context.fillText("B", 408, 83);

                context.fillStyle = "white";
                context.fillText("B", 111, 103);

                context.fillStyle = "white";
                context.fillText("B", 559, 103);

                context.fillStyle = "white";
                context.fillText("B", 335, 123);
            }
        }
        
    // Dessin des notes altérées.
    // C#
        function noteCDiese() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // C#.
                context.arc(410, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C#.
                context.arc(113, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // C#.
                context.arc(561, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // C#.
                context.arc(297, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // C#.
                context.arc(476, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // C#.
                context.arc(211, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // C#.
                context.arc(410, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("C#", 405, 23);

                context.fillStyle = "white";
                context.fillText("C#", 109, 43);

                context.fillStyle = "white";
                context.fillText("C#", 557, 43);

                context.fillStyle = "white";
                context.fillText("C#", 293, 63);

                context.fillStyle = "white";
                context.fillText("C#", 472, 83);

                context.fillStyle = "white";
                context.fillText("C#", 206, 103);

                context.fillStyle = "white";
                context.fillText("C#", 406, 123);
            }
        }
        
    // D#
        function noteDDiese() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // D#.
                context.arc(476, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D#.
                context.arc(211, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D#.
                context.arc(375, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D#.
                context.arc(60, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D#.
                context.arc(534, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F.
                context.arc(297, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // D#.
                context.arc(476, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("D#", 471, 23);

                context.fillStyle = "white";
                context.fillText("D#", 206, 43);

                context.fillStyle = "white";
                context.fillText("D#", 373, 63);

                context.fillStyle = "white";
                context.fillText("D#", 56, 83);

                context.fillStyle = "white";
                context.fillText("D#", 530, 83);

                context.fillStyle = "white";
                context.fillText("D#", 293, 103);

                context.fillStyle = "white";
                context.fillText("D#", 472, 123);
            }
        }

    // F#
        function noteFDiese() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // F#.
                context.arc(113, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(561, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(337, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(476, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(211, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(410, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(113, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // F#.
                context.arc(561, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("F#", 109, 23);

                context.fillStyle = "white";
                context.fillText("F#", 556, 23);

                context.fillStyle = "white";
                context.fillText("F#", 333, 43);

                context.fillStyle = "white";
                context.fillText("F#", 472, 63);

                context.fillStyle = "white";
                context.fillText("F#", 207, 83);

                context.fillStyle = "white";
                context.fillText("F#", 406, 103);

                context.fillStyle = "white";
                context.fillText("F#", 109, 123);

                context.fillStyle = "white";
                context.fillText("F#", 557, 123);
            }
        }
        
    // G#
        function noteGDiese() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // G#.
                context.arc(211, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G#.
                context.arc(410, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G#.
                context.arc(60, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G#.
                context.arc(534, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G#.
                context.arc(297, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();
                
                context.beginPath(); // G#.
                context.arc(476, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // G#.
                context.arc(211, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("G#", 206, 23);

                context.fillStyle = "white";
                context.fillText("G#", 406, 43);
                
                context.fillStyle = "white";
                context.fillText("G#", 56, 63);

                context.fillStyle = "white";
                context.fillText("G#", 530, 63);

                context.fillStyle = "white";
                context.fillText("G#", 293, 83);

                context.fillStyle = "white";
                context.fillText("G#", 472, 103);

                context.fillStyle = "white";
                context.fillText("G#", 207, 123);
            }
        }

    // D#
        function noteADiese() {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.fillStyle = "black";
                context.beginPath(); // A#.
                context.arc(297, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(476, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(163, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(587, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(375, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(60, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(534, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.beginPath(); // A#.
                context.arc(297, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                context.fill();

                context.font = "10px Calibri,Geneva,Arial";
                context.fillStyle = "white";
                context.fillText("A#", 292, 23);

                context.fillStyle = "white";
                context.fillText("A#", 472, 43);

                context.fillStyle = "white";
                context.fillText("A#", 159, 63);

                context.fillStyle = "white";
                context.fillText("A#", 583, 63);

                context.fillStyle = "white";
                context.fillText("A#", 371, 83);

                context.fillStyle = "white";
                context.fillText("A#", 56, 103);

                context.fillStyle = "white";
                context.fillText("A#", 530, 103);

                context.fillStyle = "white";
                context.fillText("A#", 293, 123);
            }
        }

    // Affichage des notes.
    // C
        if (indexFondamentaleChoisie === 0) {

            if (qualitee === "Maj") {

                // Pour la gamme majeure pas de changements.
                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minNat") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                noteGDiese();
                notesA();
                noteADiese();

            }else if (qualitee === "minHar") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minMelAsc") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minMelDesc") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();

            }else if (qualitee === "dim") { // A vérifier. 
                
                notesC();
                notesD();
                noteDDiese();
                notesF();
                noteFDiese();
                noteGDiese();
                notesA();
                notesB();

            }/*else if (qualitee === "aug") { // A vérifier.

                notesC();
                notesD();
                notesE();
                notesF();
                noteGDiese();
                notesA();
                notesB();

            }else if (qualitee === "sus4") {

                scale[2] = "E#";

            }*/

    // D
        }else if (indexFondamentaleChoisie === 1) {

            if (qualitee === "Maj") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minNat") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minHar") {

                noteCDiese();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minMelAsc") {

                noteCDiese();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minMelDesc") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "dim") {

                notesD();
                notesE();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();
                notesB();
                noteCDiese();

            }/*else if (qualitee === "aug") {

                scale[4] = "A#";

            }else if (qualitee === "sus4") {

                scale[3] = "G";
                scale[6] = "C#";

            }*/

    // E
        }else if (indexFondamentaleChoisie === 2) {

            if (qualitee === "Maj") {

                noteCDiese();
                noteDDiese();
                notesE();
                noteFDiese();
                noteGDiese();
                notesA();
                notesB();

            }else if (qualitee === "minNat") {

                notesC();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minHar") {

                notesC();
                noteDDiese();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minMelAsc") {

                noteCDiese();
                noteDDiese();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minMelDesc") {

                notesC();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "dim") {

                noteCDiese();
                noteDDiese();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                noteADiese();
                notesC();
                noteCDiese();

            }/*else if (qualitee === "aug") {

                

            }else if (qualitee === "sus4") {

                

            }*/

    // F
        }else if (indexFondamentaleChoisie === 3) {

            if (qualitee === "Maj") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minNat") {

                notesC();
                noteCDiese();
                noteDDiese();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();

            }else if (qualitee === "minHar") {

                notesC();
                noteCDiese();
                notesE();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();

            }else if (qualitee === "minMelAsc") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();

            }else if (qualitee === "minMelDesc") {

                notesC();
                noteCDiese();
                noteDDiese();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();

            }else if (qualitee === "dim") {

                noteCDiese();
                notesD();
                notesE();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();
                notesB();

            }/*else if (qualitee === "aug") {

                

            }else if (qualitee === "sus4") {

                

            }*/

    // G
        }else if (indexFondamentaleChoisie === 4) {

            if (qualitee === "Maj") {

                notesC();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minNat") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minHar") {

                notesC();
                notesD();
                noteDDiese();
                noteFDiese();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minMelAsc") {

                notesC();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "minMelDesc") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                notesG();
                notesA();
                noteADiese();

            }else if (qualitee === "dim") {

                notesC();
                noteCDiese();
                noteDDiese();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                noteADiese();

            }/*else if (qualitee === "aug") {

                

            }else if (qualitee === "sus4") {

    

            }*/

    // A
        }else if (indexFondamentaleChoisie === 5) {

            if (qualitee === "Maj") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                noteGDiese();
                notesA();
                notesB();

            }else if (qualitee === "minNat") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minHar") {

                notesC();
                notesD();
                notesE();
                notesF();
                noteGDiese();
                notesA();
                notesB();

            }else if (qualitee === "minMelAsc") {

                notesC();
                notesD();
                notesE();
                noteFDiese();
                noteGDiese();
                notesA();
                notesB();

            }else if (qualitee === "minMelDesc") {

                notesC();
                notesD();
                notesE();
                notesF();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "dim") {

                notesC();
                notesD();
                noteDDiese();
                notesF();
                noteFDiese();
                noteGDiese();
                notesA();
                notesB();

            }/*else if (qualitee === "aug") {

                

            }else if (qualitee === "sus4") {

                

            }*/

    // B
        }else if (indexFondamentaleChoisie === 6) {

            if (qualitee === "Maj") {

                noteCDiese();
                noteDDiese();
                notesE();
                noteFDiese();
                noteGDiese();
                noteADiese();
                notesB();

            }else if (qualitee === "minNat") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "minHar") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                noteADiese();
                notesB();

            }else if (qualitee === "minMelAsc") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                noteGDiese();
                noteADiese();
                notesB();

            }else if (qualitee === "minMelDesc") {

                noteCDiese();
                notesD();
                notesE();
                noteFDiese();
                notesG();
                notesA();
                notesB();

            }else if (qualitee === "dim") {

                noteCDiese();
                notesD();
                notesE();
                notesF();
                notesG();
                noteGDiese();
                noteADiese();
                notesB();

            }/*else if (qualitee === "aug") {

                

            }else if (qualitee === "sus4") {

                

            }*/
        }     
    }
    draw_6();
    // return scale;
}
scalesGenerator();

// console.log("La gamme choisie est : " + scalesGenerator());