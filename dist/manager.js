"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const bankConsultation_1 = require("./bankConsultation");
class Manager {
    constructor() {
        this.clientList = [];
        this.kartList = [];
    }
    createClient(newClient) {
        this.clientList.push(newClient);
    }
    getClientList(index) {
        return this.clientList[index];
    }
    checkProduct(product) {
        let check = new bankConsultation_1.Check();
        // Confirmar se o produto existe e jogar no carrinho de compra....
        console.log(check.productExist(product));
    }
}
exports.Manager = Manager;
