import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (products) => {
  const form = getElement('.input-form');
  const valueInput = getElement('.search-input');
  form.addEventListener('keyup', function(){
    const value = valueInput.value;
    if(value){
      const productsFilterred = products.filter((product) => {
        let {name} = product;
        name = name.toLowerCase();
        if(name.startsWith(value)){
          return product;
        }
      });
     
      display(productsFilterred, getElement('.products-container') );
      if(productsFilterred.length <= 0){
        getElement('.products-container').innerHTML = `<h3 class="filter-error">No Product Match.</h3>`
        
      }
    }else{
      display(products, getElement('.products-container') );
    }
  })
};

export default setupSearch;
