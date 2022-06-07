import connection from './connection';

class ProductModel {
  public getAll = async () => {
    const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return products;
  };
}

export default ProductModel;