"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
const dbProducts_1 = require("./dbProducts");
class Check {
    constructor() { }
    productExist(product) {
        let newProd;
        dbProducts_1.DbProducts.filter((prod) => {
            if (prod.name === product.getName()) {
                newProd = prod;
            }
        });
        return newProd;
    }
}
exports.Check = Check;
