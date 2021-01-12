const list = (root, options = []) => {
  const listContainer = document.createElement('div');
  const toggleButton = document.createElement('button');
  const ul = document.createElement('ul');
  listContainer.classList.add('select');
  toggleButton.classList.add('select__toggle');
  ul.classList.add('select__list');

  for (let i = 0; i < options.length; i++) {
    const li = document.createElement('li');
    li.addEventListener('click', () => {
      toggleButton.textContent = options[i];
      listContainer.classList.remove('active');
    });
    li.textContent = options[i];
    li.classList.add('list__item');
    ul.appendChild(li);
  }
  toggleButton.addEventListener('click', () => {
    listContainer.classList.add('active');
  });
  toggleButton.textContent = 'Open..';
  listContainer.append(toggleButton);
  listContainer.append(ul);
  root.appendChild(listContainer);
};

export { list };
