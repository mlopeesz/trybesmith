import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.get('/', productController.getAll);

export default router;