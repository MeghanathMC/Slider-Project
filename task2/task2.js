let slideNumber = 1;
let maxSlides = 4;

function prevSlide() {
  slideNumber -= 1;
  if (slideNumber < 1) {
    slideNumber = maxSlides;
  }
  document.getElementById("output").src =
    "./images/img" + slideNumber + ".jpeg";
  output.classList.add("animate");
  setTimeout(()=>{
    output.classList.remove("animate");
  },2000);
  if(slideNumber===1){
    document.getElementById("left-arrow").setAttribute("disabled",true);
  }
  

  }



function nextSlide() {
  slideNumber += 1;
  if (slideNumber > maxSlides) {
    slideNumber = 1;
  }
  document.getElementById("output").src =
    "./images/img" + slideNumber + ".jpeg";
    output.classList.add("animate");
  setTimeout(()=>{
    output.classList.remove("animate");
  },2000);
  if(slideNumber===4){
    document.getElementById("right-arrow").setAttribute("disabled",true);
  }
  

}
