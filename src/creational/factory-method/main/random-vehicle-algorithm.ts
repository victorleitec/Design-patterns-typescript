import { Vehicle } from '../vehicle/vehicle';
import { CarFactory } from '../factories/car-factory';
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Bettle');
  const car2 = carFactory.getVehicle('Porsche');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const vehicles = [car1, car2, bicycle];
  return vehicles[randomNumbers(vehicles.length)];
}
