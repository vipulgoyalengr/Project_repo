const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs');
var body11=mongoose.Schema({
  Lab_usr:{
    type:String,
    require:true
   },
  Test_name:{
    type:String,
    require:true
  },
  Pre_test_info:{
    type:String,
    require:true
  },
  Report_delievery:{
    type:String,
    require:true
  },
  Price:{
    type:Number,
    require:true 
  }
});
var stud7=mongoose.model('stud7',body11);
module.exports={stud7};