const express = require("express")
const port = 5510
const app = express()
const userRooter =require('./routes/users')
const {hotels}= require("./routes/hotels")
const cors = require('cors')
const connect = require('./config/config')


app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    Credentials:false,
    optionsSuccessStatus:200
}));

app.listen(5510,    
    console.log("gg")
)
connect()
app.use("/", userRooter);
app.use("/", hotels);

