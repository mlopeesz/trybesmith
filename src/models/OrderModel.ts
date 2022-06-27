import IOrder from '../interfaces/order.interface';
import connection from './connection';

class OrderModel {
  public getAll = async () => {
    const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');
    const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');

    const orderObject: Array<IOrder> = Object.values(orders).map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: [],
    }));
    Object.values(products).forEach((product) => {
      Object.values(orders).forEach((order, index) => {
        if (order.id === product.orderId) {
          orderObject[index].productsIds.push(product.id);
        }
      });
    });
    return orderObject as IOrder[];
  };
}

export default OrderModel;
