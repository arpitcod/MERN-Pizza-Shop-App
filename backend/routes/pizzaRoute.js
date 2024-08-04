const express = require('express');
const router = express.Router();
const pizzaModel = require('../models/pizzaModel');


// get all pizza 

router.get('/get-all-pizza', async (rq,rs) =>{
    try {
        
        const getAllPizza = await pizzaModel.find({})
        return rs.send({
            message:"getting all pizza",
            getAllPizza,
            

        })
    } catch (error) {
        console.log(error)
        
        return rs.send({
            message:error,

        })
    }
})


module.exports = router;