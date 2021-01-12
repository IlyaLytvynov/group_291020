const toggleColor = (lights) => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].addEventListener('click', () => {
      lights[i].classList.toggle('active');
      for (let j = 0; j < lights.length; j++) {
        if (j != i) {
          lights[j].classList.remove('active');
        }
      }
    });
  }
};

export { toggleColor };
