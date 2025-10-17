import express from 'express';
import 'dotenv/config';
import { getMongo } from './src/connection_mongo.js';
import { getSqlServer } from './src/connection_sqlServer.js';

const app = express();

//CONEXIONES
await getMongo();
await getSqlServer();


app.listen(process.env.SERVER_PORT || 4000,
    () => console.log('Server en ejecicion')
)