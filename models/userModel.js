const mongoose =require('mongoose');
const { Schema } = require('mongoose');
const userSchema =new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },

    name:{
        type :String,
        required:true,
        
    },
    fullName:{
        type:String,
        required:true
    },
    
});



const User= mongoose.model('user',userSchema);
module.exports=User;