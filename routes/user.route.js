const {Router} = require("express");
const { userControllers } = require("../controllers/user.controllers");
const userRoute = Router();


userRoute.post("/register",userControllers.newUser);
userRoute.post("/login",userControllers.login);



module.exports = {userRoute};