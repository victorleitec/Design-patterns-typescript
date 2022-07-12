import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
