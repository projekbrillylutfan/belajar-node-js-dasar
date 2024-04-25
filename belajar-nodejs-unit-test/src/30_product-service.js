import { getAllProducts, getProductById } from "./29_database";

export class ProductService {
    static findById(id) {
        return getProductById(id)
    }

    static findAll() {
        return getAllProducts();
    }
}