const mongoose = require('mongoose');
require('dotenv').config();


//Define mongodb connection url
 //const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

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