const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();


const setupAndStartServer = async ()=>{
    
    app.listen(PORT, async()=>{
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();