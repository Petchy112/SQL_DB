const express = require('express')
const app = express()
const port = process.env.port || 4000
var connection = require('./router');
const router = express.Router()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

connection.connect(function(err) {
  if (err) return err;
  console.log('Connected')
})


app.use('/data/user',connection)

app.listen(port , () => console.log(`App listening at port ${port}`))


