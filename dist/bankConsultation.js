"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheking = void 0;
const dbProducts_1 = require("./dbProducts");
class Cheking {
    constructor() { }
    // Verificar se o produto existe banco e retornar o produto.
    productExist(product) {
        let s = dbProducts_1.DbProducts.filter(function (DbProducts) {
            return DbProducts.name === product.name;
        });
        if (s.length === 0) {
            console.log("Product not exist...");
        }
    }
}
exports.Cheking = Cheking;
