const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
mongoose.Promise = global.Promise ;
var body7=mongoose.Schema({
Test_name:{
   type:String,
   require:true
},
Lab_name:{
    type:String,
    require:true
},
Price:{
type:Number,
require:true
},
Pre_test_info:{
type:String,
require:true
},
});
var stud3=mongoose.model('stud3',body7);
module.exports={stud3};