// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import {
  openCart
} from './toggleCart.js';
import {
  findProduct
} from '../store.js';
import addToCartDOM from './addToCartDOM.js';
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');
// set items
let cart = getStorageItem('cart');

export const addToCart = (id) => {
  const item = cart.find(item => item.id === id);
  if (!item) {
    let product = findProduct(id);
    product = {
      ...product,
      amount: 1
    };
    cart = [...cart, product];
    // Add to the DOM 
    addToCartDOM(product);

  } else {
    // update values 
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    let newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount

  }
  // Add one to the Item count 
  displayCatItemCount()
  // Display Cart totals 
  displayCartTotal()
  // Set Cart in the local Storage
  setStorageItem('cart', cart);
  // More stuff coming up 
  openCart();

};

function displayCatItemCount() {
  const amount = cart.reduce((total, acc) => {
    return total += acc.amount;
  }, 0)
  cartItemCountDOM.textContent = amount;
}

function displayCartItemsDOM() {
  cart.forEach(cartItem =>

    addToCartDOM(cartItem)
  );
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.map(cartItem => {
    newAmount = cartItem.amount + 1;
    if (cartItem.id === id) {
      cartItem = {
        ...cartItem,
        amount: newAmount
      }

    }
    return cartItem;
  })
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.map(cartItem => {
    newAmount = cartItem.amount - 1;
    if (cartItem.id === id) {
      cartItem = {
        ...cartItem,
        amount: newAmount
      }

    }
    return cartItem;
  })
  return newAmount;
}



function removeItem(id) {
  cart = cart.filter((item) => item.id !== id)
}

function setUpCartFuncionlity() {
  cartItemsDOM.addEventListener('click', function (e) {
    const elem = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = parent.dataset.id;
    // remove 
    if (elem.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      parent.parentElement.remove();
    }
    // increae 
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease 
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      }

      parent.previousElementSibling.textContent = newAmount;
    }
    displayCatItemCount()
    displayCartTotal()
    setStorageItem('cart', cart)
  })
}

function displayCartTotal() {
  let total = cart.reduce((total, acc) => {
    return total += acc.price * acc.amount
  }, 0)
  cartTotalDOM.textContent = formatPrice(total);
}
const init = () => {
  // displayamount of cart item 
  displayCatItemCount()
  // display Total 
  displayCartTotal()
  // Addl all carts to the dom 
  displayCartItemsDOM()
  // Set up cart functionality 
  setUpCartFuncionlity()
}
init();