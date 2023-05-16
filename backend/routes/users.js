const express = require("express")
const {Register, Login } = require("../controllers/user")
const { isAuth } = require("../middlewere/isAuthe")
const { registervalidation, validation, loginvalidation } = require("../middlewere/validation")
const userRooter = express.Router()

userRooter.post("/register",registervalidation,validation,Register)
userRooter.post("/login",loginvalidation,validation,Login)
userRooter.get('/get',isAuth,(req,res)=>{
   res.send({user:req.user}) ; 
})
module.exports=userRooter