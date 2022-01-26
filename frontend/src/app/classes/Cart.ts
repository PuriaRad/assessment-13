import { Product } from './product';

export class Cart {
  constructor(
    private _id: number,
    public productOrders: {
      product: Product;
      quantity: number;
    }[]
  ) {}

  get id() {
    return this._id;
  }

  get sumDiscount() {
    return this.productOrders
      .map((productOrder) => productOrder.product.discount * productOrder.quantity)
      .reduce((p, c) => p + c, 0);
  }

  get sumPrice() {
    return this.productOrders
      .map((productOrder) => productOrder.product.price * productOrder.quantity)
      .reduce((p, c) => p + c, 0);
  }

  get sumQuantity() {
    return this.productOrders.map((productOrder) => productOrder.quantity).reduce((p, c) => p + c, 0);
  }

  get sumFinalPrice() {
    return this.productOrders
      .map((productOrder) => productOrder.product.finalPrice * productOrder.quantity)
      .reduce((p, c) => p + c, 0);
  }
}
