const mongoose = require("mongoose");
const todoSchema = {
     taskname:{type:String,required:true},
     status:{type:Boolean,required:true,default:false},
     tag:{type:String,required:true}
}

const TodoModel = mongoose.model("nem-eval-c4-todo",todoSchema);


module.exports = {TodoModel};