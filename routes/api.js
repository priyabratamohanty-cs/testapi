const express = require('express');
const Router = express.Router();

const dummy = require('../model/data');

Router.post('/dummyapi', (req, res) => {

    res.send({message:'request reached to server',data:req.body});
})



module.exports = Router;
