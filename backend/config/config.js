const mongoose = require('mongoose')

const connect = ()=>{
    try {
         mongoose.connect('mongodb+srv://houssemhaddad:houssem@cluster0.bvjnaqn.mongodb.net/api');
        console.log("connect to mongodb");
    } catch (error) {
     console.log(error);
} 
};
module.exports=connect