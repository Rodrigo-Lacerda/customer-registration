import { DbProducts } from "./dbProducts";
import { Product } from "./product";

export class Check {
    constructor(){}

    public productExist(product: Product): Product {
        let newProd: Product = new Product("", 0, "")
        DbProducts.filter((prod) => {
            if(prod.name === product.getName()) {
                newProd.setName(prod.name)
                newProd.setPrice(prod.price)
                newProd.setDescripition(prod.descripition);     
            }
            
        })
     
        return newProd
    }

}


