// elementos 
let dibujo = document.getElementById("dibujo");
let palabra = document.getElementById("palabra");
let letras = document.getElementById("letras");
let start = document.getElementById("start");

// palabras para adivinar
const words = ["carne", "salame", "mate", "salchicha"];

//variables
let palabraSelecionada;
let aciertos;
let errores;


const letterInput = letra => {
    if (palabraSelecionada.includes(letra)) {
        letraCorrecta();
    }else{
        letraIncorrecta();
    }
    agregarLetra();
    letras.push(letra);
}


const eventoLetra = event => {
    let newLetra = event.key.toUpperCase();
    if (newLetra.Math(/^[a-zñ]$/i) && !letras.includes(newLetra)){
        letterInput(newLetra);
    }
}

const drawWord = () => {
    palabraSelecionada.forEach(letra => {
        const letraElement = document.createElement("span");
        letraElement.innerHTML = letra.toUpperCase();
        palabra.appendChild(letraElement);
    });
}

const selecionarPalabra = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    palabraSelecionada = word.split('');
}


const startGame = () => {
    selecionarPalabra();
    drawWord();
    start.style.display = "none";
    aciertos = 0;
    letras.innerHTML = `Palabras Incorrectas: ${letras}`
    document.addEventListener("keydown", eventoLetra);
}

start.addEventListener("click",startGame);