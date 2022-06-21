//SECCION COUNTDOWN

const $dias = document.getElementById("dias"),
  $horas = document.getElementById("horas"),
  $minutos = document.getElementById("minutos"),
  $segundos = document.getElementById("segundos"),
  $mensajeFinal = document.querySelector(".mensaje-final");
$container = document.querySelector(".container");

//Fecha fututo
const fechaFuturo = new Date("Jul 30, 2022 12:00:00").getTime();

let intervalo = setInterval(function () {
  //Fecha Actual
  const fechaActual = new Date().getTime();

  //Distancia entre las 2 fechas
  let distancia = fechaFuturo - fechaActual;

  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  //Resultados
  $dias.innerHTML = dias;
  $horas.innerHTML = horas;
  $minutos.innerHTML = minutos;
  $segundos.innerHTML = ("0" + segundos).slice(-2);

  //Cuando termine el Countdown
  if (distancia < 0) {
    clearInterval(intervalo);
    $mensajeFinal.style.transform = "translateY(0)";
    $container.style.transform = "translateY(-100%)";
  }
}, 1000);
