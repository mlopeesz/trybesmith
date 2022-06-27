import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

const orderService = new OrderService();

class OrderController {
  public getAll = async (_req: Request, res: Response) => {
    const orders = await orderService.getAll();
    return res.status(200).json(orders);
  };
}

export default OrderController;