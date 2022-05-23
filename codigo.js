//Resolver problemas logicos o metematicos
//La programacion es una herramienta para resolver problemas
//pensamiento computacional - PASOS:
// primer etapa - descomponer el rpoblema
// segunda etapa - similitudes
// tercer etapa - abstraccion: achicar el problema, eliminar lo superfluo 
// cuarta etapa - algoritmos: pasos para resolver el problema

document.write("Tortas ejemplo")
console.log("esto se deberia ver unicamente en la consola y no en la pagina")

/*
Variables? Espacio en memoria donde se almacena un valor
Es como un cajon
Como armo una Variable?
let nombreDeLaVariable = "valor"
let nombre = "carolina"

las veriables se pueden modificar
let edad = 19
edad = edad + 1
ahora la veriable edad tiene el valor de 20

hay variables que no se pueden modificar porque son constantes 
y se escriben asi:
const NOMBREDELAVARIABLE

Tipos de datos:
numerico: enteros (integral) o con coma (float)
string: cadena de caracteres (con comillas)
boolean: verdadero o flaso

el signo de mas (+) sirve tanto para la suma como para la concatenacion (juntar strings)

Java Script tiene por convencion Camel Case (primerLetraMinusculaYElRestoEnMayuscula)
salvo las variables constantes que se escriben en MAYUSCULA
Python, por ejemplo, usa Snake Case (palabras_separadas_con_guion_bajo)


/* una funcion es un conjunto de iunstrucciones
 * declarar (crearlas)
 * invocar (utilizarlas)
 */

//CLASE DEL 10/05:

 //Funciones declaradas:
 function saludar(){ // declarando
    console.log("hola")
}

//function nombre() {instruccion}


//invocar
saludar()

//parametro: es un valor qur va a ingresar un usuario, comodin
function siguiente(numero){
    console.log(numero+1)
}
siguiente(1)
siguiente(10)

function saludarConParametro(nombre){
    console.log ("hola "+ nombre)
}

saludarConParametro("isa")


function sumarDos (numero1, numero2){
    let resultado=numero1 + numero2
    return resultado
}

function mostrar (visible){
    console.log(visible)
}

mostrar(sumarDos(1,2))
console.log(sumarDos(2,3)) //el console log no puede estar dentro de la funcion cuando la funcion esta haciendo otra cosa, lo tenes que poner por afuera


function calculadora (numero1, numero2, operacion){
    if(operacion === "+"){
        return numero1 + numero2
    }
    else if(operacion === "-"){
       return numero1 + numero2
   }
   else if(operacion === "*"){
       return numero1 + numero2
   }
   else if(operacion === "/"){
       if (numero2 !==0)
       return numero1 + numero2
       else{
           return " No se puede dividir por cero"
       }
   }
   else {
       return "Ingrese una operacion valida"
   }
}

mostrar(calculadora(1,2,"+"))
mostrar(calculadora(1,2,"-"))
mostrar(calculadora(1,2,"*"))
mostrar(calculadora(1,2,"/"))

//SCOPE ambito en el que habitan las variables
let variableNombre= "isa"//variable global

function nuevoAmbito(){
   let edad=19 //variable local
   let variableNueva
   return edad
}
function saludarALaVariable(){
    return "Hola " + variableNombre + " " + nuevoAmbito()
    let variableNueva;
}

mostrar(saludarALaVariable())

//funciones anonimas o funciones expresadas

let suma = function(a,b){
    return a + b
}

let resta = function(a,b){
   return a - b
}

mostrar(suma(1,2))
mostrar(resta(3,2))

// diferencia de declaradas vs expresadas

mostrar(duplicarDeclarada(4)) //con las declaradas no pasa nada puede ser antes o despues
// mostrar(duplicarExpresada(5))  va a dar error porque esta antes de la inicializacion

function duplicarDeclarada (numero){
   return nuemro*2
}

let duplicarExpresada = function (numero){
   return nuemro*2
}

mostrar(duplicarExpresada(5))


//funcion flecha
// si fuese normal: funcion multiplicar (a,b) {return a*b}

let multiplicar = (a,b)=> a*b // mas de 1 parametro--> va con parentesis
let siguienteFlecha = numero => numero+1
mostrar(multiplicar(2,2))
mostrar (siguienteFlecha(1))

// ejercicio: calcular costo total de productos y/o servicios seleccionados por el usuario
function calcularCostos (eleccion1, elccion2, eleccion3){
   let costoTotal;
   servicio1=1000
   servicio2=2000
   servicio3= 3000
if(eleccion1=="limpieza de cutis" || elccion2=="limpieza de cutis"|| eleccion3 == "limpieza de cutis") {
   costoTotal = cpstoTotal + servicio1;
   console.log(costoTotal)
}
if(eleccion1=="uñas esculpidas" || elccion2=="uñas esculpidas"|| eleccion3 == "uñas esculpidas") {
costoTotal = cpstoTotal + servicio2;
}
if(eleccion1=="semipermanente" || elccion2=="semipermanente"|| eleccion3 == "semipermanente") {
costoTotal = cpstoTotal + servicio3;
}

return costoTotal
}
mostrar(calcularCostos("limpieza de cutis", "uñas esculpidas", "semipermanente"))

//CLASE 17/05:

