var demo = new Vue ({

	el: '#main',

	data: {
		rowNumber: 0,
		columnNumber: 0
	},

	methods: {

		displayTable: function() {
			for(var i = 1; i < rowNumber; i++) {

				var tableRows = "<tr>";

				for(var j = 1; j < columnNumber; j++) {

					var tableColumns = "<th>";

					if(j == 1 || i == 1) {
						color_td = "#ccc";
					}
					else {
						color_td = "#fff";
					}

				}
			}
		}

	}

});

// alert("hello!");