//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element;
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
  const formattedPrice  = new Intl.NumberFormat('nl-NL', 
  { 
    style: 'currency', 
    currency: 'EUR'
   }).format((price /100).toFixed(2));

  return formattedPrice;

}

const getStorageItem = (key) => {
  let storageItem = localStorage.getItem(key);
  if(storageItem){
    storageItem = JSON.parse(localStorage.getItem(key));
  }else{
    storageItem = [];
  }
  return storageItem;
}
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
