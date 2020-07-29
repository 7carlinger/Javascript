//01
/**
 * Crear un input de tipo checkbox.
 * Escribir una funcion "toggleChecked" que 
 * cambie el estado de clickeado a sin 
 * clickear o viceversa.
 */

const toggleChecked = () => {
    const checkbox = document.querySelector("#checkbox");
    checkbox.checked = !checkbox.checked;

};  