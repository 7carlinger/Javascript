/*1. Hacer una función que guarde una persona
*    en una lista de listas de datos de personas.
*    Es decir, una lista con varias listas adentro.
*    Deberia guardar por cada persona, una lista de datos
*    que incluyan el nombre completo, la edad y 
*    la dirección de email.
* 1b. Al ingresar nueva persona, validar que no 
*     exista en la lista. Si existe, tirar
*     un error. (Usar funcion distinta para validar
*     y llamar dentro de la funcion de guardar persona).
* 2. Hacer una función que me devuelva la lista
*    completa de personas.

*/

const lista = [["carla", "18", "carla@mail.com"],
["romina", "40", "romina@mail.com"],
["pedro", "30", "pedro@mail.com"]]

let nombre = prompt("Porfavor ingrese un nombre:");
let edad = prompt("Porfavor ingrese un edad:");
let mail = prompt("Porfavor ingrese un mail:");

const guardarPers = (nombre, edad, mail) => {
    validar(nombre);
    lista.push([nombre, edad, mail]);
};

const validar = (nombre) => {
    const buscar = lista.find(persona => {
        return persona[0] === nombre;
    });
    if (buscar) {
        throw new Error("Esa persona ya existe");
    }
}


guardarPers(nombre, edad, mail);
console.log(lista);
