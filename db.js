const mongoose = require('mongoose');

//Define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels '

//setup mongodb connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to MongoDb server');
});

db.on('error',(err) =>{
    console.error('Mongodb Connection error:',err);
});

db.on('disconnected',() => {
    console.log('MongoDb disconnected');
});

module.exports = db;