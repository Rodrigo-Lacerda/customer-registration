import { Client } from "./client";
import { Product } from "./product";
import { v1 } from "uuid";


export class Manager {
    private clientList: Client[] = []
    private kartList: Product[] = []
    private completedOrders: any[] = []

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
        let productsInKart: string[] = []
        let value: number = discount
        let idv1 = v1()
        let index = 1

        console.log(`ID do pedido: ${idv1}`)
        this.completedOrders.push({ID  : idv1})

        this.kartList.forEach((product) => {
            amount += product.price
            productsInKart.push(product.name)
            this.completedOrders.push(product)
        })
        if(value > 0 ) {
            amount -= (value*amount) / 100
        }
    
        productsInKart.forEach((p) => {
            console.log(`***** ${index}: ${p}`)
            index++
        })

        this.completedOrders.push({value : amount})
        console.log(`Valor Total do pedido R$${amount} Reais.`)

    }

    public cusultOrder(): String[] {
        return this.completedOrders
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

