const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
var body8=mongoose.Schema({
 Lab_name:{
     type:String,
     require:true
 },
 Feed:{
     type:String,
     require:true
 }
});
var stud4=mongoose.model('stud4',body8);
module.exports={stud4};