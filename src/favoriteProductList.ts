import { Product } from "./product";

export class FavoriteProductList {
    private products: Product[] = []

    constructor(
    ){}

    public addProductToList(newProduct: Product): void {
        this.products.push(newProduct);
    }

    public getProductList(): void {
        this.products.forEach((product) => {
            console.log(product)
        })

    }
}

// const p1 = new Product("caneta", 1.00, "caneta preta")
// const pl = new ProductList()
// pl.addProductToList(p1)
// pl.getProductList()