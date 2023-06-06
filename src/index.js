const express = require('express');
const { PORT } = require('./config/serverConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDb = require('./config/dbConfig');
const app = express();
connectDb();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const setupAndStartServer = async() => {

    app.listen(PORT, async() => {
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();