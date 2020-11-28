// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;


const singleProductInit = async () => {
  const urlId = window.location.search;
  // const urlId = "?id=hello";
  let url = `${singleProductUrl}${urlId}`;
  try {
    const response = await fetch(url)
    if( response.status >= 200 && response.status <= 299){
      const product = await response.json()
      // Grap Data 
      console.log(product);
      const {id,fields} = product;
      productID = id;
      const {company,name,price,colors,desc} = fields;
      const image = fields.image[0].thumbnails.large.url;
      // Set Values 
      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`
      imgDOM.src = image;
      titleDOM.textContent = `${name}`;
      companyDOM.textContent = `By ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = desc;
      colors.forEach(color => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
        
      });
    }else{
      centerDOM.innerHTML = `<div>
            <h3 class="error">Sorry something went wrong</h3>
            <a href="index.html" class="btn">Back to home</a>
      </div>`
    }
    
  } catch (err) {
    console.log(err);
  }

  loading.style.display= 'none';
}
// show product when page loads
window.addEventListener('DOMContentLoaded', singleProductInit);

cartBtn.addEventListener('click', function(){
  addToCart(productID);
})




