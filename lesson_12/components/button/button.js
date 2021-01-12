const BTN_TYPES = {
  SUCCESS: 'success',
  DANGER: 'danger',
  WARN: 'warn',
};

const createElement = (
  tagName = 'button',
  title = '!EMPTY!',
  type = BTN_TYPES['SUCCESS']
) => {
  const btn = document.createElement(tagName);
  btn.classList.add('btn');
  btn.classList.add(`btn_${type}`);
  btn.textContent = title;
  return btn;
};

const createButton = (
  root,
  title = '!EMPTY!',
  type = BTN_TYPES['SUCCESS'],
  onClickHandler = () => console.log('PROVIDE CB FN')
) => {
  const el = createElement('button', title, type);
  el.addEventListener('click', onClickHandler);
  root.appendChild(el);
};

const createLink = (root, title = '!EMPTY!', type = 'success', href = '#') => {
  const el = createElement('a', title, type);
  el.setAttribute('href', href);
  root.appendChild(el);
};

export { createButton, BTN_TYPES, createLink };
