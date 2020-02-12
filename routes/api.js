const express = require('express');
const Router = express.Router();

const dummy = require('../model/data');

Router.get('/dummyapi', (req, res) => {
 
    res.send('request reached to server');
})



module.exports = Router;
