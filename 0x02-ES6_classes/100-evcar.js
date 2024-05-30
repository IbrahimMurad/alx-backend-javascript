import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // this code could fit in one line, but I expand it to be more readable and understandable
    const thisClass = Object.getPrototypeOf(this);
    const parentClass = Object.getPrototypeOf(thisClass);
    return new parentClass.constructor();
  }
}
