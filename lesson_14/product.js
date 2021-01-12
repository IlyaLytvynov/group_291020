class Product {
  constructor(root, data, cart) {
    this.root = root;
    this.data = data;
    this.cart = cart;
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('product-card');
    this.domElement.id = this.data.id;

    const { media, title, price } = this.data;
    const template = `
      <figure class='product-card__pic'>
        <img class='product-card__img' src='${media[0].fullUrl}' alt='' />
        <button href='#' class='product-card__quick-view'>
          Quick view
        </button>
      </figure>
      <h2 class='product-card__title'>${title}</h2>
      <div class='product-card__price'>${price} USD</div>
      <button class='product-card__add-to-cart-btn'>Add to cart</button>
    `;

    this.domElement.innerHTML = template;
    const btn = this.domElement.querySelector('.product-card__add-to-cart-btn');
    btn.addEventListener('click', () => {
      this.cart.addItem(this.data);
    });
    this.root.append(this.domElement);
  }
}

export { Product };
