interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const newAddress = new Address('Av Brasil', 15);
const person1 = new Person('Fulano', 30);
person1.addAddress(newAddress);
const person2 = person1.clone();

person1.addresses[0].street = 'Changed street';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);

console.log();
console.log(person1);
console.log(person1.addresses);
