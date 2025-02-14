/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = []; //listq para guardar nombres

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value;
    
    // verificar que no este vacio
    if (nombre.trim() === "") {
        alert("Por Favor ingrese un nombre")
        return;
    }

    // verificar nombres validos y/o caracteres
    const nombreRegex = /^[a-zA-Z\s]+$/; // expresion regular para letras y espacios
    if (!nombreRegex.test(nombre)) {
        alert("el nombre solo puede contener letras y espacios")
    }
    // verificar nombres repetidos
    if (amigos.includes(nombre)) {
         alert("el nombre ya existe")
         return;
    }

    amigos.push(nombre); //agregamos el nombre a la lista
    input.value = ""; // limpiar campo de entrada
}
