import { Client } from "./client";
import { Check } from "./bankConsultation";
import { Product } from "./product";
import { Bank } from "./dbStore";
import { v1 } from "uuid";

export class Manager {
    private clientList: Client[] = []
    private kartList: Product[] = []
    private bank = new Bank()
    constructor(){}

    public createClient(newClient: Client): void {
        this.clientList.push(newClient);
    }

    public getClientList(index: number): Client {
        return this.clientList[index]
    }

    public checkProduct(product: Product): Product {
        let check = new Check()
        return check.productExist(product)
    }

    public order(product: Product): void {
        this.kartList.push(this.checkProduct(product));
    }

    public finalizedOrder(discount: number = 0): void {
        let tot: number = 0
        let id: string = v1()
        let p: Product[]=[]
        let request= {
            ID: id,
            products: p,
            amount: 0,
        }

        console.log(`===== Pedido Finalizado ..... =====`)
        console.log(`ID do pedido ${id}`)
        this.kartList.forEach((prod) => {
            console.log(`*** ${prod.getName()}`)
            tot += prod.getPrice()
            request.products.push(prod)
            
        })

        console.log(`Valor total da compra R$${tot} Reais.`)
        request.amount = tot

        this.bank.saveRequest(request)

        console.log(request)
    }

    public checkOrders(id: string): void {
        // retornar um pedido por id
        this.bank.checkRequest(id)
    } 
}
