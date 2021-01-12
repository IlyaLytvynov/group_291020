import './other.scss';

export const getRandomNumber = (maxValue = 256) => {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber;
};
