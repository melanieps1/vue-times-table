var demo = new Vue ({

	el: '#main',

	data: {
		rowNumber: 5,
		columnNumber: 5,
		table: document.getElementById('timesTable')
	},

	methods: {
		displayTable: function() {
			timesTable.style.display = 'block';
		}
	}

});

// alert("hello!");