import { Client } from "./client";
import { Check } from "./bankConsultation";
import { Product } from "./product";

export class Manager {
    private clientList: Client[] = []
    private kartList: Product[] = []
    constructor(){}

    public createClient(newClient: Client): void {
        this.clientList.push(newClient);
    }

    public getClientList(index: number): Client {
        return this.clientList[index]
    }

    public checkProduct(product: Product): void {
        let check = new Check()
        console.log(check.productExist(product))
    }
}
