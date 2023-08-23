'use strict';

// Variables for: Nav menu button section
const menuButton = document.querySelector('.menu');
const targetElements = document.querySelectorAll('.target');
const storedMenuVisible = localStorage.getItem('menuVisible');

// Variables for: Icons change loop section
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

// Variables for: Light-Dark button
const bodyLD = document.querySelector('body');
const buttonLD = document.querySelector('.buttonLD');
const iconLD = document.querySelector('.buttonLD__icon');

/////////////////////////////////////////////////////////////
// Nav menu button
menuButton.addEventListener('click', function () {
  targetElements.forEach(function (item) {
    // drop down menu and hide
    item.classList.toggle('change');
  });

  // Store the visibility state in local storage
  const isMenuVisible = targetElements[0].classList.contains('change');
  localStorage.setItem('menuVisible', isMenuVisible);
});

/////////////////////////////////////////////////////////////
// Load menu visibility state from local storage

if (storedMenuVisible === 'true') {
  targetElements.forEach(function (item) {
    item.classList.add('change');
  });
}

/////////////////////////////////////////////////////////////
// Section 1 icons change loop

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
    // if the dark mode is activated
    bodyLD.classList.add('darkmode');
    iconLD.classList.add('fa-moon');
  } else if (darkmode == 'false') {
    // if the dark mode exists but is disabled
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

//////////////////////////////////////////////////////////////
// Contact form - Send mesage
document.addEventListener('DOMContentLoaded', function () {
  const sendButton = document.getElementById('sendButton');
  const successMessage = document.getElementById('successMessage');
  const sendEmailSuccess = document.getElementById('successMessage');
  const messageForm = document.getElementById('messageForm');

  // Guard clause, skip error message 'sendButton is null'
  if (sendButton === null) return;

  sendButton.addEventListener('click', function (e) {
    // add code here to send the message to a server or perform any desired action
    e.preventDefault();

    setTimeout(function () {
      showSuccessMessage();
    }, 1000);
  });

  const showSuccessMessage = function () {
    successMessage.classList.remove('hidden');
    sendEmailSuccess.classList.remove('hidden');
    messageForm.reset();
    setTimeout(function () {
      hideSuccessMessage();
    }, 3000);
  };

  const hideSuccessMessage = function () {
    successMessage.classList.add('hidden');
  };
});
/////////////////////////////////////////////////////////////
