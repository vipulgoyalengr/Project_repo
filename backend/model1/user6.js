const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
var body9=mongoose.Schema({
 Email:{
     type:String,
     require:true
 },
 Complain:{
     type:String,
     require:true
 }
});
var stud5=mongoose.model('stud5',body9);
module.exports={stud5};