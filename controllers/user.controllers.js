const address = require("address");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const userControllers = {
    getuser:async(req,res)=>{
        
    },
    newUser: async (req, res) => {
        console.log(req);
        try {
            let { email, password } = req.body.data;
            let isFind = await UserModel.find({ email });
            if (isFind.length > 0) {
                res.send({ status: 404, msg: "User already exist" });
            } else {
                bcrypt.hash(password, 4, async (err, result) => {
                    if (err) {
                        res.send({
                            status: 404,
                            msg: "something went wrong please try again later",
                        });
                    } else {
                        uD = {
                            email,
                            password: result,
                            ip: address.ip(),
                        };
                        let user = new UserModel(uD);
                        await user.save();
                        res.send({ status: 200, msg: "register success" });
                    }
                });
            }
        } catch (err) {
            res.send({
                status: 404,
                msg: "something went wrong please try again later",
            });
        }
    },
    login: async (req, res) => {
        try {
          let {email,password} = req.body.data;
          let isFind =await UserModel.findOne({email});
          
          if(isFind){
               bcrypt.compare(password,isFind.password,async (err,result)=>{
                console.log(result)
                    if(result){
                        
                        let token = jwt.sign({email}, process.env.SECRET_KEY)
                         console.log(token);
                         res.send({token:token,status:200,msg:"login success"});
                    }else{
                        res.send("login failed");
                    }
               })
          }else{
               res.send({status:404,msg:"User not found"});
          }


        } catch (err) {
            res.send({
                status: 404,
                msg: "something went wrong please try again later",
            });
        }
    },
};

module.exports = { userControllers };
