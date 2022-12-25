const User =require('../models/userModel');

module.exports.getUsers  =async(req,res)=>{
      try {
        const users= await User.find();
        res.json(users);
      } 
      catch (err) {
        res.status(500).json({msg:err.message});
      }
 };

 module.exports.getSingleUser =async(req,res)=>{
    
     try {  
     const user= await User.findById(req.params.id);
     console.log(user)
     return res.status(400).json({user})

      
        } 
     catch (error) {
       return res.status(500).json({msg: error.message})
     }
}


 module.exports.addUser =async(req,res)=>{
     try { 
          const {name,fullName,id} = req.body;
          const newUser = await new User({name,fullName,id})
 
          await newUser.save()
          return res.json({msg: "user created"})
        
     }
     catch (err) {
          return res.status(500).json({msg: err.message})
     }
  }


  module.exports.deleteUser  =async(req,res)=>{
    
    try {
     const user= await User.findByIdAndDelete(req.params.id)
     console.log(user)

     return res.status(400).json({msg: "user deleted"})
    } 
    catch (error) {
         return res.status(500).json({msg: error.message})
    }
 }