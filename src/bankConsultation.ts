import { DbProducts } from "./dbProducts";
import { Product } from "./product";

export class Check {
    constructor(){}

    public productExist(product: Product): void {
        let newProd;
        DbProducts.filter((prod) => {
            if(prod.name === product.getName()) {
                newProd = prod;
            }
        })

        return newProd
    }

}


