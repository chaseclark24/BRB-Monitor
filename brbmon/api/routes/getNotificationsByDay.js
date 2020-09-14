var express = require("express");
var router = express.Router();




router.get("/", function(req, res, next) {
	const sqlite3 = require('sqlite3').verbose();

	// open the database
	let db = new sqlite3.Database('./bt.db');

	let sql = `	select 
				(case substr(timestamp, 9,3)
					WHEN 'Jan'
						THEN '01' 
					WHEN 'Feb'
						THEN '02'
					WHEN 'Mar'
						THEN '03'
					WHEN 'Apr'
						THEN '04'
					WHEN 'May'
						THEN '05'
					WHEN 'Jun'
						THEN '06'
					WHEN 'Jul'
						THEN '07' 
					WHEN 'Aug'
						THEN '08' 
					WHEN 'Sep'
						THEN '09' 
					WHEN 'Oct'
						THEN '10' 
					WHEN 'Nov'
						THEN '11' 
					WHEN 'Dec'
						THEN '12' 
					END) || "-" || substr(timestamp, 6,2) || "-" || substr(timestamp, 13,4) as x, count(user) as y
				from notificationLog 
 				group by x;`;

	db.all(sql, [], (err, rows) => {
	  if (err) {
	    throw err;
	  }
	  var labels = [], data=[];
	  rows.forEach((row) => {
	    labels.push(row.x);
	    data.push(row.y);
	  });
	  var tempData = {
	  	labels : labels,
	  	datasets: [{
	  		data: data,
	  		label: 'Notification Log Entries',
	  		pointBorderColor: 'rgba(249, 251, 80,0.5)',
    		pointBackgroundColor: 'rgba(249, 251, 80,0.5)',
    		backgroundColor: 'rgba(81, 242, 251, 0.3)'
	  	}]
	  };
	  res.send(tempData);
	});

	// close the database connection
	db.close();

    //res.send("API is working properly");
});

module.exports = router;