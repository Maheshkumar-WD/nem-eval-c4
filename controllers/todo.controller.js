const jwt = require("jsonwebtoken");

const todoControllers = {
     addTodo:async (req,res)=>{
          let data = req.body.data;
          let token = req.body.token;
          console.log(process.env.SECRET_KEY);
          jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
               console.log(decoded);
          })
     }
}

module.exports = {todoControllers};