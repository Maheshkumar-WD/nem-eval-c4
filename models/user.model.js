const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
     email:{type:String,required:true},
     password:{type:String,required:true},
     ip:{type:String,required:true}
})

const UserModel = mongoose.model("nem-eval-c4-user",userSchema);

module.exports = {UserModel};