import express from 'express'
const app=express()
const port=process.env.PORT || '3000';
import router from './routes/web.js';
const database_url=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"
import { dbconnect } from './db/dbconnection.js';
import bodyParser from 'body-parser';
import cors from 'cors';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// database connection call
dbconnect(database_url)

// Routes
app.use('/api', router);

app.listen(port,()=>{
    console.log(`backend is running port no ${port}`);
})
