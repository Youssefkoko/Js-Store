import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (products) => {
  let companies = ['All', ...new Set(products.map(product => product.company))]
  
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies.map((company) => {
    
  return `<button class="company-btn">${company}</button>`
  }).join('');
  companiesDOM.addEventListener('click', function(e){
    const target = e.target;
    if(target.classList.contains('company-btn')){
      let newStore = [];
      if(target.textContent === 'all'){
        newStore = [...Products];
      }else{
        newStore = products.filter((product) => {
        
          return product.company === target.textContent 
        });
      }
      display(newStore, getElement('.products-container'));
    }

  })
};

export default setupCompanies;
