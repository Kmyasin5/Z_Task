// -------------dispay menu----------------

const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       nav.classList.toggle('show-menu')
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle', 'nav-menu')

// --------------Slider condtion

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("service-grid-container");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0} // Change this line    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "grid";  
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// --------------test-----------


let currentIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');

    if (index > slides.length - 1) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide) => {
        slide.style.display = 'flex';
    });

    slides[currentIndex].style.display = 'none';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentIndex);
});