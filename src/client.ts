export class Client {
    constructor(
        private rg: number,
        private name: string,
        private age: number,
        private points: number
    ){}

    public getPoints(): number {
        return this.points
    }

}

