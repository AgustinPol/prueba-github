//primero llamas al elemento que queres escuchar
let boton = document.getElementById("my-button");
//Segundo escuchas al evento
boton.addEventListener("click", saludar);

//Aca declaramos la funcion
function saludar() {
    console.log("hola");
}

document.title = "Probando javascript";