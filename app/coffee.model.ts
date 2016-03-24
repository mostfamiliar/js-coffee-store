export class Coffee {
  public checkCart: boolean = false;
  public brand: string
  public name: string
  public price: number
  public region: string
  public tastingNotes: string
  constructor(public coffeeArr: any[]){
    this.brand = coffeeArr[0];
    this.name = coffeeArr[1];
    this.price = coffeeArr[2];
    this.region = coffeeArr[3];
    this.tastingNotes = coffeeArr[4];
  }
}
