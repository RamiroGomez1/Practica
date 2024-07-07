const boton1 = document.getElementById("boton1");
const desplegable1 = document.getElementById('desplegable1');

const boton2 = document.getElementById("boton2");
const desplegable2 = document.getElementById('desplegable2');

const boton3 = document.getElementById("boton3");
const desplegable3 = document.getElementById('desplegable3');

const boton4 = document.getElementById("boton4");
const desplegable4 = document.getElementById('desplegable4');


boton1.addEventListener("click", () => {
    desplegable1.classList.toggle("hidden")
});

boton2.addEventListener("click", () => {
    desplegable2.classList.toggle("hidden")
});

boton3.addEventListener("click", () => {
    desplegable3.classList.toggle("hidden")
});

boton4.addEventListener("click", () => {
    desplegable4.classList.toggle("hidden")
});

