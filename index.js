const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user.route");
const { TodoRoute } = require("./routes/todo.route");
require("dotenv").config()
const app = express();
app.use(cors());
app.use(express.json());


app.use("/user/",userRoute);
app.use("/todos",TodoRoute);




let PORT  = process.env.PORT || 5500;
app.listen(PORT,async()=>{
     console.log(`listening at port:${PORT}`);
     try{
          await connection;
          console.log("connection success");
     }catch(err){
          console.log("connection failed")
     }
})