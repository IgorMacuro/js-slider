const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");

numberOfSlides = mainSlide.querySelectorAll("div").length;

sidebar.style.top = `-${100 * (numberOfSlides - 1)}vh`;

let activeSlideIndex = 0;
let oldScrollValue = 0;
let newScrollValue = 0;

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === numberOfSlides) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = numberOfSlides - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

btnUp.addEventListener("click", () => {
  changeSlide("up");
});
btnDown.addEventListener("click", () => {
  changeSlide("down");
});

window.addEventListener("wheel", () => {
  newScrollValue = window.pageYOffset;
  if (oldScrollValue < newScrollValue) {
    changeSlide("up");
  } else {
    changeSlide("down");
  }
  oldScrollValue = newScrollValue;
});
