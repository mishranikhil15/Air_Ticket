const express = require("express");

const { UserModel } = require("../model/usermodel");

const userrouter = express.Router();

// userrouter.post("/register",async(req,res)=>{
//     const payload=req.body;

//     try {
//         const users=new UserModel(payload);
//         await users.save();
//         res.status(201).json(users)
//     } catch (error) {
//         res.send({"msg":"Error in Registering the user"})
//     }
// })

userrouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let data = await UserModel.find({ email });
  if (data.length != 0) {
    return res.json("Email Id Already Exists");
  }

  try {
    const users = new UserModel({ name, email, password });
    await users.save();
    res.status(201).json("User Registered");
  } catch (error) {
    res.send({ msg: "Error in Registering the user" });
    console.log(error);
  }
});

userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user_data = await UserModel.find({ email: email, password: password });
    //   console.log(user_data);
    if (user_data.length > 0) {
      res.status(201).json("User Successfully LoggedIn");
    } else {
      res.json({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.send({ msg: "Error in Logging the user" });
    console.log(error);
  }
});

module.exports = {
  userrouter,
};


// {
//     "name":"ashish",
//     "email":"ashish@gmail.com",
//     "password":"ashish"
//   }