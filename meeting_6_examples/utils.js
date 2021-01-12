export const getRandomNumber = (minValue = 0, maxValue = 256) => {
  const randomNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber;
};
export const getRandomColor = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; // arrow function
