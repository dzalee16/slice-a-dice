const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".carousel-next");
const prev = document.querySelector(".carousel-prev");
const radioButtons = document.querySelectorAll(".carousel-radio input");

const handleNextSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next slide
  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const handlePrevSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next slide
  if (current.previousElementSibling) {
    //add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

radioButtons.forEach((elem, radioIndex) => {
  elem.addEventListener("click", (e) => {
    if (e.target.checked === true) {
      //give the class current to the slide that have same index as radio btn
      slides[radioIndex].classList.add("current");
      //loop over the slides
      slides.forEach((e, index) => {
        //every slides that don't have same index as a radio button remove class current
        if (index !== radioIndex) {
          e.classList.remove("current");
        }
      });
    }
  });
});

next.addEventListener("click", handleNextSlide);
prev.addEventListener("click", handlePrevSlide);
