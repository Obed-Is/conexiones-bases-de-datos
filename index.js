import express from 'express';
import 'dotenv/config';
import { getMongo } from './src/connection_mongo.js';

const app = express();

//CONEXIONES
await getMongo();



app.listen(process.env.SERVER_PORT || 4000,
    () => console.log('Server en ejecicion')
)