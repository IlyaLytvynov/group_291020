import { getRandomNumber } from './other';
import './utils.scss';
export const getRandomColor = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; // arrow function
