const express = require('express')
const router = express.Router();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

router.get('/',(req,res) => { 
    connection.query('SELECT * FROM user',(err,result) => {
        if (err) return err;
        res.status(200).send(result)
    })
})

router.post('/add',(req,res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const data = {
        FirstName:FirstName,
        LastName:LastName,
        Email:Email,
    }
    connection.query('INSERT INTO user SET ?',data,(err) => {
        if (err) return err
        res.status(200).send('เพิ่มข้อมูลเรียบร้อย');
    });
});

router.get('/delete/:id',(req,res) => {
    connection.query('DELETE FROM `user` WHERE id = ?',[req.params.id], (err, result) => {
        if (err) return err;
        res.status(200).send('ลบข้อมูล');
    });    
});

router.post('/edit/:id',(req,res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const id = req.params.id;

    connection.query('UPDATE `user` SET FirstName = ?,LastName = ? , Email = ? WHERE id = ?',[FirstName,LastName,Email,id], (err,result) => {
        if (err) return err;
        res.status(200).send('แก้ไขแล้ว')
    })
})
module.exports = router