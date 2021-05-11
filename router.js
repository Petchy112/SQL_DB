const express = require('express')
const router = express.Router();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

router.get('/',(req,res)=>{ 
    connection.query('SELECT * FROM user',(err,result) => {
        if (err) return err;
        res.status(200).send(result)
    })
})

router.post('/',(req,res)=> {
    var sql =  'INSERT INTO user (id,FirstName,LastName,Email) VALUES ("5","Lisa","BlackPink","Lisa@hotmail.com")'
    connection.query(sql,function(err,result) {
        if (err) return err;
        res.status(200).send("เพิ่มข้อมูล")
    })
})

router.get('/delete/:id',(req,res) => {
    connection.query('DELETE FROM `user` WHERE id = ?',[req.body.id], (err, results) => {
        return res.send('ลบข้อมูล');
    });    
});

// router.get('/edit/:id',(req,res) => {
//     connection.query('UPDATE INTO `user` WHERE id = ?',[req.body.id], (err, result) => {
//         return
//     })
// })
module.exports = router