// 002
/**
 * Tomar el input del ejercicio anterior y hacer que 
 * cambie sus bordes de color y de ancho cuando 
 * hacemos foco(focus, hacemos click en el recuadro) en el, 
 * y que esos mismos bordes y color vuelvan al 
 * estado anterior cuando sacamos el foco (blur).
 */
const enterFocus = event =>{
    const input = document.querySelector("input");
    input.classList.add("focused");
};

const removeFocus = event =>{
    const input = document.querySelector("input");
    input.classList.remove("focused");
}

const loadEvents = () =>{
    const input = document.querySelector("input");
    input.addEventListener("focus", enterFocus);
    input.addEventListener("blur", removeFocus);
}

