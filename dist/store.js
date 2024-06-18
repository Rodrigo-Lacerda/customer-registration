"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
const client_1 = require("./client");
const product_1 = require("./product");
const p = new product_1.Product("Copo", 10, "Copo verde...");
const p2 = new product_1.Product("Copo-2", 10, "Copo vermelho...");
const p3 = new product_1.Product("Copo-3", 10, "Copo azul...");
const pc = new product_1.Product("laptop--", 1800, "core i7");
// {name: "laptop", price: 1800, descripition: "core i7"},
const mg = new manager_1.Manager();
mg.createClient(new client_1.Client("Rodrigo", 12345678, 18041994));
const c = mg.getClientList(0);
c.addToFavorite(p);
c.addToFavorite(p2);
c.addToFavorite(p3);
// remover está funcionando....
// c.removeToFavorite(p2)
console.log(c.getClient());
console.log(mg.checkProduct(pc));
