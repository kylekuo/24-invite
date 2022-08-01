import * as doc from './LoadEvents.js';

[
  {
    name: '--cntr',
    syntax: '<number>',
    inherits: false,
    initialValue: 0, 
  },
  {
    name: '--slnt',
    syntax: '<number>',
    inherits: false,
    initialValue: 0, 
  },
  {
    name: '--wght',
    syntax: '<number>',
    inherits: false,
    initialValue: 100, 
  },
  {
    name: '--wdth',
    syntax: '<number>',
    inherits: false,
    initialValue: 100,
  },
].forEach(prop => { 
  if (window.CSS.registerProperty) 
    window.CSS.registerProperty(prop); 
});

const html = document.querySelector('html');
let age;

doc.ready().then(() => {

  html.classList.add('ready');
  age = document.querySelector('#age');

  const ageNumber = '24',
        colors = [
          '--kk-red',
          '--kk-yellow',
          '--kk-green',
          '--kk-cyan',
          '--kk-blue',
          '--kk-pink'
        ];

  for (const [index, color] of colors.entries()) {
    const layer = document.createElement('div');
    layer.classList.add('layer');
    layer.style.setProperty('--color', `var(${color})`);
    layer.style.setProperty('--index', index);
    layer.innerText = ageNumber;
    age.insertAdjacentElement('beforeend', layer);
  }

});

doc.loaded().then(() => {
  html.classList.add('loaded');
  age.classList.add('animate');
});