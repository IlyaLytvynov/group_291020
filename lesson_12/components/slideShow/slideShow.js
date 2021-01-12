const createSlideShow = (root, interval = 2000) => {
  const slideShow = root;
  const slides = root.querySelectorAll('.slide-show__slide');
  const [prevBtn, nextBtn] = root.querySelectorAll('.slide-show__control');
  let intervalId;
  let activeSlideIndex = 0;
  const showSlide = () => {
    slides[activeSlideIndex].classList.add('active');
  };
  const hideSlide = () => {
    slides[activeSlideIndex].classList.remove('active');
  };

  const decreaseIndex = () => {
    if (activeSlideIndex - 1 < 0) {
      activeSlideIndex = slides.length - 1;
    } else {
      activeSlideIndex -= 1;
    }
    console.log(activeSlideIndex);
  };

  const increaseIndex = () => {
    if (activeSlideIndex + 1 < slides.length) {
      activeSlideIndex += 1;
    } else {
      activeSlideIndex = 0;
    }
    console.log(activeSlideIndex);
  };

  const showPrev = () => {
    hideSlide();
    decreaseIndex();
    showSlide();
  };

  const showNext = () => {
    hideSlide();
    increaseIndex();
    showSlide();
  };

  const startSlideshow = () => {
    intervalId = setInterval(showNext, interval);
  };

  const stopSlideshow = () => {
    clearInterval(intervalId);
  };

  showSlide();
  startSlideshow();

  slideShow.addEventListener('mouseenter', () => {
    stopSlideshow();
  });

  slideShow.addEventListener('mouseleave', () => {
    startSlideshow();
  });
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
};

export { createSlideShow };
