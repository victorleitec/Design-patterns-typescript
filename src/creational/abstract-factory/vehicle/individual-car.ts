import { Vehicle } from './vehicle';
import { Customer } from '../customer/customer';

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} is going to ${this.customer.name} (INDIVIDUAL)`);
  }
}
