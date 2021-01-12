class Driver {
  /**
   *
   * @param {Car} car
   */
  constructor(car) {
    this.car = car;
  }

  drive() {
    console.log("Take a car, let's go!");
    this.car.move();
  }

  stop() {
    console.log("Let's stop!");
    this.car.stop();
  }

  fillFuel() {
    this.car.setFuel(20);
  }
}

export { Driver };
