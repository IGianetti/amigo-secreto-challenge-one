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
    console.log(amigos)
    mostrarAmigos();

}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos"); // obtengo lista
    lista.innerHTML = ""; // limpio lista

    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i]; // obtener amigos actual
        const nuevoElemento = document.createElement("li") //crear elemento li nuevo
        nuevoElemento.textContent = nombreAmigo //asignar nombre como texto al elemento li
        lista.appendChild(nuevoElemento); // agregar elemento li a la lista ul
        
    }
}
