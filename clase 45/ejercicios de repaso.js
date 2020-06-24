 //CALLBACK: es una función que se ejecuta dentro de una función

 const miFuncion1 = callback => {
    console.log("Hago algo");
    callback();
 };

 miFuncion1(() => console.log("Estoy en funcion 2"));

 //Map, crea un nuevo array con el resultado del llamado a la funcion
 //hacer un nuevo arreglo en base a una lista de numeros y multiplicar cada uno de
 //sus componentes por 2
 let arreglo = [1,2,3,4];
 let nuevoArreglo = arreglo.map(numero=>nuemro*2);
 console.log(nuevoArreglo);

 //filtrar de una lista de elementos los que no son colores
 let arreglo = ['rojo', 'azul', 'verde', 'amarillo', 'perro'];
 let nuevoArreglo = arreglo.filter (item => item !== 'perro');
 console.log(nuevoArreglo);