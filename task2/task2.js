let slideNumber = 1;
let maxSlides = 4;

function prevSlide() {}

function nextSlide() {
  slideNumber += 1;
  if (slideNumber > maxSlides) {
    slideNumber = 1;
  }
  document.getElementById("output").src =
    "./images/img" + slideNumber + ".jpeg";
}
