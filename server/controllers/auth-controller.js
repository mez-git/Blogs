const User = require("../models/user-model");
const bcrypt =require("bcryptjs")
const home = async (req, res) => {
  try {
    res.status(200).send("welcome with router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
console.log(req.body)
  const {username,email,phone,password}=req.body


const userExist=await User.findOne({email});
if(userExist){
  return res.status(400).json({message:"email already exist"})
}




const userCreated=await User.create({username,email,phone,password})

    res.status(201).json({
      msg:userCreated,
      token:await userCreated.generateToken(),
      userId:userCreated._id.toString(),
    });
  } catch (error) {
    //console.log("regi", error);
    next(error);
  }
};
//user login

const login=async(req,res)=>{
  try{
    console.log(req.body)
   const {email,password}=req.body
   const userExist=await User.findOne({email})
if(!userExist){
  return res.status(400).json({message:"invalid credential"})
}


const user=await userExist.comparePassword(password)
if(user){
  
  res.status(200).json({
    msg:"login sucessfull",
    token: await userExist.generateToken(),
    userId:userExist._id.toString()
  })
}else{
  res.status(401).json({message:"invalid credentials"})}

  }
  catch(error){
    res.status(500).json("internal server error")
 
  }
}
//user logic-to send user data
const user=async(req,res)=>{
  try{
    const userData=req.user
console.log(userData)
return res.status(200).json({userData})

  }catch(error){
    console.log('error from the user route ${error}')
  }
}
module.exports = { home, register,login ,user};
