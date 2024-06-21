export class Product {
    constructor(
        private name: string,
        private price: number,
        private descripition: string
    ){}

    public getName(): String {
        return this.name
    }

    public getPrice(): number {
        return this.price
    }

    setName(newName: string): void {
        this.name = newName
    }

    setPrice(newPrice: number): void {
        this.price = newPrice
    }

    setDescripition(newDecripition: string): void {
        this.descripition = newDecripition
    }
}