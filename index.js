'use strict';
let i = 0;
let images = [];

const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
const slider = document.querySelector('.sliderContainer');
const img = document.getElementById('slide');

document.querySelector('#wildlife').addEventListener('click', (evt) => {
  evt.preventDefault();
  images[0] = 'images/Näyttökuva (66).png';
  images[1] = 'images/Näyttökuva (67).png';
  images[2] = 'images/Näyttökuva (59).png';
  images[3] = 'images/Näyttökuva (60).png';
  images[4] = 'images/Näyttökuva (61).png';
  images[5] = 'images/Näyttökuva (62).png';
  images[6] = 'images/Näyttökuva (63).png';
  images[7] = 'images/Näyttökuva (64).png';
  images[8] = 'images/Näyttökuva (65).png';
  images[9] = 'images/Näyttökuva (68).png';
  images[10] = 'images/Näyttökuva (69).png';

  img.src = images[i];

  document.getElementById('imgHolder').style.width = '70%';

  slider.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

});
document.querySelector('#languageQuiz').addEventListener('click', (evt) => {
  evt.preventDefault();
  images[0] = 'images/Screenshot_20210126-225929.png';
  images[1] = 'images/Screenshot_20210126-225941.png';
  images[2] = 'images/Screenshot_20210126-225949.png';
  images[3] = 'images/Screenshot_20210126-225956.png';
  images[4] = 'images/Screenshot_20210126-230012.png';
  images[5] = 'images/Screenshot_20210126-230018.png';
  images[6] = 'images/Screenshot_20210126-230100.png';
  images[7] = 'images/Screenshot_20210126-230116.png';
  images[8] = 'images/Screenshot_20210126-230124.png';

  document.getElementById('imgHolder').setAttribute('style', 'width: 300px !important');

  img.src = images[i];

  slider.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

});

const changeImgBack = () => {

  if (i >= 1 && i <= images.length - 1) {
    i--;

  } else {
    i = images.length - 1;

  }
  img.src = images[i];
};
const changeImgFront = () => {

  if (i < images.length - 1) {
    i++;

  } else {
    i = 0;
  }

  img.src = images[i];
};

arrowLeft.addEventListener('click', changeImgBack);
arrowRight.addEventListener('click', changeImgFront);

document.querySelector('.exit').addEventListener('click', (evt) => {
  evt.preventDefault();
  slider.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';

  images = [];
});