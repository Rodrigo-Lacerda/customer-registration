"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this.requests = [];
    }
    saveRequest(request) {
        this.requests.push(request);
        console.log(this.requests);
    }
    checkRequest(id) {
        let p = [];
        this.requests.filter((order) => {
            if (order[0] === id) {
                p.push(order);
            }
        });
        console.log(p);
    }
}
exports.Bank = Bank;
