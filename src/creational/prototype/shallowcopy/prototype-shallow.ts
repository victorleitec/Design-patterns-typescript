interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    return Object.create(this);
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const newAddress = new Address('Av Brasil', 15);
const person1 = new Person('Fulano', 30);
person1.addAddress(newAddress);
const person2 = person1.clone();

person1.addresses[0].street = 'Change street';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);
