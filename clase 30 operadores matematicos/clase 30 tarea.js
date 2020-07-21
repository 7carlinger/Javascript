/* TAREA 1, solicitar un número y devolver como resultado si es par o impar*/

let number = prompt("hola humano! ingresa un número entero por favor");

let result = parImpar(number);

alert("El número "+ number +" es "+ result);

function parImpar(numero) {
    if((number % 2) === 0) {
      return "par!";
    }   else {
            return "impar!";
        }
}

/* TAREA 2: Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores. */

let name = prompt ("hola helado lover!, ingresa tu nombre, si quieres");

let qKilos = prompt ("Hola " + name + " cuántos gramos de helado quieres, 250, 500, 750 o 1000?"); 

if (qKilos === "250") {
    alert("puedes elegir 2 sabores");

} else if (qKilos === "500") {
    
    alert("puedes elegir 3 sabores");
     
} else if (qKilos === "750") {
    
    alert("puedes elegir 4 sabores");
        
} else if (qKilos === "1000") {
    
    alert("puedes elegir 5 sabores");
} else {
    prompt ("elige una opción válida por favor: 250, 500, 750 o 1000")
}     

/* pregunta: cómo se hace que el else haga algo en loop?, en este caso si el usuario ingresa constantemente mal una opción.
Ej, si ingreso 2000 en vez de una de las opciones la consola dice "elige una opción válida", pero si vuelvo a ingresar una opción no válida deja de ejecutarse.

----------------------------------------------------------------------

TAREA 3: Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.*/
let month = prompt ("elige un mes por favor");
if (month = enero || month  ,
 lñkkkkkekopk