import express from 'express';
const app = express();
import { PORT } from './config.js';
import { pool } from './models/db.js';
import morgan from 'morgan';
import { insertarRoutes, basedRoutes } from './routes/index.js';

app.use(morgan('dev'));

app.use('/api', basedRoutes);
app.use('/api', insertarRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo', PORT);
});