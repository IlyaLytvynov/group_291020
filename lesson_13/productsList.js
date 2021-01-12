import { createProduct } from './product.js';

const createProductList = (root, products) => {
  const container = document.createElement('div');
  container.classList.add('grid');

  let productsHtmlStrings = '';
  products.forEach((product) => {
    const html = createProduct(product);
    productsHtmlStrings += html;
  });
  container.insertAdjacentHTML('beforeend', productsHtmlStrings);
  root.append(container);
};

export { createProductList };
