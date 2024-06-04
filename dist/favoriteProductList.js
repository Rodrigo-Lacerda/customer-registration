"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteProductList = void 0;
class FavoriteProductList {
    constructor() {
        this.products = [];
    }
    addProductToList(newProduct) {
        this.products.push(newProduct);
    }
    getProductList() {
        this.products.forEach((product) => {
            console.log(product);
        });
    }
}
exports.FavoriteProductList = FavoriteProductList;
// const p1 = new Product("caneta", 1.00, "caneta preta")
// const pl = new ProductList()
// pl.addProductToList(p1)
// pl.getProductList()
