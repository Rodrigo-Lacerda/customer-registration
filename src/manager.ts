import { Client } from "./client"


export class Manager {
    private clientList: Client[] = []

    constructor(
        private client: Client,
    ){}

    public createClient(newClient: Client): void {
        this.clientList.push(newClient);
    }

    public getClientList(): void {
        this.clientList.forEach((c) => {
            console.log(c);
        })
    }
}

const r1 = new Client(1234, "Rodrigo", 30, 0)
const r2 = new Client(1234, "Lucas", 20, 0)
const m1 = new Manager(r1)
m1.createClient(r1)
m1.createClient(r2)
console.log(m1.getClientList())
