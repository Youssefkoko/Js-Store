// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total'); 
// set items
let cart = getStorageItem('cart');

export const addToCart = (id) => {
  const item = cart.find(item => item.id === id);
  if(!item){
    let product = findProduct(id);
    product = {...product, amount:0};
    cart = [...cart, product];
    // Add to the DOM 
    addToCartDOM(product);
        
  }else{

  }
  openCart();

};

const init = () =>{
  
}
init();