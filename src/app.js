import express from 'express';
import productosRutas from './routes/productos.routes.js';

const app = express();

app.use(express.json());
app.use('/api', productosRutas);

export default app;