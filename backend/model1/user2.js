const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs');
var body5=mongoose.Schema({
    Username:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        require:true
    },
    Lab_usr:{
        type:String,
        require:true
    },
    Lab:{
        type:String,
        require:true
    },
    Address:{
        type:String, 
        require:true
    }
});
var stud1=mongoose.model('stud1',body5);
module.exports={stud1};