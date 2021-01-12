class Cart {
  constructor(root) {
    this.items = [];
    this.root = root;
    this.renderCount();
  }

  renderCount() {
    this.counter = document.createElement('h2');
    this.updateCounter();
    this.root.append(this.counter);
  }

  updateCounter() {
    this.counter.textContent = this.items.length;
  }

  addItem(item) {
    this.items.push(item);
    this.updateCounter();
    console.log(this.items);
  }
}

export { Cart };
