/**
 * @param {HTMLElement} root
 * @param {string} color
 * @param {number} size
 * @param {number} time
 */
export const createLamp = (root, color = 'red', size = 50, time = 2000) => {
  const button = document.createElement('button');
  let isEnabled = false;
  let defaultColor = 'grey';

  let intervalId;

  const toggle = () => {
    if (isEnabled) {
      button.style.backgroundColor = defaultColor;
      isEnabled = false;
    } else {
      button.style.backgroundColor = color;
      isEnabled = true;
    }
  };
  button.style.borderRadius = '50%';
  button.style.borderColor = 'black';
  button.style.backgroundColor = defaultColor;
  button.style.width = `${size}px`;
  button.style.height = `${size}px`;

  button.addEventListener('click', toggle);

  intervalId = setInterval(() => {
    toggle();
  }, time);
  root.append(button);
};
