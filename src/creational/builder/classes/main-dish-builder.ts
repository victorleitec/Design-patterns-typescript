import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './composite-meal';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Pepsi', 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Ice cream', 10);
    this._meal.add(dessert);
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Rice', 5);
    const beans = new Beans('Beans', 10);
    const meat = new Meat('Meat', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
