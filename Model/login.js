let mongoose =require('mongoose')
 let loginSchema =new mongoose.Schema({
   username:String,
   password:String,

 })

 module.exports=mongoose.model('login',loginSchema)
 