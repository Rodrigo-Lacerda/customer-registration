"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheking = void 0;
const dbProducts_1 = require("./dbProducts");
const product_1 = require("./product");
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
const t = new product_1.Product("placa de video", 600, "amd rx580 8Gb");
const t2 = new product_1.Product("mouse", 50, "mouse sem fio");
const p = new Cheking();
p.productExist(t2);
