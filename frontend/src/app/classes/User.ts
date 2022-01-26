export class User {
  constructor(
    private _id: number,
    public name: {
      firstName: string;
      lastName: string;
    },
    public phone: string,
    public avatar: string,
    public email: string,
    public address: {
      country: string;
      city: string;
      zip: string;
      street: string;
    },
    private _role: 'ADMIN' | 'CUSTOMER'
  ) {}

  get id() {
    return this._id;
  }

  get fullName () {
    return `${this.name.firstName} ${this.name.lastName}`
  }

  get role() {
    return this._role;
  }
}
