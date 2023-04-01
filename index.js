const express = require('express');
const app = express();
require('dotenv').config();


app.listen(process.env.PORT,(err) => {
    if(err) console.error(err);
    else{
        console.log("Server is running on port",process.env.PORT);
        require('./configs/db.config.js');
    }

})