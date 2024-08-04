const mongoose = require('mongoose');

const connectDb = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb ${mongoose.connection.host} successfully connected `)
        
    } catch (error) {
        console.log(error);
    }

}

module.exports=connectDb;