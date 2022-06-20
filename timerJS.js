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