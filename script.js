// Declaracion de variables
const objetivo = document.getElementById('objetivo');
const pantalla = document.getElementById('pantalla');
const textopuntos = document.getElementById('puntos');
const textovidas = document.getElementById('vidas');

// Contadores
let puntos = 0;
let vidas = 3;

// Definicion de la funcion de movimiento
function mover() {
    // Math.random() genera un número aleatorio
    const x = Math.floor(Math.random() * (pantalla.offsetWidth - 100));
    const y = Math.floor(Math.random() * (pantalla.offsetHeight - 100));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}

// Funcion de movimiento
function mover() {
    const x = Math.floor(Math.random() * (pantalla.offsetWidth - 100));
    const y = Math.floor(Math.random() * (pantalla.offsetHeight - 100));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}

// Bucle de tiempo
setInterval(mover, 1000);

//contdor de punto
objetivo.addEventListener('click', function(e){
    // Detener la progapación. Sin esto el click tambien dispararia el evetno del fondo (patnalla restando vidas)
    e.stopPropagation();
    //contador
    puntos = puntos + 1;
    //Actualizamos el nodo de texto en HTMl
    textopuntos.innerText = puntos; 
    // Llamamos ala funcion mover para que sse siga moviendo el objetivo
    // luego del clic
    mover();
});

// Contador de puntos
objetivo.addEventListener('click', function(e){
    e.stopPropagation(); // corregido

    puntos = puntos + 1;
    textopuntos.innerText = puntos;

    // mover inmediatamente después del click
    mover();
});

// COntador de vidas
pantalla.addEventListener('click', function(){
    //contador de resta
    vidas = vidas -1;
    // actualizamos el nodo de texto en html
    textovidas.innerText = vidas;

    // visual de daño
    pantalla.style.backgroundColor = "red";
    setTimeout(() => {
        pantalla.style.backgroundColor = "";
    }, 200);

    // condicional de cierre
    if(vidas <= 0) {
        alert("perdiste");
        location.reload(); //reinicio
    }
});