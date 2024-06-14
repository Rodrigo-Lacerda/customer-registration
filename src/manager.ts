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
        this.clientList.forEach((c) => {
            if(c.isActive() !== true) {
                throw new Error(`User blocked...`)                
            }
            this.client.shoppingCart(newOrder)
        })

    }

    public finalizeOrder(discount: number = 0): void {
        let amount: number = 0
        let prods: string[] = []
        let value: number = discount

        this.kartList.forEach((product) => {
            amount += product.price
            prods.push(product.name)
        })

        if(value > 0 ) {
            amount -= (value*amount) / 100
        }

        console.log(`Valor Total do pedido ${amount}, com desconto: ${(value*amount) / 100}`)
    }

    public addProductToFavorite(product: Product, index: number): void {
        console.log(this.clientList[index].addToFavorite(product))
    }

    public removeToFavorite(index: number, product: Product): void {
        this.clientList[index].removeFavorite(product)
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
const pc = new Product("placa de video", 600, "amd rx580 8Gb");
const pd = new Product("teclado", 100, "teclado mecanico")
const pf = new Product("copo2", 15, "copo de vidro 2")

m1.createClient(r1)
m1.createClient(r2)

m1.order(p)

m1.addProductToKart(pc)
m1.addProductToKart(p)
m1.addProductToKart(pf)

m1.addProductToFavorite(pd, 0)
m1.addProductToFavorite(p, 0)
m1.addProductToFavorite(pf, 0)
m1.addProductToFavorite(pc, 0)

m1.removeToFavorite(0, pf)

// console.log(m1.getListOfFavoriteProducts(0))
console.log(m1.getProductsToKart())

console.log(m1.finalizeOrder(40))
