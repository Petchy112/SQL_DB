const mysql = require('mysql');
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) return err;
  console.log("Connected!");
});

app.listen(port,() => {
    console.log('connect seccess')
})