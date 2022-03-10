let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
 event.preventDefault()
 console.log("hizo click")
let empanadas=document.getElementById("empanada").value
console.log (empanadas)
let nombre = document.getElementById("Nombre").value
console.log (nombre)

}
