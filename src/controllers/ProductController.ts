import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

const productService = new ProductService();

class ProductController {
  public getAll = async (_req: Request, res: Response) => {
    try {
      const products = await productService.getAll();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { name, amount, orderId } = req.body;
      const product = await productService.create(name, amount, orderId);
      return res.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductController;
