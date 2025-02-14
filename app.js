/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = []; //lista para guardar nombres

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value;
    if (validarNombre(nombre)) {
        const nombreCapitalizado = capitalizarInicial(nombre)
        amigos.push(nombreCapitalizado);      // Agregamos el nombre a la lista  
        input.value = "";         // limpiamos el campo de entrada  
        console.log(amigos)       
        mostrarListaAmigos();
    } else {
        input.value = "";         // limpiamos el campo de entrada
    }
}

function validarNombre(nombre) {
    // Convertimos a minusculas y eliminamos espacios
    const nombreModelo = nombre.trim().toLowerCase();
    
    
    // Verificamos que el campo de entrada no este vacio
    if (nombreModelo === "") {
        alert("Por favor, inserte un nombre")
        return false;
    }

    // Verificamos nombres validos, espacios y caracteres
    const nombreRegex = /^[a-zA-Z\s]+$/; 
    if (!nombreRegex.test(nombreModelo)) {
        alert("El nombre solo puede contener letras y espacios")
        return false;
    }
    // Verificamos nombres repetidos
    if (amigos.some(amigo => amigo.toLowerCase() === nombreModelo)) {
         alert("Nombre repetido, agregue un nombre distintos a la lista")
         return false;
    }
    return true;
}

function capitalizarInicial(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1)
}

function crearElemLista(nombreAmigo) {
    //Creamos un nuevo elemento <li> 
    const nuevoElemLi = document.createElement("li") 
    nuevoElemLi.textContent = nombreAmigo // Asignamos nombre como texto al <li>
    return nuevoElemLi;
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtengo lista de amigos
    lista.innerHTML = ""; // Limpio lista de amigos
    

    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i]; // Obtener amigo actual
        const nuevoElemento = crearElemLista(nombreAmigo) // Creo elemento nuevo        
        lista.appendChild(nuevoElemento); // Agrego elemento li a la lista ul        
    }
}

// funcion para sortear amigos
//  KISS!!!

function sortearAmigo() {    

        const listaSorteo = amigos
        const nroAleatorio = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[nroAleatorio]

        listaSorteo.splice(nroAleatorio, 1); // Eliminamos al ya soretado
        
        const mostrarAmigoSecreto = document.getElementById("resultado")
        if (amigoSecreto != undefined && amigoSecreto.length > 0) {
            mostrarAmigoSecreto.innerHTML = `Tu amigo secreto sera: ${amigoSecreto}`
            console.log(listaSorteo)
        }     else {
            reiniciar() // Si no hay mas amigos para sortear reinicio el juego
        }    
     
     

}

function iniciarSorteo() {
     // Compruebo que la lista no este vacia. Si no esta vacia realizo el sorteo
     if (amigos.length === 0) {
        alert("Lista vacia, no hay amigos para sortear!")
        return false
    } 
    // Compruebo que almenos haya 2 amigos para realizar el sorteo, si es verdadero realizo el sorteo
    if (amigos.length < 2) {
        alert('Se necesitan minimo 2 amigos para realizar el sorteo!')
        return true
    } else {
        sortearAmigo()
    }
}

function reiniciar() {
    const mostrarAmigoSecreto = document.getElementById("resultado")
        mostrarAmigoSecreto.innerHTML = ""
        const lista = document.getElementById("listaAmigos"); 
        lista.innerHTML = ""    

}





