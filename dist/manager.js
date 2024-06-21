"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const bankConsultation_1 = require("./bankConsultation");
const dbStore_1 = require("./dbStore");
const uuid_1 = require("uuid");
class Manager {
    constructor() {
        this.clientList = [];
        this.kartList = [];
        this.bank = new dbStore_1.Bank();
    }
    createClient(newClient) {
        this.clientList.push(newClient);
    }
    getClientList(index) {
        return this.clientList[index];
    }
    checkProduct(product) {
        let check = new bankConsultation_1.Check();
        return check.productExist(product);
    }
    order(product) {
        this.kartList.push(this.checkProduct(product));
    }
    finalizedOrder(discount = 0) {
        let tot = 0;
        let id = (0, uuid_1.v1)();
        let p = [];
        let request = {
            ID: id,
            products: p,
            amount: 0,
        };
        console.log(`===== Pedido Finalizado ..... =====`);
        console.log(`ID do pedido ${id}`);
        this.kartList.forEach((prod) => {
            console.log(`*** ${prod.getName()}`);
            tot += prod.getPrice();
            request.products.push(prod);
        });
        console.log(`Valor total da compra R$${tot} Reais.`);
        request.amount = tot;
        this.bank.saveRequest(request);
        console.log(request);
    }
    checkOrders(id) {
        // retornar um pedido por id
        this.bank.checkRequest(id);
    }
}
exports.Manager = Manager;
