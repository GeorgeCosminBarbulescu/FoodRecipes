'use strict';

/////////////////////////////////////////////////////////////
// Nav menu button
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelectorAll('.target').forEach(function (item) {
    // drop down menu and hide
    item.classList.toggle('change');
  });
});

/////////////////////////////////////////////////////////////
// Section 1 icons change loop
const icons = document.querySelectorAll('.section-1-icons i');

let i = 1;

setInterval(function () {
  i++;
  const icon = document.querySelector('.section-1-icons .change');
  icon.classList.remove('change');

  // update icons with 'change' class
  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);

/////////////////////////////////////////////////////////////
// Light-Dark button

const bodyLD = document.querySelector('body');
const buttonLD = document.querySelector('.buttonLD');
const iconLD = document.querySelector('.buttonLD__icon');

//to save the dark mode use the object "local storage" by creating a function that stores the value true if the dark mode is activated or false if it's not.
const storeLocal = function (value) {
  localStorage.setItem('darkmode', value);
};

const loadFromLocal = function () {
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if (!darkmode) {
    // if darkmode is not activated
    storeLocal(false);
    iconLD.classList.add('fa-sun');
  } else if (darkmode == 'true') {
    //if the dark mode is activated
    bodyLD.classList.add('darkmode');
    iconLD.classList.add('fa-moon');
  } else if (darkmode == 'false') {
    //if the dark mode exists but is disabled
    iconLD.classList.add('fa-sun');
  }
};

loadFromLocal();

buttonLD.addEventListener('click', function () {
  bodyLD.classList.toggle('darkmode');
  // add optional animation for LD mode btn
  iconLD.classList.add('animated');

  storeLocal(bodyLD.classList.contains('darkmode'));

  if (bodyLD.classList.contains('darkmode')) {
    iconLD.classList.remove('fa-sun');
    iconLD.classList.add('fa-moon');
  } else {
    iconLD.classList.remove('fa-moon');
    iconLD.classList.add('fa-sun');
  }

  setTimeout(function () {
    iconLD.classList.remove('animated');
  }, 500);
});

/////////////////////////////////////////////////////////////
