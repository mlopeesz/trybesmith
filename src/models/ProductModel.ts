import { ResultSetHeader } from 'mysql2';
import connection from './connection';

class ProductModel {
  public getAll = async () => {
    const [products] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products;
  };

  public create = async (name: string, amount: string, orderId: number | null = null) => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES(?,?,?)',
      [name, amount, orderId],
    );
    return {
      id: product.insertId,
      name,
      amount,
    };
  };
}

export default ProductModel;
