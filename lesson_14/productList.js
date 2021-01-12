import { Product } from './product.js';

class ProductList {
  constructor(root, cart) {
    this.root = root;
    this.url = 'https://boring-fe.herokuapp.com/shop';
    this.cart = cart;
  }

  fetchData() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        this.products = data.products;
        this.render();
      });
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('grid');
    this.products.forEach((product) => {
      const gridChild = document.createElement('div');
      gridChild.classList.add('col-4', 'col-sm-6', 'col-xs-12');
      const productItem = new Product(gridChild, product, this.cart);
      productItem.render();
      this.domElement.append(gridChild);
    });
    this.root.append(this.domElement);
  }
}

export { ProductList };
