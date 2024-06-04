import { Product } from "./product";

export class Client {
    constructor(
        private readonly rg: number,
        private readonly name: string,
        private readonly age: number,
        private points: number = 0,

        private requestList: Product[] = []
    ){}

    public getPoints(): number {
        return this.points
    }

    public shoppingCart(newRequest: Product): void {
        this.requestList.push(newRequest)
    }

    public getMyRequests(): void {
        this.requestList.forEach((p) => {
            console.log(p)
        })
    }

}

