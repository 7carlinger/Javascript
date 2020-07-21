/***************************************************
 * Desarrollar una función que reciba por parámetro
 * un día de la semana y devuelva el número que 
 * le corresponde.
 * Comenzar por los casos de test, y luego hacer 
 * la función.
 */

 /**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */

/**
 * Una funcion que reciba o un numero o un string
 * correspondiente a un mes, y devuelva el opuesto.
 * (Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
 * Comenzar por los tests, recordar tirar errores y testearlos.
 */
const idMes = {
    Meses: [
        {id: '1', mes: 'enero'},
        {id: '2', mes: 'febrero'},
        {id: '3', mes: 'marzo'},
        {id: '4', mes: 'abril'},
        {id: '5', mes: 'mayo'},
        {id: '6', mes: 'junio'},
        {id: '7', mes: 'julio'},
        {id: '8', mes: 'agosto'},
        {id: '9', mes: 'setiembre'},
        {id: '10', mes: 'octubre'},
        {id: '11', mes: 'noviembre'},
        {id: '12', mes: 'diciembre'},
    ],


    get idMes () {   
    const texto = `corresponde a: `;
    this.Meses.forEach(id => texto += `${mes}`);
    return texto;
    },
}

/*
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
*/