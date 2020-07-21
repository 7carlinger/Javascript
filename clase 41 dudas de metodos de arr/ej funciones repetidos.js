/*SI LOS HICE NUEVO... SOLO PORQUE PUEDO

/*************************************************
 EJERCICIO NRO 1
 1.Hacer una funcion llamada 'saludo'
 2.Cada vez llamo la función me 
   me pide un nombre
 3.Toma ese nombre y me dice
   "hola (nombre)" en un alert
    */

let nombre = prompt('para ser recibidx debe decirnos su nombre')    
let saludo = nombre => {
    alert(nombre);
}
saludo();


 /*EJERCICIO NRO 2
 Hacer una función para elevar un
 numero al cuadrado, pidiendo el valor
 por prompt y mostrándolo por alert*/

let cuadrado = () => {
    let numero = prompt(`hello hello kittie, tira un numero vieja`);
    cuadrado = numero * numero
    alert(` ${cuadrado} es el cuadrado de tu numero`)
    return cuadrado;

}


 /*EJERCICIO NRO 3
 1. Crear un array vacío
 2. Hacer una función para llenar
 el array, pidiendo por prompt. Cada vez que invoco la función,
 me muestra un prompt y la carga en el array*/


 let lista = () => {
    const input = prompt(`bueno bueno bueno, a ver esa listita de compras?`);
    const arr = input.split(' ');
    console.log(arr);
    alert(`no te olvides nada vieja`);

}
/*cositas de backup que me traigo... si las robe...
const input = prompt("ingrese los numeros que quiere analizar");
const arr = input.split(' '); 
 