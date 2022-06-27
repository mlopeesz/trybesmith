import OrderModel from '../models/OrderModel';

const orderModel = new OrderModel();

class OrderService { 
  public getAll = async () => {
    const orders = await orderModel.getAll();
    return orders;
  };
}

export default OrderService;