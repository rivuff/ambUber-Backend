const express = require('express');
const { PORT } = require('./config/serverConfig');
const connectDb = require('./config/dbConfig');
const app = express();
connectDb();
const setupAndStartServer = async() => {

    app.listen(PORT, async() => {
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();