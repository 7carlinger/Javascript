//tarea de la clase anterior
/***********************************************
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
 */

//novedoso p mi, cargar el array de este modo, pregunta: como se identifican los indices??????
 const receta = {
    nombre: 'pan',
    ingredientes: [
        {cantidad: '50g', ingrediente: 'levadura'},
        {cantidad: '30g', ingrediente: 'sal'},
        {cantidad: 'una taza', ingrediente: 'agua'},
        {cantidad: '1 kg', ingrediente: 'harina'},
    ],
    get receta() {
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}.`);//ingrediente se refiere a los elementos del array
        return texto;
    }
};

//fede le agrego estas 2 lineas porque le imprimia mal el final, yo lo solucione con un punto y sin el espacio final, pero no entiendo la solucion de la funcion substr(start,legth) el comienzo de que?, el final de que?

//const textoFinal = texto.substr(0, texto.length - 2) + '.';
//return textoFinal;

//==============================================================================================
//anda a la consola y mira siempre la ejecucion antes de preguntar o salir a googlear
//la clave de este ejercicio es el get, sirve para traer una cadena de texto de una cadena
//repasa seters y getters
