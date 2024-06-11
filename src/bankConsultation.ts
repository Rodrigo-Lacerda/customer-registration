import { DbProducts } from "./dbProducts"
import { Product } from "./product";

 
export class Cheking {
    constructor(){}


    // Verificar se o produto existe banco e retornar o produto.
    public productExist(product: Product): void {
        
        let s = DbProducts.filter(function( DbProducts: {
            name: string,
            price: number,
            descripition: string,
        }): boolean {
            return DbProducts.name === product.name;
        })

        if(s.length === 0) {
            console.log("Product not exist...")
        }

    }

}

const t = new Product("placa de video", 600, "amd rx580 8Gb")
const t2 = new Product("mouse", 50, "mouse sem fio")
const p = new Cheking()
p.productExist(t2)


