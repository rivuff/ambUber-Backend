const express = require('express');
const { PORT } = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const apiRoutes = require('./routes/index');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRoutes);

const setupAndStartServer = async ()=>{
    
    app.listen(PORT, async()=>{
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();