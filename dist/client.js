"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(name, document, dateOfBirth, points = 0) {
        this.name = name;
        this.document = document;
        this.dateOfBirth = dateOfBirth;
        this.points = points;
        this.favoriteProducts = [];
        this.myRequests = [];
        this.active = true;
    }
    getClient() {
        return this;
    }
    addToFavorite(product) {
        this.favoriteProducts.push(product);
    }
    removeToFavorite(product) {
        let newList = [];
        this.favoriteProducts.filter((prod) => {
            if (prod !== product) {
                newList.push(prod);
            }
        });
        this.favoriteProducts = [];
        this.favoriteProducts = newList;
    }
    isActive(isActive) {
        this.active = isActive;
    }
    getActive() {
        return this.active;
    }
    addPoints() {
        this.points += 100;
    }
    getPoints() {
        return this.points;
    }
}
exports.Client = Client;
