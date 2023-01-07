// Canvas du manche guitare avec les notes.
function draw_6() {

      var fondamentale = document.getElementById("fondamentale").value;
      var qualitee = document.getElementById("qualitee").value;
      var groupeCordes = document.getElementById("groupeCordes").value;
      var canvas = document.getElementById('canvas_6');

      var scales = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"];

      var found = scales.find(element => element == fondamentale);
  
      var indexFondamentaleChoisie = scales.indexOf(found);

      var scalesLength = 7;

      var scale = [];

console.log(fondamentale);
console.log(qualitee);
console.log(groupeCordes);

      function emptyRect() {
                  if (canvas.getContext) {
                        var ctx = canvas.getContext('2d');

                        ctx.clearRect(0, 0, canvas.width, canvas.height)
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
      } manche();

// Dessin des notes.
      // C
            function notesCString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(375, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 372, 23);
                  }
            }

            function notesCString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(60, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 57, 43);
            
                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(534, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 531, 43);
                  }
            }

            function notesCString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(255, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 253, 63);
                  }
            }

            function notesCString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(444, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 441, 83);
                  }
            }

            function notesCString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(163, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 161, 103);

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(587, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 584, 103);
                  }
            }

            function notesCString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C.
                        context.arc(375, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C", 372, 123);
                  }
            }
          
      // D
            function notesDString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(444, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 441, 23);
                  }
            }

            function notesDString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(163, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 161, 43);
            
                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(587, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 585, 43);
                  }
            }

            function notesDString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(337, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 335, 63);
                  }
            }

            function notesDString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(5, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 3, 83);
            
                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(506, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 504, 83);
                  }
            }

            function notesDString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(255, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 253, 103);
                  }
            }

            function notesDString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D.
                        context.arc(444, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D", 441, 123);
                  }
            }
          
      // E
            function notesEString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(5, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 3, 23);

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(506, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 504, 23);
                  }
            }

            function notesEString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(255, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 253, 43);
                  }
            }

            function notesEString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(410, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 408, 63);
                  }
            }

            function notesEString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(113, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 111, 83);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(561, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 559, 83);
                  }
            }

            function notesEString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(337, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 335, 103);
                  }
            }

            function notesEString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(5, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 3, 123);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // E.
                        context.arc(506, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("E", 504, 122);
                  }
            }
          
      // F
            function notesFString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(60, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 58, 23);

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(534, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 532, 23);
                  }
            }

            function notesFString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(297, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 295, 43);
                  }
            }

            function notesFString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(444, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 442, 63);
                  }
            }

            function notesFString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(163, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 161, 83);

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(587, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 585, 83);
                  }
            }

            function notesFString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(375, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 373, 103);
                  }
            }

            function notesFString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(60, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 58, 123);

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(534, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F", 532, 123);
                  }
            }
          
      // G
            function notesGString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(163, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 161, 23);

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(587, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 585, 23);
                  }
            }

            function notesGString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(375, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 373, 43);
                  }
            }

            function notesGString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(5, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 3, 63);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(506, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 504, 63);
                  }
            }

            function notesGString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(255, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 252, 83);
                  }
            }

            function notesGString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(444, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 442, 103);
                  }
            }

            function notesGString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(163, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 161, 123);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // G.
                        context.arc(587, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G", 585, 123);
                  }
            }
          
      // A
            function notesAString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(255, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 253, 23);
                  }
            }

            function notesAString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(444, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 442, 43);
                  }
            }

            function notesAString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(113, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 111, 63);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(561, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 560, 63);
                  }
            }

            function notesAString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(337, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 335, 83);
                  }
            }

            function notesAString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(5, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 3, 103);

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(506, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 504, 103);
                  }
            }

            function notesAString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A.
                        context.arc(255, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A", 253, 123);
                  }
            }

      // B
            function notesBString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(337, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 335, 23);
                  }
            }

            function notesBString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(5, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 3, 43);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(506, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 504, 43);
                  }
            }

            function notesBString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(211, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 209, 63);
                  }
            }

            function notesBString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(410, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 408, 83);
                  }
            }

            function notesBString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(113, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 111, 103);

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(561, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 559, 103);
                  }
            }

            function notesBString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // B.
                        context.arc(337, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("B", 335, 123);
                  }
            }
    
// Dessin des notes altérées.
      // C# ///////////////////////////////////////////////////////////////////////////////////////
            function notesCDieseString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(410, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 405, 23);
                  }
            }

            function notesCDieseString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(113, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 109, 43);
                        
                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(561, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 557, 43);
                  }
            }

            function notesCDieseString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(297, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 293, 63);
                  }
            }

            function notesCDieseString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(476, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 472, 83);
                  }
            }

            function notesCDieseString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(211, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 206, 103);
                  }
            }

            function notesCDieseString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // C#.
                        context.arc(410, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("C#", 406, 123);
                  }
            }

      // D# ///////////////////////////////////////////////////////////////////////////////////////
            function notesDDieseString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(476, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 471, 23);
                  }
            }

            function notesDDieseString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(211, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 206, 43);
                  }
            }

            function notesDDieseString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(375, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 373, 63);
                  }
            }

            function notesDDieseString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(60, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 56, 83);

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(534, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 530, 83);
                  }
            }

            function notesDDieseString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F.
                        context.arc(297, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 293, 103);
                  }
            }

            function notesDDieseString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // D#.
                        context.arc(476, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("D#", 472, 123);
                  }
            }

      // F# ///////////////////////////////////////////////////////////////////////////////////////
            function notesFDieseString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(113, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 109, 23);

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(561, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 556, 23);
                  }
            }

            function notesFDieseString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(337, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 333, 43);
                  }
            }

            function notesFDieseString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(476, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 472, 63);
                  }
            }

            function notesFDieseString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(211, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 207, 83);
                  }
            }

            function notesFDieseString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(410, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 406, 103);
                  }
            }

            function notesFDieseString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(113, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 109, 123);

                        context.fillStyle = "black";
                        context.beginPath(); // F#.
                        context.arc(561, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("F#", 557, 123);
                  }
            }
          
      // G# ///////////////////////////////////////////////////////////////////////////////////////
            function notesGDieseString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(211, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 206, 23);
                  }
            }

            function notesGDieseString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(410, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 406, 43);
                  }
            }

            function notesGDieseString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(60, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 56, 63);

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(534, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 530, 63);
                  }
            }

            function notesGDieseString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(297, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 293, 83);
                  }
            }

            function notesGDieseString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(476, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 472, 103);
                  }
            }

            function notesGDieseString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // G#.
                        context.arc(211, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();
                        context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("G#", 207, 123);
                  }
            }

      // A# ///////////////////////////////////////////////////////////////////////////////////////
            function notesADieseString1() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(297, 21, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 292, 23);
                  }
            }

            function notesADieseString2() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(476, 41, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 472, 43);
                  }
            }

            function notesADieseString3() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(163, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 159, 63);

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(587, 61, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 583, 63);
                  }
            }

            function notesADieseString4() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(375, 81, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 371, 83);
                  }
            }

            function notesADieseString5() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(60, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 56, 103);

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(534, 101, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 530, 103);
                  }
            }

            function notesADieseString6() {
                  if (canvas.getContext) {
                        var context = canvas.getContext('2d');

                        context.fillStyle = "black";
                        context.beginPath(); // A#.
                        context.arc(297, 121, 9, 0, Math.PI * 2); // Calcul simplifié
                        context.fill();context.font = "10px Calibri,Geneva,Arial";
                        context.fillStyle = "white";
                        context.fillText("A#", 293, 123);
                  }
            }

// Affichage des notes.
      // C ///////////////////////////////////////////////////////////////////////////////////////
            if (indexFondamentaleChoisie === 0) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesFDieseString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              
                        }

                  }else if (qualitee === "sus4") {

                        if (groupeCordes === "123") {

                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              
                        }
                  }

      // D ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 1) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              
                        }

                  }else if (qualitee === "sus4") {

                        if (groupeCordes === "123") {

                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();

                        }else if (groupeCordes === "234") {

                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();

                        }else if (groupeCordes === "345") {

                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();

                        }else if (groupeCordes === "456") {

                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              
                        }
                  }

      // E ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 2) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "sus4") {

                        if (groupeCordes === "123") {

                              notesEString1();
                              notesEString2();
                              notesEString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesEString2();
                              notesEString3();
                              notesEString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesEString3();
                              notesEString4();
                              notesEString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesEString4();
                              notesEString5();
                              notesEString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }

      // F ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 3) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesGDieseString1();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesGDieseString2();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesGDieseString3();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesGDieseString4();
                              notesGDieseString5();
                              notesGDieseString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesFString1();
                              notesFString2();
                              notesFString3();
                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCDieseString1();
                              notesCDieseString2();
                              notesCDieseString3();

                        }else if (groupeCordes === "234") {

                              notesFString2();
                              notesFString3();
                              notesFString4();
                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesCDieseString4();

                        }else if (groupeCordes === "345") {

                              notesFString3();
                              notesFString4();
                              notesFString5();
                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesCDieseString5();

                        }else if (groupeCordes === "456") {

                              notesFString4();
                              notesFString5();
                              notesFString6();
                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesCDieseString6();
                              
                        }
                  }

      // G ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 4) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesADieseString1();
                              notesADieseString2();
                              notesADieseString3();
                              notesCDieseString1();
                              notesCDieseString2();
                              notesCDieseString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesADieseString2();
                              notesADieseString3();
                              notesADieseString4();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesCDieseString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesADieseString3();
                              notesADieseString4();
                              notesADieseString5();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesCDieseString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesADieseString4();
                              notesADieseString5();
                              notesADieseString6();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesCDieseString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              
                        }

                  }else if (qualitee === "sus4") {

                        if (groupeCordes === "123") {

                              notesGString1();
                              notesGString2();
                              notesGString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();

                        }else if (groupeCordes === "234") {

                              notesGString2();
                              notesGString3();
                              notesGString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();

                        }else if (groupeCordes === "345") {

                              notesGString3();
                              notesGString4();
                              notesGString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();

                        }else if (groupeCordes === "456") {

                              notesGString4();
                              notesGString5();
                              notesGString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              
                        }
                  }

      // A ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 5) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCDieseString1();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesCDieseString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCString1();
                              notesCString2();
                              notesCString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCString2();
                              notesCString3();
                              notesCString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCString3();
                              notesCString4();
                              notesCString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCString4();
                              notesCString5();
                              notesCString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesCDieseString1();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesCDieseString2();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesCDieseString3();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesCDieseString4();
                              notesCDieseString5();
                              notesCDieseString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              
                        }

                  }else if (qualitee === "sus4") {

                        if (groupeCordes === "123") {

                              notesAString1();
                              notesAString2();
                              notesAString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesEString1();
                              notesEString2();
                              notesEString3();

                        }else if (groupeCordes === "234") {

                              notesAString2();
                              notesAString3();
                              notesAString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesEString2();
                              notesEString3();
                              notesEString4();

                        }else if (groupeCordes === "345") {

                              notesAString3();
                              notesAString4();
                              notesAString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesEString3();
                              notesEString4();
                              notesEString5();

                        }else if (groupeCordes === "456") {

                              notesAString4();
                              notesAString5();
                              notesAString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesEString4();
                              notesEString5();
                              notesEString6();
                              
                        }
                  }

      // B ///////////////////////////////////////////////////////////////////////////////////////
            }else if (indexFondamentaleChoisie === 6) {

                  if (qualitee === "Maj") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "minNat") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "minHar") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "minMelAsc") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "minMelDesc") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFDieseString1();
                              notesFDieseString2();
                              notesFDieseString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFDieseString2();
                              notesFDieseString3();
                              notesFDieseString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFDieseString3();
                              notesFDieseString4();
                              notesFDieseString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFDieseString4();
                              notesFDieseString5();
                              notesFDieseString6();
                              
                        }

                  }else if (qualitee === "dim") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDString1();
                              notesDString2();
                              notesDString3();
                              notesFString1();
                              notesFString2();
                              notesFString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDString2();
                              notesDString3();
                              notesDString4();
                              notesFString2();
                              notesFString3();
                              notesFString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDString3();
                              notesDString4();
                              notesDString5();
                              notesFString3();
                              notesFString4();
                              notesFString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDString4();
                              notesDString5();
                              notesDString6();
                              notesFString4();
                              notesFString5();
                              notesFString6();
                              
                        }

                  }else if (qualitee === "aug") {

                        if (groupeCordes === "123") {

                              notesBString1();
                              notesBString2();
                              notesBString3();
                              notesDDieseString1();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesGString1();
                              notesGString2();
                              notesGString3();

                        }else if (groupeCordes === "234") {

                              notesBString2();
                              notesBString3();
                              notesBString4();
                              notesDDieseString2();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesGString2();
                              notesGString3();
                              notesGString4();

                        }else if (groupeCordes === "345") {

                              notesBString3();
                              notesBString4();
                              notesBString5();
                              notesDDieseString3();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesGString3();
                              notesGString4();
                              notesGString5();

                        }else if (groupeCordes === "456") {

                              notesBString4();
                              notesBString5();
                              notesBString6();
                              notesDDieseString4();
                              notesDDieseString5();
                              notesDDieseString6();
                              notesGString4();
                              notesGString5();
                              notesGString6();

                        }
                  }
            } // End affichage des notes.  
} draw_6();
                          


