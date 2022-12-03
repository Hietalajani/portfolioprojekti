'use strict';

const shape1 = document.querySelector('.shape:nth-child(1)');
const shape2 = document.querySelector('.shape:nth-child(2)');
const shape3 = document.querySelector('.shape:nth-child(3)');
const shape4 = document.querySelector('.shape:nth-child(4)');
const shape5 = document.querySelector('.shape:nth-child(5)');
const shape6 = document.querySelector('.shape:nth-child(6)');
const shape7 = document.querySelector('.shape:nth-child(7)');

const config = [
  {'data-configuration': 1, 'data-roundness': 1},
  {'data-configuration': 1, 'data-roundness': 2},
  {'data-configuration': 1, 'data-roundness': 4},
  {'data-configuration': 2, 'data-roundness': 1},
  {'data-configuration': 2, 'data-roundness': 2},
  {'data-configuration': 3, 'data-roundness': 3},
];

let arr = [];
let intervalID;

function uniquerand() {
  let rand = Math.floor(Math.random() * 5 + 1);
  while (rand === arr[arr.length - 1]) {
    rand = Math.floor(Math.random() * 5 + 1);
  }
  arr.push(rand);
  return rand;
}

intervalID = setInterval(() => {

  let rand = uniquerand();

  document.querySelector('#wrapper').
      setAttribute('data-configuration',
          `${config[rand]['data-configuration']}`);
  document.querySelector('#wrapper').
      setAttribute('data-roundness', `${config[rand]['data-roundness']}`);

}, 3000);

const wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('mouseenter', () => {
  clearInterval(intervalID);
});


wrapper.addEventListener(('mouseleave'), () => {
  intervalID = setInterval(() => {

    let rand = uniquerand();

    document.querySelector('#wrapper').
        setAttribute('data-configuration',
            `${config[rand]['data-configuration']}`);
    document.querySelector('#wrapper').
        setAttribute('data-roundness', `${config[rand]['data-roundness']}`);

  }, 3000);
});