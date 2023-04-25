const express = require("express");

const { FlightModel } = require("../model/flightmodel");

const flightrouter = express.Router();

flightrouter.get("/flights", async (req, res) => {
  try {
    let data = await FlightModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.send({ msg: "Error in Finding the Flight Data" });
    console.log(error);
  }
});

flightrouter.get("/flights/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let data = await FlightModel.find({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.send({ msg: "Error in Finding the Flight Data" });
    console.log(error);
  }
});

flightrouter.post("/flights", async (req, res) => {
  let payload = req.body;

  try {
    const flight_data = new FlightModel(payload);
    await flight_data.save();
    res.status(200).json("Added new Flight Data");
  } catch (error) {
    res.send({ msg: "Error in adding new Flight Data" });
    console.log(error);
  }
});


flightrouter.patch("/flights/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;

    try {
        await FlightModel.findByIdAndUpdate({"_id":id},payload);
        res.send("updated the flight data")
    } catch (error) {
        res.send({ msg: "Error in updating  Flight Data" });
        console.log(error);
    }
})


flightrouter.delete("/flights/:id",async(req,res)=>{
    const id=req.params.id;

    try {
        await FlightModel.findByIdAndDelete({"_id":id});
        res.status(202).json("Deleted the flight data")
    } catch (error) {
        res.send({ msg: "Error in Deleting the Flight Data" });
        console.log(error);
    }
})


module.exports = {
  flightrouter,
};
