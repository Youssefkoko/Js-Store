import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');


toggleNav.addEventListener('click', function(){
  sidebarOverlay.classList.add('show');
})
closeBtn.addEventListener('click', function(){
  sidebarOverlay.classList.remove('show');
})