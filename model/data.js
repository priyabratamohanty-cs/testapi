
const mongoose = require('mongoose');

const dummySchema = mongoose.Schema({
    username:{type:String,required:true},
    userid:{type:String,required:true},
    password:{type:String,required:true}
    
    
})

module.exports = mongoose.model('dummy',dummySchema,'dummy');