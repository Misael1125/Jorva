let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Perfumes Jorva,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}

else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Perfumes Jorva,' + nombreAlmacenado;
}

miBoton.addEventListener('click',()=>{
    estableceNombreUsuario();
})

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Perfumes Jorva, ' + miNombre;
    }
  }

