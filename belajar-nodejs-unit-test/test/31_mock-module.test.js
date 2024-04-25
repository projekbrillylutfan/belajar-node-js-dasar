import { getAllProducts, getProductById } from "../src/29_database";
import { ProductService } from "../src/30_product-service";

jest.mock("../src/29_database.js");

test('mock modules getProductById', () => { 
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "test"
        }
    })

    const product = ProductService.findById(1);
    expect(product).toEqual({id: 1, name: "test"})
 })

 test('mock modules getAllProducts', () => { 
    const products = [
        {
            id: 1,
            name: "test"
        },
        {
            id: 2,
            name: "test2"
        }
    ]
    getAllProducts.mockReturnValue(products);
    expect(ProductService.findAll()).toEqual(products)
  })