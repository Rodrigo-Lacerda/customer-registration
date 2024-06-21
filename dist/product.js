"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, descripition) {
        this.name = name;
        this.price = price;
        this.descripition = descripition;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setName(newName) {
        this.name = newName;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    setDescripition(newDecripition) {
        this.descripition = newDecripition;
    }
}
exports.Product = Product;
