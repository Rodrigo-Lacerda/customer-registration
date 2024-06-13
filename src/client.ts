import { Product } from "./product";

export class Client {
    constructor(
        private readonly rg: number,
        private readonly name: string,
        private readonly age: number,
        private points: number = 0,

        private requestList: Product[] = [],
        private favoriteList: Product[] = [],
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

    public addToFavorite(newProduct: Product): void {
        this.favoriteList.push(newProduct)
    }

    public removeFavorite(product: Product): void {
        let newList = this.favoriteList.filter((prodName) => prodName.name !== product.name)
        
        if(this.favoriteList.length !== 0) {
            this.favoriteList = []
        }
        this.favoriteList = newList
    }

    public getFavoriteProducts(): void {
        this.favoriteList.forEach((pf) => {
            console.log(pf)
        })
    }

}

