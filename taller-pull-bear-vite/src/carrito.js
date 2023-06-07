const carrito = document.getElementById('carrito');
const elemento1 = document.getElementById('card','content','img-container','image-popup');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBton = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners(){

elemento1.addEventListener('click', comprarElemento);
carrito.addEventListener('click',eliminarElemento);
vaciarCarritoBton.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e){
e.preventDefault();

if(e.target.classList.contains('btn-add-to-cart')){
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
   
}
}


function leerDatosElemento(elemento){
    const infoElemento = {
        
    }
}

