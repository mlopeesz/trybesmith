import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import ValidationMiddleware from '../middlewares/Validation.middleware';

const productController = new ProductController();
const validationMiddleware = new ValidationMiddleware();

const router = Router();

router.get('/', productController.getAll);
router.post('/', validationMiddleware.validateProduct, productController.create);

export default router;