// Canvas du manche guitare avec les notes.
function draw_5() {

      var fondamentale = document.getElementById("fondamentale").value;
      var qualitee = document.getElementById("qualitee").value;
      var groupeCordes = document.getElementById("groupeCordes").value;
      var canvas = document.getElementById('canvas_5');

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

				ctx.clearRect(0, 0, canvas.width, canvas.height);
     			ctx.beginPath();
			}
		}
		emptyRect();

	function triadesSolfege() {

		if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

// Portée ////////////////////////////////////////////////////////////////////////////////////////////
	// Lignes courtes ht
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 7, 25, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 18, 25, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 28, 25, 1);
		    ctx.fill();

		// Lignes longues
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(1, 39, 235, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(1, 49, 235, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(1, 60, 235, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(1, 71, 235, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(1, 81, 235, 1);
		    ctx.fill();

		// Lignes courtes bs 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 92, 25, 1);
		    ctx.fill();
		 
		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 102, 25, 1);
		    ctx.fill();

		    ctx.fillStyle = 'rgb(0, 0, 0)';
		    ctx.rect(60, 113, 25, 1);
		    ctx.fill();
			
		// Clé de Sol
			ctx.save();
			ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -55.176814);
			
		// #path953
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
			
		// #path955
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
			
		// #path957
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
			
		// #path959
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
		
	// Altérations ///////////////////////////////////////////////////////////////////////////////////////////
		// Dièses F //////////////////////////////////////////////////////////////////////////////////////
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
			}

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
			}

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
			}

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
			}

		// Dièses C //////////////////////////////////////////////////////////////////////////////////////
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
			}

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
			}

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
			}
				
		// Dièses G //////////////////////////////////////////////////////////////////////////////////////
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
			    
		// Dièses D //////////////////////////////////////////////////////////////////////////////////////
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
		   
		// Dièses A //////////////////////////////////////////////////////////////////////////////////////
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
		    
		// Dièses E //////////////////////////////////////////////////////////////////////////////////////
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
		    
		// Dièses B //////////////////////////////////////////////////////////////////////////////////////
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
		
		// Bèmols E //////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -70.176814);
					
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

		// Bèmols A //////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -21.339244, -51.176814);
					
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
		
		// Bèmols D //////////////////////////////////////////////////////////////////////////////////////
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

		// Bèmols G //////////////////////////////////////////////////////////////////////////////////////
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

		// Bèmols C //////////////////////////////////////////////////////////////////////////////////////
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

		// Bèmols F //////////////////////////////////////////////////////////////////////////////////////

		// Augmentés F ///////////////////////////////////////////////////////////////////////////////////
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
					

	// Notes /////////////////////////////////////////////////////////////////////////////////////////////

		// Notes C ///////////////////////////////////////////////////////////////////////////////////////
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

		// Notes D ///////////////////////////////////////////////////////////////////////////////////////
			function noteD1() {

				if (canvas.getContext) {
			        var context = canvas.getContext('2d');	

					ctx.save();
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -23.576814);

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

		// Notes E ///////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -28.176814);

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

		// Notes F ///////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -34.176814);

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

		// Notes G ///////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -39.176814);

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

		// Notes A ///////////////////////////////////////////////////////////////////////////////////////
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
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -44.576814);

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

			// Notes B
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

			function noteB2() {

				if (canvas.getContext) {
			        var context = canvas.getContext('2d');	

					ctx.save();
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -49.176814);

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

		// Notes B ///////////////////////////////////////////////////////////////////////////////////////
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

			function noteB2() {

				if (canvas.getContext) {
			        var context = canvas.getContext('2d');	

					ctx.save();
					ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -11.339244, -50.176814);

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

	// Triades ///////////////////////////////////////////////////////////////////////////////////////////
		// Triade C //////////////////////////////////////////////////////////////////////////////////////
			if (indexFondamentaleChoisie === 0) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();   
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();   
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();   
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();   
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();   
	                }	
				}

				else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();
			        	bemolG3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	bemolE3();
			        	bemolG3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();
			        	bemolG2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	bemolE2();
			        	bemolG2();   
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	dieseG3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteE3();
			        	noteG3();
			        	dieseG3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	dieseG2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteE2();
			        	noteG2();
			        	dieseG2();

	                }	
				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

	                    noteC2();
			        	noteF3();
			        	noteG3();

	                }else if (groupeCordes === "234") {

	                    noteC2();
			        	noteF3();
			        	noteG3();

	                }else if (groupeCordes === "345") {

	                    noteC1();
			        	noteF2();
			        	noteG2();

	                }else if (groupeCordes === "456") {

	                    noteC1();
			        	noteF2();
			        	noteG2();

	                }	
				}

		// Triade D //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 1) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	dieseF3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	dieseF3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	dieseF2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	dieseF2();   
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();   
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();   
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();   
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();  
	                }	
				}

				else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	bemolA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	bemolA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	bemolA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	bemolA2();   
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	dieseA3();
			        	dieseF3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteF3();
			        	noteA3();
			        	dieseA3();
			        	dieseF3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	dieseA2();
			        	dieseF2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteF2();
			        	noteA2();
			        	dieseA2();
			        	dieseF2();

	                }	
				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

	                    noteD2();
			        	noteG3();
			        	noteA3();

	                }else if (groupeCordes === "234") {

	                    noteD2();
			        	noteG3();
			        	noteA3();

	                }else if (groupeCordes === "345") {

	                    noteD1();
			        	noteG2();
			        	noteA2();

	                }else if (groupeCordes === "456") {

	                    noteD1();
			        	noteG2();
			        	noteA2();

	                }	
				}

		// Triade E //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 2) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
	                    noteB3();
	                    dieseG3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();
			        	dieseG3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	dieseG2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	dieseG2();   
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();   
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();   
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();  
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();   
	                }	
				}

				else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
			        	noteB3();
			        	bemolB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();
			        	bemolB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	bemolB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	bemolB2(); 
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteG3();
	                    noteB3();
	                    dieseG3();
	                    dieseB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteG3();
			        	noteB3();
			        	dieseG3();
			        	dieseB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	dieseG2();
			        	dieseB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteG2();
			        	noteB2();
			        	dieseG2();
			        	dieseB2();   
	                }

				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

			        	noteE3();
			        	noteA3();
			        	noteB3();

	                }else if (groupeCordes === "234") {

			        	noteE3();
			        	noteA3();
			        	noteB3();

	                }else if (groupeCordes === "345") {

			        	noteE2();
			        	noteA2();
			        	noteB2();

	                }else if (groupeCordes === "456") {

			        	noteE2();
			        	noteA2();
			        	noteB2();

	                }	
				}

		// Triade F //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 3) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();	

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
	   					noteC2();
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	bemolA2();	

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
	   					noteC2();
	   					bemolA2();
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	bemolA2();	

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
	   					noteC2();
	   					bemolA2();
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	bemolA2();	

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
	   					noteC2();
	   					bemolA2();
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	bemolA2();	

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
	   					noteC2();
	   					bemolA2();
	                }	
				}

				else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();
			        	bemolC3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	bemolA3();
			        	bemolC3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	bemolA2();
			        	bemolC2();

	                }else if (groupeCordes === "456") {

			        	noteF1();
			        	noteA1();
			        	noteC1();
			        	bemolA1();
			        	bemolC1();   
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	dieseC3();

	                }else if (groupeCordes === "234") {

			        	noteF3();
			        	noteA3();
			        	noteC3();
			        	dieseC3();

	                }else if (groupeCordes === "345") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	dieseC2();

	                }else if (groupeCordes === "456") {

			        	noteF2();
			        	noteA2();
			        	noteC2();
			        	dieseC2();

	                }	
				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

			        	

	                }else if (groupeCordes === "234") {

			        	

	                }else if (groupeCordes === "345") {

			        	

	                }else if (groupeCordes === "456") {

			        	

	                }	
				}

		// Triade G //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 4) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

			        	noteG3();
	                    noteB3();
	                    noteD3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();   
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	bemolB2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	bemolB1();   
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	bemolB2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	bemolB1();   
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	bemolB2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	bemolB1();   
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	bemolB2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	bemolB1();   
	                }

				}else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();
			        	bemolD3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	bemolB3();
			        	bemolD3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	bemolB2();
			        	bemolD2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	bemolB1();
			        	bemolD1();   
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

			        	noteG3();
	                    noteB3();
	                    noteD3();
	                    dieseD3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteB3();
			        	noteD3();
			        	dieseD3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteB2();
			        	noteD2();
			        	dieseD2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteB1();
			        	noteD1();
			        	dieseD1();   
	                }

				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

			        	noteG3();
			        	noteC3();
			        	noteD3();

	                }else if (groupeCordes === "234") {

			        	noteG3();
			        	noteC3();
			        	noteD3();

	                }else if (groupeCordes === "345") {

			        	noteG2();
			        	noteC2();
			        	noteD2();

	                }else if (groupeCordes === "456") {

			        	noteG1();
			        	noteC1();
			        	noteD1();

	                }	
				}

		// Triade A //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 5) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();
			        	dieseC3();

	                }else if (groupeCordes === "234") {

			        	noteA3();
			        	noteC3();
			        	noteE3();
			        	dieseC3();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();
			        	dieseC2();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	   					dieseC1();
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "234") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "234") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "234") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "234") {

			        	noteA3();
			        	noteC3();
			        	noteE4();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	                }	
				
				}else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();
			        	bemolE4();

	                }else if (groupeCordes === "234") {

			        	noteA2();
			        	noteC2();
			        	noteE3();
			        	bemolE3();

	                }else if (groupeCordes === "345") {

			        	noteA1();
			        	noteC1();
			        	noteE2();
			        	bemolE2();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteC1();
	   					noteE2();
	   					bemolE2();
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteC3();
			        	noteE4();
			        	dieseC3();
			        	dieseE4();

	                }else if (groupeCordes === "234") {

			        	noteA2();
			        	noteC2();
			        	noteE3();
			        	dieseC2();
			        	dieseE3();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteC2();
			        	noteE3();
			        	dieseC2();
			        	dieseE3();

	                }else if (groupeCordes === "456") {

			        	noteA1();
			        	noteC1();
			        	noteE2();
			        	dieseC1();
			        	dieseE2();

	                }	
				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

			        	noteA3();
			        	noteD3();
			        	noteE4();

	                }else if (groupeCordes === "234") {

			        	noteA2();
			        	noteD2();
			        	noteE3();

	                }else if (groupeCordes === "345") {

			        	noteA2();
			        	noteD2();
			        	noteE3();	

	                }else if (groupeCordes === "456") {

			        	noteA1();
	   					noteD1();
	   					noteE2();
	                }	
				}
		
		// Triade B //////////////////////////////////////////////////////////////////////////////////////
			}else if (indexFondamentaleChoisie === 6) {

		        if (qualitee === "Maj") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseD3();
	                    dieseF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();
	                    dieseD2();
	                    dieseF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseD1();
	                    dieseF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseD1();
	                    dieseF2();   
	                }

				}else if (qualitee === "minNat") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();
	                    dieseF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();   
	                }

				}else if (qualitee === "minHar") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();
	                    dieseF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();   
	                }

				}else if (qualitee === "minMelAsc") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();
	                    dieseF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();   
	                }

				}else if (qualitee === "minMelDesc") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();
	                    dieseF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();
	                    dieseF2();   
	                }

				}else if (qualitee === "dim") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
	                    noteD2();
	                    noteF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
	                    noteD1();
	                    noteF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
	                    noteD1();
	                    noteF2();   
	                }

				}else if (qualitee === "aug") {

		        	if (groupeCordes === "123") {

	                    noteB3();
	                    noteD3();
	                    noteF4();
	                    dieseD3();
	                    augmenteF4();

	                }else if (groupeCordes === "234") {

			        	noteB2();
			        	noteD2();
			        	noteF3();
			        	dieseD2();
			        	augmenteF3();

	                }else if (groupeCordes === "345") {

			        	noteB1();
			        	noteD1();
			        	noteF2();
			        	dieseD1();
			        	augmenteF2();

	                }else if (groupeCordes === "456") {

			        	noteB1();
			        	noteD1();
			        	noteF2();
			        	dieseD1();
			        	augmenteF2();   
	                }

				}else if (qualitee === "sus4") {

		        	if (groupeCordes === "123") {

			        	

	                }else if (groupeCordes === "234") {

			        	

	                }else if (groupeCordes === "345") {

			        	

	                }else if (groupeCordes === "456") {

			        	

	                }	
				}

			}
		}

	}triadesSolfege();
	
}draw_5();