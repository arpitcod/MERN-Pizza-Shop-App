const mongoose = require('mongoose');
require('dotenv').config();

const pizzaModel = require('./models/pizzaModel');
const pizzaData = require('./data/PizzaData');
const connectDb = require('./config/db');
// const { default: mongoose } = require('mongoose');

// dotenv.config();
connectDb();


//import data
const import_data = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URI);
        await pizzaModel.insertMany(pizzaData);
        console.log("data import successfully")      
    } catch (error) {
        console.log(error)
    }
}

// start();
import_data();
module.exports=import_data;

