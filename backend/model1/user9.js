const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs');
var body12=mongoose.Schema({
   Lab_name:{
    type:String,
    require:true
   },
   Email:{
    type:String,
    require:true
   },
   Name:{
    type:String,
    require:true
   },
Extension:{
   type:String,
   require:true
},
Date:{
   type:Date,
   
}
});
var stud8=mongoose.model('stud8',body12);
module.exports={stud8};