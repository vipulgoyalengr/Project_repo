const mongoose=require('mongoose');
// const bcrypt=require('bcryptjs');
var body10=mongoose.Schema({
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
var stud6=mongoose.model('stud6',body10);
module.exports={stud6};