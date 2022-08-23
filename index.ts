import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import cors from 'cors';
import express from 'express';
const app = express();

import { connection } from './database/database';

global.__basedir = __dirname;

// Cors
app.use(cors());

// Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// Database
connection.authenticate().then(() => {
	console.log('Conexão feita com banco de dados');
}).catch((error) => {
	console.log(error);
});

app.listen(process.env.API_PORT, () => {
	console.log(process.env.API_MSG);
});