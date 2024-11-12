import express from 'express';
import { config } from './src/configs/config.js';
import { dbConnection } from './src/configs/dbConnection.config.js';

const app =express();

const PORT = config.port|| 3002;

dbConnection()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})