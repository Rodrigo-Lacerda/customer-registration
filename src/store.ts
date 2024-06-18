import { Manager } from "./manager";
import { Client } from "./client";
import { Product } from "./product";

const p = new Product("Copo", 10, "Copo verde...")
const p2 = new Product("Copo-2", 10, "Copo vermelho...")
const p3 = new Product("Copo-3", 10, "Copo azul...")
const pc = new Product("laptop", 1800, "core i7")
// {name: "laptop", price: 1800, descripition: "core i7"},


const mg = new Manager()
mg.createClient(new Client("Rodrigo", 12345678, 18041994));

const c = mg.getClientList(0)

c.addToFavorite(p)
c.addToFavorite(p2)
c.addToFavorite(p3)


// remover está funcionando....
// c.removeToFavorite(p2)

console.log(c.getClient())

console.log(mg.checkProduct(pc))

