var express = require('express')
var app = express()
var mongoose = require('mongoose')
var x = require('x-ray')();


//connect to database
mongoose.connect('mongodb://localhost:27017/blog')
 
mongoose.connection.on('open', function() {console.log('db connected')})

var dataScrapeController = require('./controllers/dataScrapeController')

//read	
app.get('/data', dataScrapeController.getData)

app.listen(8080)
console.log('server is running')