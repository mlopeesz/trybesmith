import { Request, Response, NextFunction } from 'express';
import productSchema from '../schemas/product.schema';
import userSchema from '../schemas/user.schema';

class ValidationMiddleware {
  public validateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = productSchema.validate(req.body);

    if (error?.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }

    if (error?.message.includes('must be')) {
      return res.status(422).json({ message: error.message });
    }
    next();
  };

  public validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = userSchema.validate(req.body);

    if (error?.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }

    if (error?.message.includes('must be')) {
      return res.status(422).json({ message: error.message });
    }
    next();
  };
}

export default ValidationMiddleware;