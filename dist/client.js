"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(rg, name, age, points = 0, requestList = [], favoriteList = []) {
        this.rg = rg;
        this.name = name;
        this.age = age;
        this.points = points;
        this.requestList = requestList;
        this.favoriteList = favoriteList;
    }
    getPoints() {
        return this.points;
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
    getFavoriteProducts() {
        this.favoriteList.forEach((pf) => {
            console.log(pf);
        });
    }
}
exports.Client = Client;
