export class Client {
    constructor(
        private readonly rg: number,
        private readonly name: string,
        private readonly age: number,
        private points: number
    ){}

    public getPoints(): number {
        return this.points
    }

}

