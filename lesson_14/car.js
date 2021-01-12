class Car {
  constructor(root, color, speed, fuel) {
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
    this.intrervalId = null;
    this.root = root;
    this.render();
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.style.width = '20px';
    this.domElement.style.height = '20px';
    this.domElement.style.backgroundColor = this.color;
    this.domElement.style.left = `0px`;
    this.domElement.style.position = `absolute`;

    this.root.append(this.domElement);
  }

  move() {
    this.intrervalId = setInterval(() => {
      if (this.fuel > 0) {
        const currentLeft = parseInt(this.domElement.style.left);
        console.log(currentLeft);
        this.domElement.style.left = `${currentLeft + 10}px`;
        this.fuel--;
      } else {
        console.log('Fuel empty');
        clearInterval(this.intrervalId);
      }
    }, this.speed);
  }

  stop() {
    clearInterval(this.intrervalId);
    console.log('Car stopped!');
  }

  setFuel(fuelCount) {
    this.fuel = fuelCount;
  }
}

export { Car };
