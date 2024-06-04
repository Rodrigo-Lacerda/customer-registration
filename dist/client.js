"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(rg, name, age, points = 0, requestList = []) {
        this.rg = rg;
        this.name = name;
        this.age = age;
        this.points = points;
        this.requestList = requestList;
    }
    getPoints() {
        return this.points;
    }
    requests(newRequest) {
        this.requestList.push(newRequest);
    }
    getMyRequests() {
        this.requestList.forEach((p) => {
            console.log(p);
        });
    }
}
exports.Client = Client;
