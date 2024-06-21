import { Manager } from "./manager";
import { Client } from "./client";
import { Product } from "./product";

const p = new Product("Copo", 10, "Copo verde...")
const p2 = new Product("Copo-2", 10, "Copo vermelho...")
const p3 = new Product("Copo-3", 10, "Copo azul...")
const pc = new Product("laptop", 1800, "core i7")
const pc2 = new Product("placa de video", 600, "amd rx580 8Gb");
// {name: "laptop", price: 1800, descripition: "core i7"},
// {name: "placa de video", price: 600, descripition: "amd rx580 8Gb"}


const mg = new Manager()
mg.createClient(new Client("Rodrigo", 12345678, 18041994));

const c = mg.getClientList(0)

c.addToFavorite(p)
c.addToFavorite(p2)
c.addToFavorite(p3)


// remover está funcionando....
// c.removeToFavorite(p2)

// console.log(c.getClient())

// console.log(mg.checkProduct(pc))
mg.order(pc)
mg.order(pc2)
mg.order(pc)
mg.order(pc2)

// Finalizar o pedido e salvar no banco
mg.finalizedOrder()

mg.checkOrders("d4ba2740-2fcf-11ef-9a01-f75f4a17728d");


