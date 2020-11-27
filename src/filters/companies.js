import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (products) => {
  let companies = ['All', ...new Set(products.map(product => product.company))]
  console.log(companies);
};

export default setupCompanies;
