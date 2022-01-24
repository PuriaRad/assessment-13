import { User } from './user';

describe('User', () => {
  it('should create an instance with data', () => {
    const user = new User(
      1,
      { firstName: 'John', lastName: 'Snow' },
      '989354673046',
      'https://picsum.photos/300/300',
      'test@test.com',
      { country: 'Iran', city: 'Tehran', zip: '98', street: 'test' },
      'ADMIN'
    );

    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
    expect(user.name.firstName).toBe('John');
    expect(user.name.lastName).toBe('Snow');
    expect(user.phone).toBe('989354673046');
    expect(user.email).toBe('test@test.com');
    expect(user.address.country).toBe('Iran');
    expect(user.address.city).toBe('Tehran');
    expect(user.address.zip).toBe('98');
    expect(user.address.street).toBe('test');
    expect(user.role).toBe('ADMIN');
  });
});
