import { getRandomColor, getRandomNumber } from './utils.js';
import { createLamp } from './lamp.js';
/**
 *
 * @param {HTMLElement} root
 * @param {number} count
 */
export const christmasLights = (root, count = 20) => {
  const wrapper = document.createElement('div');
  for (let i = 0; i < count; i++) {
    createLamp(wrapper, getRandomColor(), 60, getRandomNumber(500, 5000));
  }

  root.append(wrapper);
};
