// Funciones solas.
//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/
const saludo = () => { 
    let nombre = prompt("Ingrese su nombre");
    alert(`Hola ${nombre}`);
}


//Llamado de la funcion
saludo();
saludo();




 //2.
 /***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/
const cuad = () => { 
    let num = number(prompt("Ingrese un número"));
    alert(`Hola ${num}`);
    num = num * num
}
cuad();

//otra
const cuad = () => {
    let num = Number(prompt(`Ingrese el valor a elevar:`));
    //num = 6
    //num = num*num;
    alert(`El resultado es ${num*num}`);

 }

 cuad();



 //3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt. Cada vez
 *    que invoco la función, me muestra UN prompt y
 *    lo carga en el array.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/
let array = [];
 
 //Definicion de funciones
 const agregaValores = () => {
         let valorArray = prompt (`Ingrese un valor de array:`);
         array.push(valorArray);
 }
 
/* Opcion 1----------
 const imprimeUltimo = () => {
    let b = array.pop();
    alert (`El ultimo valor del arreglo es: ${b}`);
    array.push(b);
 } */

//Opcion 2-----------
 const imprimeUltimo2 = () => {
     tamañoArray = array.length;
     alert(`El ultimo valor es ${array[tamañoArray-1]}`);
 } 


 const imprimirArray = () => {
    alert (`El arreglo es: ${array}`);
 }


//Asigno valores al array
let resp;
do {
    agregaValores();
    resp = prompt ("Desea ingresar mas valores?");
 } while (resp === "si")


//Imprimo el ultimo
//imprimeUltimo();
imprimeUltimo2();


//Imprimo el array
imprimirArray();


//////////////////////////////TEORIA/////////////////////////////////////////////
/******************************************
 * 
 * FUNCIONES
 * 
 * Las funciones son un bloque de código que
 * realizan una acción específica.
 * Una función de javascript es ejecutada
 * cuando algo la "invoca".
 * Estas funciones, se pueden asignar a 
 * variables/constantes para poder
 * posteriormente invocarlas, o bien, 
 * se pueden usar funciones con nombre.
 * 
 * Las funciones se utilizan para distintos
 * tipos de tareas. La idea es que el código
 * sea reutilizable.
 * 
 * Funciones flechas y variables.
 * ej:
 * const myFunction = () => {
 *  // código a ejecutar
 * }
 * 
 * myFunction();
 * 
 * 
 * Las funciones pueden ser funciones con nombre,
 * utilizando la sintaxis vieja de javascript
 * 
 * ej: 
 * function myFunction(){
 *   // codigo a ejecutar
 * }
 * 
 ******************************************/
let a = 1;
const sumar = () => {
    a += 2;
};
console.log(a); // 1
sumar();
console.log(a); // 3
// La funcion anterior es igual a
function sumar(){
    a += 2;
}
// O igual a 
const sumar = function(){
    a += 2;
};


/******************************************
 * 
 * Funciones en variables vs funciones con nombre
 * 
 * El motor de javascript tiene dos tiempos, uno
 * de compilación y uno de ejecución.
 * Durante el tiempo de compilación, el motor,
 * entre otras cosas, extrapola las funciones 
 * con nombre (function nombre(){ codigo }) y 
 * les da accesibilidad desde la primer línea de
 * nuestro código.
 * Por otro lado, durante el tiempo de ejecución
 * el motor va línea por línea ejecutando las 
 * instrucciones. Cuando llega a una variable
 * reserva ese espacio en memoria y solo a 
 * partir de ahí es accesible en nuestro código.
 * Esto último sucede también con las funciones
 * en variables. Por eso, el siguiente ejemplo
 * muestra cómo se ejecutarían los códigos en 
 * cada uno de los ejemplos posibles.
 * 
 ******************************************/
try {
    a(); // undefined
} catch(err){
    console.warn(err);
}
try {
    b(); // B
} catch(err){
    console.warn(err);
}
try {
    c(); // undefined
} catch(err){
    console.warn(err);
}
const a = () => {
    console.log('A');
};
function b() {
    console.log('B');
}
const c = function(){
    console.log('C');
}

try {
    a(); // A
} catch(err){
    console.warn(err);
}
try {
    b(); // B 
} catch(err){
    console.warn(err);
}
try {
    c(); // C
} catch(err){
    console.warn(err);
}
© 2020 GitHub, Inc.