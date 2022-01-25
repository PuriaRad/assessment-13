import { Cart } from './cart';
import { Product } from './product';

describe('Cart', () => {
  it('should create an instance with data', () => {
    const product1 = new Product(
      1,
      'product1',
      'description1',
      'https://picsum.photos/300/300',
      ['https://picsum.photos/300/300'],
      1000,
      100
    );
    const product2 = new Product(
      2,
      'product2',
      'description2',
      'https://picsum.photos/300/300',
      ['https://picsum.photos/300/300'],
      1200,
      200
    );
    const cart = new Cart(1, [
      { product: product1, quantity: 2 },
      { product: product2, quantity: 3 },
    ]);

    expect(cart).toBeTruthy();
    expect(cart.id).toBe(1);

    expect(cart.productOrders[0].product.id).toBe(1);
    expect(cart.productOrders[0].product.name).toBe('product1');
    expect(cart.productOrders[0].product.description).toBe('description1');
    expect(cart.productOrders[0].product.defaultImage).toBe('https://picsum.photos/300/300');
    expect(cart.productOrders[0].product.images).toEqual(['https://picsum.photos/300/300']);
    expect(cart.productOrders[0].product.price).toBe(1000);
    expect(cart.productOrders[0].product.discount).toBe(100);
    expect(cart.productOrders[0].product.finalPrice).toBe(900);

    expect(cart.productOrders[1].product.id).toBe(2);
    expect(cart.productOrders[1].product.name).toBe('product2');
    expect(cart.productOrders[1].product.description).toBe('description2');
    expect(cart.productOrders[1].product.defaultImage).toBe('https://picsum.photos/300/300');
    expect(cart.productOrders[1].product.images).toEqual(['https://picsum.photos/300/300']);
    expect(cart.productOrders[1].product.price).toBe(1200);
    expect(cart.productOrders[1].product.discount).toBe(200);
    expect(cart.productOrders[1].product.finalPrice).toBe(1000);

    expect(cart.sumDiscount).toBe(800);
    expect(cart.sumPrice).toBe(5600);
    expect(cart.sumFinalPrice).toBe(4800);
    expect(cart.sumQuantity).toBe(5);
  });
});
