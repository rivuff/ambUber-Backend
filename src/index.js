const express = require('express');
const { PORT } = require('./config/serverConfig');


// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const setupAndStartServer = async ()=>{
    const app = express();
    app.listen(PORT, async()=>{
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();