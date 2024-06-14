"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const uuid_1 = require("uuid");
class Manager {
    constructor(client) {
        this.client = client;
        this.clientList = [];
        this.kartList = [];
        this.completedOrders = [];
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
        this.clientList.forEach((c) => {
            if (c.isActive() !== true) {
                throw new Error(`User blocked...`);
            }
            this.client.shoppingCart(newOrder);
        });
    }
    finalizeOrder(discount = 0) {
        let amount = 0;
        let productsInKart = [];
        let value = discount;
        let idv1 = (0, uuid_1.v1)();
        let index = 1;
        console.log(`ID do pedido: ${idv1}`);
        this.completedOrders.push({ ID: idv1 });
        this.kartList.forEach((product) => {
            amount += product.price;
            productsInKart.push(product.name);
            this.completedOrders.push(product);
        });
        if (value > 0) {
            amount -= (value * amount) / 100;
        }
        productsInKart.forEach((p) => {
            console.log(`***** ${index}: ${p}`);
            index++;
        });
        this.completedOrders.push({ value: amount });
        console.log(`Valor Total do pedido R$${amount} Reais.`);
    }
    cusultOrder() {
        return this.completedOrders;
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
