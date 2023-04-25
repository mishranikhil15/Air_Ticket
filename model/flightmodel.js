
const mongoose=require('mongoose');


// {
//     _id: ObjectId,
//     airline: String,
//     flightNo: String,
//     departure: String,
//     arrival: String,
//     departureTime: Date,
//     arrivalTime: Date,
//     seats: Number,
//     price: Number
//   }

const FlightSchema=mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    seats: Number,
    price: Number
})

const FlightModel=mongoose.model("Flight_data",FlightSchema);

module.exports={
    FlightModel
}