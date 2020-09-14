var express = require("express");
var router = express.Router();




router.get("/", function(req, res, next) {
	const sqlite3 = require('sqlite3').verbose();

	// open the database
	let db = new sqlite3.Database('./bt.db');

	let sql = `SELECT bufftimers FROM bufftimers`;

	db.all(sql, [], (err, rows) => {
	  if (err) {
	    throw err;
	  }
	  rows.forEach((row) => {
	    console.log(row.name);
	  });
	  res.send(rows);
	});

	// close the database connection
	db.close();

    //res.send("API is working properly");
});

module.exports = router;