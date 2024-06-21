"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
const dbProducts_1 = require("./dbProducts");
const product_1 = require("./product");
class Check {
    constructor() { }
    productExist(product) {
        let newProd = new product_1.Product("", 0, "");
        dbProducts_1.DbProducts.filter((prod) => {
            if (prod.name === product.getName()) {
                newProd.setName(prod.name);
                newProd.setPrice(prod.price);
                newProd.setDescripition(prod.descripition);
            }
        });
        return newProd;
    }
}
exports.Check = Check;
