import ProductModel from '../models/ProductModel';

const productModel = new ProductModel();

class ProductService {
  public getAll = async () => {
    const products = await productModel.getAll();
    return products;
  };
}

export default ProductService;
