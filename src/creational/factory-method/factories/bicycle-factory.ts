import { VehicleFactory } from './vehicle-factory';
import { Bicycle } from '../vehicle/bicycle';
import { Vehicle } from '../vehicle/vehicle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
