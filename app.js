//testimonial slide

let myslideIndex = 1;
showSlides(myslideIndex);

function activeSlide(n) {
  showSlides(myslideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonials");
  let dot = document.getElementsByClassName("dots");
  if (n > slides.length) {myslideIndex = 1}    
  if (n < 1) {myslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[myslideIndex-1].style.display = "block";  
  dot[myslideIndex-1].className += " active";
}

//hamburger menu

const burger = document.querySelector(".burger");
const nav_links = document.querySelector(".navlinks");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav_links.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    burger.classList.remove("active");
    nav_links.classList.remove("active");
}))
