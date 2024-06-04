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
}

const r1 = new Client(1234, "Rodrigo", 30)
const r2 = new Client(1234, "Lucas", 20)
const m1 = new Manager(r1)
const p = new Product("copo", 10, "copo de vidro")
m1.createClient(r1)
m1.createClient(r2)
m1.order(p)
console.log(m1.getClientList())
