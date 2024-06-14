"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(rg, name, age, points = 0, active = true, requestList = [], favoriteList = []) {
        this.rg = rg;
        this.name = name;
        this.age = age;
        this.points = points;
        this.active = active;
        this.requestList = requestList;
        this.favoriteList = favoriteList;
    }
    getPoints() {
        return this.points;
    }
    isActive() {
        return this.active;
    }
    blocked() {
        this.active = false;
    }
    shoppingCart(newRequest) {
        this.requestList.push(newRequest);
    }
    getMyRequests() {
        this.requestList.forEach((p) => {
            console.log(p);
        });
    }
    addToFavorite(newProduct) {
        this.favoriteList.push(newProduct);
    }
    removeFavorite(product) {
        let newList = this.favoriteList.filter((prodName) => prodName.name !== product.name);
        if (this.favoriteList.length !== 0) {
            this.favoriteList = [];
        }
        this.favoriteList = newList;
    }
    getFavoriteProducts() {
        this.favoriteList.forEach((pf) => {
            console.log(pf);
        });
    }
}
exports.Client = Client;
