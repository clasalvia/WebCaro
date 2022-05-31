console.log("hola")
DocumentFragment.getElementById("nombreIngresado").value= 
localSrotage.getItem("nameuser")
localStorage.setItem("daraGenerica",123)

function guardarDatas(){
    let valueIngresado=document.getElementById("nombreIngresado)").value
    console.log(valueIngresado)
    
    localStorage.setItem("nameUser",valueIngresado)
}
function borrarData(){
    localStorage.clear()
}
function borrarUnDato(){
    localStorage.removeItem("nameUser")
}

let profesor ={ //object
    nombre: "esteban",
    edad: 29,
    trabajando: true,
}

let alumnos=[{nombre: "manu", estado:"feliz", notaFinal:"10",}, 
{nombre: "manu", estado:"feliz", notaFinal:"10",},
{nombre: "manu", estado:"feliz", notaFinal:"10",}
]
profesroJSON= JSON.stringify(profesor)
console.log(profesor)
console.log(profesor.nombre)
alumnosJSON= JSON.stringify(alumnos)
console.log(alumnos)
console.log(alumnos[0])