const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
var body6=mongoose.Schema({
Lab_name:{
    type:String,
    require:true
},
Lab_usr:{
    type:String,
    require:true,
    unique:true
},
Lab_pass:{
    type:String,
    require:true
},
Owner:{
    type:String,
    require:true
},
Address:{
    type:String,
    require:true
},
Rating:{
    type:Number,
    require:true
},
Contact:{
    type:Number,
    require:true
},
Status:{
    type:String,
    require:true
}
});
body6.pre('save',function(next){
    var user=this;
    if(user.isModified('Lab_pass')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.Lab_pass,salt,(err,hash)=>{
                user.Lab_pass=hash;
                next();
            });
        });
    }else{
        next();
    }      
});
var stud2=mongoose.model('stud2',body6);
module.exports={stud2};