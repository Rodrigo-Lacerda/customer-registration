"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(rg, name, age, points) {
        this.rg = rg;
        this.name = name;
        this.age = age;
        this.points = points;
    }
    getPoints() {
        return this.points;
    }
}
exports.Client = Client;
