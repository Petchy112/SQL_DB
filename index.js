const mysql = require('mysql');
const express = require('express')
const app = express()
const port = process.env.port || 4000


const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
connection.connect(function(err) {
  if (err) return err;
  console.log('Connected')
})

app.get('/',(req,res) => {
    connection.query('SELECT * FROM user',(err,result) =>{
      res.send(result);
    })
  });





app.listen(port , () => console.log(`App listening at port ${port}`))
