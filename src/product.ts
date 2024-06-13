export class Product {
    constructor(
        public name: string,
        public readonly price: number,
        private descripition: string
    ){}
}