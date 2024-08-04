const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const pizzaRoute = require('./routes/pizzaRoute')
const cors = require('cors');

// config dotenv 
dotenv.config();

// connect mongodb 
connectDb();

// coors 
const corsOptions ={
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
    
  };

//middleware
const app = express();
app.use(cors(corsOptions))
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/pizza',pizzaRoute)

//route
app.get('/',(rq,rs)=>{
    rs.send("hare krishna")
})

// server listen 

const port = process.env.PORT || 2024;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})