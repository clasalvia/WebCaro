//SECCION CLASES
// Se esconden los elementos con class="containerTab", excepto por el que coincide con la que se clikea
function openTab(tabName) {
  let i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

//SECCION BOTON SCROLL TO THE TOP
//Boton
mybutton = document.getElementById("myBtn");

// Cuando se baja 20px desde el top, se muestra el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Cuando se clickea en el boton, 'scroll' hasta arriba del documento
function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE y Opera
}
