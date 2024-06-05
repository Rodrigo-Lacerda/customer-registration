import { Client } from "./client"
import * as dbFakeProducts from "./dbProducts";
import { Product } from "./product";


export class Manager {
    private clientList: Client[] = []

    constructor(
        private client: Client,
    ){}

    public createClient(newClient: Client): void {
        this.clientList.push(newClient);
    }

    public getClientList(): void {
        this.clientList.forEach((c) => {
            console.log(c);
        })
    }

    public order(newOrder: Product): void {
        this.client.shoppingCart(newOrder)
    }

    // Pegar o cliente na lista e mostrar o carinho de compra dele.
    public addProductToFavorite(product: Product, index: number): void {
        console.log(this.clientList[index].addToFavorite(product))
    }

    public getListOfFavoriteProducts(index: number): void {
        this.clientList[index].getFavoriteProducts()
    }

}

const r1 = new Client(1234, "Rodrigo", 30)
const r2 = new Client(1234, "Lucas", 20)
const m1 = new Manager(r1)
const p = new Product("copo", 10, "copo de vidro")
const pf = new Product("copo2", 15, "copo de vidro 2")
m1.createClient(r1)
m1.createClient(r2)
m1.order(p)
console.log(m1.addProductToFavorite(pf, 0))
console.log(m1.getClientList())
console.log(m1.getListOfFavoriteProducts(0))
