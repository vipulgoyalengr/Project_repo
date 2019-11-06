const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
mongoose.Promise = global.Promise ;
var body4=mongoose.Schema({
    Firstname:{
        type:String,
        require:true
    },
    Lastname:{
        type:String,
        require:true    
    },
    Age:{
        type:Number,
        require:true
    
    },
    Email:{
        type:String,
        unique:true,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    
    },
    Fathername:{
        type:String,
        require:true
    
    },
    Address:{
        type:String,
        require:true
    },
    Dob:{
        type:Date,
        require:true
    },
    Contact:{
        type:Number,
        require:true
    },
    State:{
        type:String,
        require:true
    },
    Status:{
        type:String,
        require:true
    }
    
    // testing:{
    //     data:{
    //         type:String
    //     }
    // }
});
body4.pre('save',function(next){
    var user=this;
    if(user.isModified('Password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.Password,salt,(err,hash)=>{
                user.Password=hash;
                next();
            });
        });
    }else{
        next();
    }      
});

// body4.statics.find = function(Email,password){
//     var User = this;
//     return User.find({Email}).then((user)=>{
//         if(!user){
//             return Promise.reject();
//         }
//         return new Promise((resolve,reject)=>{
//             bcrypt.compare(password.Password,user.Password,(err,result)=>{
//                 if(result){
//                     resolve(user);
//                 }
//                 else{
//                     reject();
//                 }
//             });
//         });
//     })
//     .catch((err)=>{
//         return Promise.reject();
//     });
// }
var stud=mongoose.model('stud',body4);
module.exports={stud};