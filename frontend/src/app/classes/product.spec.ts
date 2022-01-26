import { Product } from './product';

describe('Product', () => {
  it('should create an instance with data', () => {
    const product = new Product(
      1,
      'product1',
      'description1',
      'https://picsum.photos/300/300',
      ['https://picsum.photos/300/300'],
      1000,
      100
    );

    expect(product).toBeTruthy();
    expect(product.id).toBe(1);
    expect(product.name).toBe('product1');
    expect(product.description).toBe('description1');
    expect(product.defaultImage).toBe('https://picsum.photos/300/300');
    expect(product.images).toEqual(['https://picsum.photos/300/300']);
    expect(product.price).toBe(1000);
    expect(product.discount).toBe(100);
    expect(product.finalPrice).toBe(900);
  });
});
