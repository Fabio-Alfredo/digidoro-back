import express from 'express';
import { config } from './src/configs/config.js';
import { dbConnection } from './src/configs/dbConnection.config.js';
import  routes  from './src/routes/index.route.js';
import { errorHandler } from './src/middlewares/errorHanddler.middleware.js';

const app =express();

const PORT = config.port|| 3002;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);
app.use(errorHandler);

dbConnection()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})