import express from 'express';
import productRoutes from './routes/ProductRoutes';
import userRoutes from './routes/UserRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
