const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')
const menu2 = document.querySelector('#menu2')
const menu3 = document.querySelector('#menu3')

boton.addEventListener('click', () => {
    console.log('click');
    menu.classList.toggle('hidden');
    menu2.classList.toggle('hidden');
    menu3.classList.toggle('hidden');
    // toggle me permite agregar esa clase al elemento seleccionado en caso de no existir, o eliminarlo en caso de que ya exista  */
})