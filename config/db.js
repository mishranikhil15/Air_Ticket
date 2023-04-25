const mongoose=require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery',false);
const Connection=mongoose.connect(process.env.mongourl);

module.exports={
    Connection
}