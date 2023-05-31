const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio(`tunes/a.wav`); //por defecto, el audio src es "a" melodia

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // pasar audio src basado en la tecla presionada
    audio.play(); // reproducion el audio 

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // hacer clic en el elemento clave 
    clickedKey.classList.add("active"); // agregar clase activa al elemento clave en el que se hizo clic
    setTimeout(() => { // eliminar la clase activa despues de 150 ms del elemento clave en el que e hizo clic
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // agragar el valor de la clabe de datos a la matriz allkeys
    // llamado al la funcion playtune pasado el valor de la clave de datos como argumento 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // pasado el valor del control deslizate del rango como volumen de audio
}

const showHideKeys = () => {
    // alternar ocultar la clase de cada tecla en la casilla de verificacion hacer clic 
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // si la tecla presionada esta en la matriz allkeys, solo se llame la funcion playtune 
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);