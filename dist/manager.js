"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const client_1 = require("./client");
const product_1 = require("./product");
class Manager {
    constructor(client) {
        this.client = client;
        this.clientList = [];
        this.kartList = [];
    }
    createClient(newClient) {
        this.clientList.push(newClient);
    }
    getClientList() {
        this.clientList.forEach((c) => {
            console.log(c);
        });
    }
    order(newOrder) {
        this.client.shoppingCart(newOrder);
    }
    addProductToFavorite(product, index) {
        console.log(this.clientList[index].addToFavorite(product));
    }
    removeToFavorite(index, product) {
        this.clientList[index].removeFavorite(product);
    }
    getListOfFavoriteProducts(index) {
        this.clientList[index].getFavoriteProducts();
    }
    addProductToKart(newProduct) {
        this.kartList.push(newProduct);
    }
    getProductsToKart() {
        this.kartList.forEach((c) => {
            console.log(c);
        });
    }
}
exports.Manager = Manager;
const r1 = new client_1.Client(1234, "Rodrigo", 30);
const r2 = new client_1.Client(1234, "Lucas", 20);
const m1 = new Manager(r1);
const p = new product_1.Product("copo", 10, "copo de vidro");
const pc = new product_1.Product("placa de video", 600, "amd rx580 8Gb");
const pd = new product_1.Product("teclado", 100, "teclado mecanico");
const pf = new product_1.Product("copo2", 15, "copo de vidro 2");
m1.createClient(r1);
m1.createClient(r2);
// m1.order(p)
// m1.addProductToKart(pc)
// m1.addProductToKart(p)
// m1.addProductToKart(pf)
m1.addProductToFavorite(pd, 0);
m1.addProductToFavorite(p, 0);
m1.addProductToFavorite(pf, 0);
m1.addProductToFavorite(pc, 0);
m1.removeToFavorite(0, pf);
console.log(m1.getListOfFavoriteProducts(0));
