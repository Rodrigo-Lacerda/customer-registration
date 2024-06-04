"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const client_1 = require("./client");
const product_1 = require("./product");
class Manager {
    constructor(client) {
        this.client = client;
        this.clientList = [];
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
        this.client.requests(newOrder);
    }
}
exports.Manager = Manager;
const r1 = new client_1.Client(1234, "Rodrigo", 30);
const r2 = new client_1.Client(1234, "Lucas", 20);
const m1 = new Manager(r1);
const p = new product_1.Product("copo", 10, "copo de vidro");
m1.createClient(r1);
m1.createClient(r2);
m1.order(p);
console.log(m1.getClientList());
