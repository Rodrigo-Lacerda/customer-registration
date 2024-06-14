import { Client } from "./client";
import { Manager } from "./manager";
import { Product } from "./product";


const r1 = new Client(1234, "Rodrigo", 30);
const r2 = new Client(1234, "Lucas", 20);
const m1 = new Manager(r1);
const p = new Product("copo", 10, "copo de vidro");
const pc = new Product("placa de video", 600, "amd rx580 8Gb");
const pd = new Product("teclado", 100, "teclado mecanico");
const pf = new Product("copo2", 15, "copo de vidro 2");

m1.createClient(r1);
m1.createClient(r2);

m1.order(p);

m1.addProductToKart(pc);
m1.addProductToKart(p);
m1.addProductToKart(pf);

m1.addProductToFavorite(pd, 0);
m1.addProductToFavorite(p, 0);
m1.addProductToFavorite(pf, 0);
m1.addProductToFavorite(pc, 0);

m1.removeToFavorite(0, pf);

// console.log(m1.getListOfFavoriteProducts(0))
// console.log(m1.getProductsToKart())

m1.finalizeOrder(40);
console.log(m1.cusultOrder())

