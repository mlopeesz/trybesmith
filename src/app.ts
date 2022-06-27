import express from 'express';
import productRoutes from './routes/ProductRoutes';
import userRoutes from './routes/UserRoutes';
import orderRoutes from './routes/OrderRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
