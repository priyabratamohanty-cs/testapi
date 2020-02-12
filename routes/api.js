const express = require('express');
const Router = express.Router();

const dummy = require('../model/data');

Router.get('/dummyapi', (req, res) => {
    console.log("true");
    res.send('request reached to server');
})



module.exports = Router;
