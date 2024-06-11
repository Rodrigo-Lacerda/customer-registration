import { Client } from "./client"
import * as dbFakeProducts from "./dbProducts";
import { Product } from "./product";


export class Manager {
    private clientList: Client[] = []
    private kartList: Product[] = []

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

    public addProductToFavorite(product: Product, index: number): void {
        console.log(this.clientList[index].addToFavorite(product))
    }

    public removeToFavorite(index: number): void {

    }

    public getListOfFavoriteProducts(index: number): void {
        this.clientList[index].getFavoriteProducts()
    }

    public addProductToKart(newProduct: Product): void {
        this.kartList.push(newProduct)
    }

    public getProductsToKart(): void {
        this.kartList.forEach((c) => {
            console.log(c)
        })
    }
}

const r1 = new Client(1234, "Rodrigo", 30)
const r2 = new Client(1234, "Lucas", 20)
const m1 = new Manager(r1)
const p = new Product("copo", 10, "copo de vidro")
const pf = new Product("copo2", 15, "copo de vidro 2")
const pc = new Product("placa de video", 600, "amd rx580 8Gb");
m1.createClient(r1)
m1.createClient(r2)
m1.order(p)
m1.addProductToKart(pc)
m1.addProductToKart(p)
m1.addProductToKart(pf)
console.log(m1.addProductToFavorite(pf, 0))
console.log(m1.getClientList())
console.log(m1.getListOfFavoriteProducts(0))
console.log(m1.getProductsToKart())
