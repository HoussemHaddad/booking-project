const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username:String,
    email:String,
    country:String,
    img:String,
    city:String,
    phone:String,
    password:String,
    isAdmin:Boolean
  }
);

module.exports= mongoose.model("User", UserSchema);

