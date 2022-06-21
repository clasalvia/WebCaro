//esta es la segunda opcion. redireccionarlo a otro documento que es JS//

console.log("soy externo")

// Para acceder a un ID
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)
//Para acceder a un Class
let parrafo2 = document.getElementsByClassName("pConClass")
console.log(parrafo2)
//Para acceder a una etiqueta. Notar que en este caso se accede
//a todas las p
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

// {}

//Cambiar texto con un boton parte JS
function cambiarTitular() {
let titular1 = document.getElementById("titular")
titular1.innerText = "mas tortas"
}

//Hacer aparecer un texto con un boton
function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = "<h2>Que torta preferis?</h2> <p>limon o manzana?</p>"
    contenedor.className = "titularSecundario" //esto cambia en los elementos nomas, no se ve un cambio en la pagina web
    let texto = "tambien vamos a agregar este texto"
    contenedor.append(texto) //esto evita crear cosas de cero, y instead las suma

}

//react crea el html desde un arhivo JS

function borrarPais(){
    let paises = document.getElementsByClassName("paises")
    paises[0].remove()
}

function sumar(valor){
    parseInt(valor) + 1
    return valor
} 

function oracionNueva(){
let formulario1 = document.getElementById("formulario")
let nombreUsuario = document.getElementById("nombre").value 
let edadUsuario = document.getElementById("edad").value
let variable = 1
let texto1 = "Mi nombre es " + nombreUsuario + " y tengo " + edadUsuario + " años. "
formulario1.append(texto1)
let chequeado = document.getElementById("bases").checked
if(chequeado != true){
    alert("Debe estar de acuerdo con las bases y condiciones")
}

//if(variable = 1){
    //variable = variable + 1
    //formulario1.append(texto1)
    //} esto no salio por alguna razon se sigue repitiendo

//ECMASCRIPT 6
//template literal
//back trik `
document.body.append(`El nombre es ${nombreUsuario} y va a cumplir
${sumar(edadUsuario)} `) //esto tambien funciona, al igual que lo anterior
}

//query = consulta

let parrafos = document.querySelectorAll("p")
let seleccionarUno = document.querySelector("#titular")
let seleccionarClase = document.querySelectorAll(".paises")
console.log(parrafos)
console.log(seleccionarUno)
console.log(seleccionarClase)


// este es un ejercicio que dio esteban en clase y esta es la respuesta
// es una suma de todo lo que vine haciendo arriba

function registarse(stirng){
    return "te registraste exitosamente"
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    if(edadUsuario <= 17){
        alert ("Estas violando los terminos y condiciones")
    }
    if(edadUsuario>=18 && chequeado == true){
        document.body.append(` El nombre de usuario es ${nombreUsuario}, tenes ${edadUsuario} y ${registarse(edadUsuario)}`)
    }
}