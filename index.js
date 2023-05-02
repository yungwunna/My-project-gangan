const $carousel = $(".carousel");
const $carouselWrapper = $carousel.find(".carousel-wrapper");
const $slides = $carousel.find(".slide");
const $prevButton = $carousel.find(".prev");
const $nextButton = $carousel.find(".next");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = $slides.eq(0).outerWidth();
  const offset = -index * slideWidth;
  $carouselWrapper.css("transform", `translateX(${offset}px)`);
  currentIndex = index;
  console.log("slidewidth: " + slideWidth);
  console.log("offset: " + offset);
}

$prevButton.on("click", () => {
  const newIndex = Math.max(currentIndex - 1, 0);
  showSlide(newIndex);
  console.log("previndex: " + newIndex);
});

$nextButton.on("click", () => {
  const newIndex = Math.min(currentIndex + 1, $slides.length - 1);
  showSlide(newIndex);
  console.log("nextindex: " + newIndex);
});

