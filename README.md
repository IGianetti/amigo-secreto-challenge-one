# Sorteo de Amigo Secreto

Este proyecto implementa un sorteo de amigo secreto utilizando HTML, CSS y JavaScript. Permite a los usuarios agregar nombres a una lista, realizar el sorteo de forma aleatoria y mostrar el amigo secreto asignado.

## Características

- **Agregar Amigos:** Permite añadir nombres a la lista de participantes.
- **Validación de Nombres:** Asegura que los nombres ingresados sean válidos (solo letras y espacios) y que no estén repetidos.
- **Capitalización de Nombres:** Capitaliza la primera letra de cada nombre para una presentación más uniforme.
- **Sorteo Aleatorio:** Realiza el sorteo de forma aleatoria entre los participantes.
- **Visualización del Amigo Secreto:** Muestra el nombre del amigo secreto asignado.
- **Reinicio del Juego:** Permite reiniciar el juego, limpiando la lista de participantes y el resultado del sorteo.

## Cómo Jugar

1. **Añadir Participantes:**

   - Ingresa el nombre de un participante en el campo de texto.
   - Haz clic en el botón "Añadir".
   - El nombre se agregará a la lista si es válido.

2. **Iniciar el Sorteo:**

   - Asegúrate de que haya al menos dos participantes en la lista.
   - Haz clic en el botón "Sortear Amigo".
   - Se mostrará un mensaje indicando que la lista está vacía si no hay participantes.
   - Se mostrará un mensaje indicando que se necesitan al menos dos participantes si hay menos de dos.
   - Si hay suficientes participantes, se realizará el sorteo y se mostrará el amigo secreto asignado.

3. **Reiniciar el Juego:**
   - Una vez finalizado el sorteo (cuando no quedan más participantes), se reiniciará el juego automáticamente.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Estructura del Proyecto

- **index.html:** Archivo principal que contiene la estructura HTML y la interfaz del juego.
- **script.js:** Archivo JavaScript que contiene la lógica del juego, incluyendo las funciones para agregar participantes, validar nombres, realizar el sorteo y reiniciar el juego.
- **styles.css:** Archivo CSS (opcional) para dar estilo a la interfaz del juego.

## Funciones Principales

- **`agregarAmigo()`:** Añade un nombre a la lista de participantes después de validarlo.
- **`validarNombre()`:** Valida que el nombre ingresado cumpla con los requisitos (solo letras y espacios, no repetido).
- **`capitalizarInicial()`:** Capitaliza la primera letra de un nombre.
- **`crearElemLista()`:** Crea un elemento `<li>` para mostrar un nombre en la lista.
- **`mostrarListaAmigos()`:** Muestra la lista de participantes en la interfaz.
- **`sortearAmigo()`:** Realiza el sorteo y muestra el amigo secreto asignado.
- **`iniciarSorteo()`:** Inicia el sorteo, verificando que haya suficientes participantes.
- **`reiniciar()`:** Reinicia el juego, limpiando la lista de participantes y el resultado.

## Autor

[Ivan Gianetti]
