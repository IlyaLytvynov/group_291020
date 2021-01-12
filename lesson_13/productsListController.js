import { createProductList } from './productsList.js';

const createGrid = (root = document.querySelector('body')) => {
  fetch('https://boring-fe.herokuapp.com/shop')
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createProductList(root, data.products);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { createGrid };
