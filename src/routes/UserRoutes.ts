import { Router } from 'express';
import ValidationMiddleware from '../middlewares/Validation.middleware';
import UserController from '../controllers/UserController';

const validationMiddleware = new ValidationMiddleware();
const userController = new UserController();

const router = Router();

router.post('/', validationMiddleware.validateUser, userController.create);

export default router;