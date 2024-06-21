import { Product } from "./product"

export class Bank {
    private requests: any[] = []
    constructor(){}

    public saveRequest(request: {}): void {
        this.requests.push(request)
        console.log(this.requests)
    }

    public checkRequest(id: string): void {
        let p: any[] = []
        this.requests.filter((order) => {
            if(order[0] === id) {
                p.push(order)
            }
        })
        
        console.log(p)
    }

}
