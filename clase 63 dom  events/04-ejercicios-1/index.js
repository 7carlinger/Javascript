// 001 
/**
 * Crear un TODO list (ul li), que tenga
 * 1. un input para agregar nuevos TODO
 * 2. Este input debe tener un button (type="button") para poder
 *    agregar el TODO desde el input 
 * 3. un button por cada TODO de la lista
 *  para borrar el mismo. (event.target y parentElement)
 * 4. Un checkbox, antes del texto de cada TODO,
 *  que me permita tachar el elemento de la lista
 *  como resuelto. (texto puede ir en span)
 */
const addTodo = () => {
    const tarea = document.querySelector("input").value;
    const span = document.createElement("span"); 
    const li = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    const deletebutton = document.createElement("button");
    const textDeleteButton = document.createTextNode("eliminar");
    if (tarea === "") throw new Error ('No ingresaste ninguna tarea');
    span.innerText = tarea;

     
    document.querySelector("input").value = "";//pone vacio el input
    
    li.appendChild(deletebutton);
    li.appendChild(checkbox);
    li.appendChild(span);
    deletebutton.appendChild(textDeleteButton);
    
    document.querySelector("ul").appendChild(li);  

    const deleteTodo = (e) => {
        e.target.parentElement.remove();
    }

    deletebutton.addEventListener("click", (e) => deleteTodo(e));
};



const load = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", addTodo);
    

    
};