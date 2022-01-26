export class Product {
  constructor(
    private _id: number,
    public name: string,
    public description: string,
    public defaultImage: string,
    public images: string[],
    public price: number,
    public discount: number
  ) {}

  get id() {
    return this._id;
  }

  get finalPrice() {
    return this.price - this.discount >= 0 ? this.price - this.discount : 0;
  }
}
