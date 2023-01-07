// Canvas du manche guitare avec les notes.
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
                          


