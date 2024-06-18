export class Product {
    constructor(
        private name: string,
        private price: number,
        private descripition: string
    ){}

    public getName(): String {
        return this.name
    }
}