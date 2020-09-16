var express = require("express");
var router = express.Router();
const {
    dbLocation
} = require('./config.json');



router.get("/", function(req, res, next) {
	const sqlite3 = require('sqlite3').verbose();

	// open the database
	let db = new sqlite3.Database(dbLocation);

	let sql = `select count(*) as x, location as y from notifications group by location;`;

	db.all(sql, [], (err, rows) => {
	  if (err) {
	    throw err;
	  }
	  var labels = [], data=[];
	  rows.forEach((row) => {
	    labels.push(row.y);
	    data.push(row.x);
	  });
	  var tempData = {
	  	labels : labels,

	  	datasets: [{
	  		data: data,

	  		label: 'Open Requests By Location',
	  		//pointBorderColor: 'blue',
    		//pointBackgroundColor: 'rgba(255,150,0,0.5)',
    		backgroundColor: [
                'rgba(249, 198, 201, 1)',
                'rgba(219, 205, 240, 1)',
                'rgba(201, 228, 222, 1)',
                'rgba(247, 217, 196, 1)',
                'rgba(210, 210, 207, 1)',
                'rgba(242, 198, 222, 1)',
                'rgba(198, 222, 241, 1)',
                'rgba(250, 237, 203, 1)',
                'rgba(226, 207, 196, 1)',
            ]
	  	}]
	  };
	  res.send(tempData);
	});

	// close the database connection
	db.close();

    //res.send("API is working properly");
});

module.exports = router;