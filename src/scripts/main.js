'use strict';

const page = document.documentElement;
const switcher = document.querySelector('.theme__switcher');

switcher.addEventListener('click', (a,b,c) => {
  if (page.classList.contains('page--theme--blue')) {
    page.classList.remove('page--theme--blue');
  } else {
    page.classList.add('page--theme--blue');
  }
});

