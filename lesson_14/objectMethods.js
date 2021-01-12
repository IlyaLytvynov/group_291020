import { Cart } from './cart.js';
import { ProductList } from './productList.js';

const body = document.querySelector('body');
const cart = new Cart(body);
const productList = new ProductList(body, cart);
productList.fetchData();
