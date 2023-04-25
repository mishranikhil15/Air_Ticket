const express=require('express');
const {Connection}=require("./config/db");
const {userrouter}=require("./routes/userroute");
const{flightrouter}=require("./routes/flightroute");
const{bookingrouter}=require("./routes/bookingroute")
const app=express();
require('dotenv').config();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/users",userrouter);
app.use("/flight",flightrouter);
app.use("/booking",bookingrouter);

app.listen(process.env.port,async()=>{
    try {
        await Connection
        console.log("Connected to Database")
    } catch (error) {
        console.log({"msg":"Error while connecting to Database"})
        console.log(error)
    }
    console.log(`Server is running on port ${process.env.port}`)
})