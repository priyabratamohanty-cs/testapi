const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

const dummydetails = require('./config/db');

const PORT = dummydetails.port;
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

mongoose.connect(
    dummydetails.dbUrl,
    { useNewUrlParser: true,useUnifiedTopology: true },
(err)=>{
    if(err) throw err;
    else{
        console.log('Mongodb connected successfully');
    }
})


app.use('/api',require('./routes/api'));


app.listen(PORT,(err)=>{
    if(err){
        console.log('Error occured while listening');
        console.log(err);
    }else{
        console.log('server is running on port no : '+PORT);
    }
})