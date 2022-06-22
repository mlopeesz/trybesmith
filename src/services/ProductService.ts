import ProductModel from '../models/ProductModel';

const productModel = new ProductModel();

class ProductService {
  public getAll = async () => {
    const products = await productModel.getAll();
    return products;
  };

  public create = async (name: string, amount: string, orderId: number) => {
    const product = await productModel.create(name, amount, orderId);
    return product;
  };
}

export default ProductService;
