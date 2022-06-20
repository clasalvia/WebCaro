
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
    let i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }


  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//SECCION PINTURA//

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



//SECCION COUNTDOWN

// Set the date we're counting down to
let fechaFinal = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get todays date and time
  let fechaActual = new Date("Jan 1, 2024 15:37:25").getTime();

  // Find the distance between now an the count down date
  let distancia = fechaFinal - fechaActual;

  // Time calculations for days, hours, minutes and seconds
  let dia = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let hora = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuto = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundo = Math.floor((distancia % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("timer").innerHTML = dia + "d " + hora + "h "
  + minuto + "m " + segundo + "s ";

  // If the count down is finished, write some text
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("timer").innerText = "EXPIRADO";
  }
}, 1000); 