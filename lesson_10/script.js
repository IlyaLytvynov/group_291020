function getRandomNumber(maxValue = 256) {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber;
}
const getRandomColor = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; // arrow function

const coolBtn = document.querySelector('#randomColor');
const openModalBtn = document.querySelector('#modalOpenBtn');
const modal = document.querySelector('#greetModal');
const modalClose = document.querySelector('#modalClose');
const clickHandler = () => {
  coolBtn.style.backgroundColor = getRandomColor();
  coolBtn.classList.add('active');
  coolBtn.textContent = getRandomNumber(999);
};

const openModal = () => {
  modal.classList.add('active');
};

const closeModal = () => {
  modal.classList.remove('active');
};

coolBtn.addEventListener('click', clickHandler); // callback function!!
openModalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

function reverseWords(str) {
  return str.split(' ').revrese().join(' '); // reverse those words
}
