import { Product } from "./product"

export class Client {
  private favoriteProducts: Product[] = [];
  private myRequests: Product[] = [];
  private active: boolean = true;

  constructor(
    private readonly name: String,
    private readonly document: number,
    private readonly dateOfBirth: number,
    private points: number = 0
  ) {}

  public getClient(): Client {
    return this;
  }

  public addToFavorite(product: Product): void {
    this.favoriteProducts.push(product)
  }

  public removeToFavorite(product: Product): void {
    let newList: Product[] = []
    this.favoriteProducts.filter((prod) => {
      if(prod !== product) {
        newList.push(prod)
      }
    })
    this.favoriteProducts = []
    this.favoriteProducts = newList
  }

  public isActive(isActive: boolean): void {
    this.active = isActive
  }

  public getActive(): boolean {
    return this.active
  }

  public addPoints(): void {
    this.points += 100;
  }

  public getPoints(): number {
    return this.points
  }
}