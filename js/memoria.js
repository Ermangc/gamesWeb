// games variables
let tarjetaDestapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let resultado1 = null;
let resultado2 = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRestante = null;

// elementos

let mostrarMovimientos = document.getElementById("movimientos");
let mostarAciertos = document.getElementById("aciertos");
let mostarTiempo = document.getElementById("tiempo");
let refresh = document.getElementById('refresh');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros = numeros.sort(() => {return Math.random()-0.5});
console.log(numeros);



function contarTiempo(){
    tiempoRestante = setInterval(() => {
        timer--;
        mostarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer==0){
            alert("se acabo el tiempo");
            clearInterval(tiempoRestante);
            bloquearTarjeta();
        }

    }, 1000)
}

function bloquearTarjeta(){
    for (i = 0, i <= 15; i++;){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}



function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetaDestapada++;

    if(tarjetaDestapada == 1){
        tarjeta1 = document.getElementById(id);
        resultado1 = numeros[id];
        tarjeta1.innerHTML = resultado1;
        tarjeta1.disabled = true;
    }else if (tarjetaDestapada == 2){
        tarjeta2 = document.getElementById(id);
        resultado2 = numeros[id];
        tarjeta2.innerHTML = resultado2;
        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(resultado1 == resultado2){
            tarjetaDestapada = 0;
            aciertos++;
            mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            
            if(aciertos==8){
                mostarAciertos.innerHTML = `Aciertos: Felicitaciones!!!`; 
                alert("Felicitaciones, lo has conseguido!")
            }

        }else(
            setTimeout(() => {
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaDestapada = 0;
            }, 500)
        )
    }

}

refresh.addEventListener('click', () => {
    location.reload();
})