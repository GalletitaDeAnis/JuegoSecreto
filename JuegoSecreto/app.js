let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

CondicionesInciales();

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        //Removemos el atributo Disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento('p','El numero secreto es menor');
        } else {
            AsignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return numeroDeUsuario;
}

function LimpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//esta funcion es interesante por la recursividad.
function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento('p','Ya se sortearon todos los Numeros Posibles');
    }else{
       //Si el numero Generado esta incluido en la lista hacemos una operacion.
       if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Recursividad la funcion se llama asi misma.
            return GenerarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function CondicionesInciales() {
    AsignarTextoElemento('h1','Juego del Numero Secreto!');
    AsignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function ReiniciarJuego() {
    //limpiar caja
    LimpiarCaja();
    //indicar mensaje de intervalo de numeros
    //inicializar el numero de intentos
    //generar el numero aleatorio
    CondicionesInciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}
