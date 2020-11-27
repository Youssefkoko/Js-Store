import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value')
//  sETUP FILTER 
  let maxPrice = store.map((product)=> {
    return product.price;
  })
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  console.log( maxPrice );
  priceInput.addEventListener('input', function(){
    let value = parseInt( priceInput.value);
    priceValue.textContent = `The value: €${value}`;
    let newStore = store.filter((product)=> {
      return product.price / 100 <= value;
    })
    display(newStore, getElement('.products-container'));
    if(newStore.length < 1){
      getElement('.products-container').innerHTML = `<h3 class="filter-error">No Product Match your price.</h3>`
    }
    
  })
};

export default setupPrice;
