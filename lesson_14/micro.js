class Microphone {
  constructor(color, power) {
    this.color = color;
    this.power = power;
  }

  record() {
    console.log('Sound recorded');
  }
}

export { Microphone };
