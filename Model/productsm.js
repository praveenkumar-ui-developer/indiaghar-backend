let mongoose =require('mongoose')
 let productsSchema =new mongoose.Schema({
   producturl:String,
   imgurl:String,
   productname:String,
   snumber:String,
 })

 module.exports=mongoose.model('products',productsSchema)
 