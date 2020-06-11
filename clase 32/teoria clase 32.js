/* hace la tarea please*/
let dia = prompt ("digame qué día es por favor");
let mes = prompt ("dígame por favor el mes");
let hemisferio = prompt ("digame por favor en qué emisferio se encuentra");

if(
    (dia>= 21 && mes === "marzo") || mes === "abril"
    || mes = "mayo" || 
    (dia < 21 && mes = "junio");
) 
/*tarea de la clase 32*/

let eleccion1 = prompt("Hola! Tenes que elegir el producto entre estas 3 marcas: \nAdidas \nPuma \nNike");
let modelo;
if(eleccion1 === "Adidas"){
    modelo = prompt("Escoge entre Running o Tennis")

}else if (eleccion1 === "Puma") {
    modelo = prompt("Escoge entre Yoga o Streching")
}else {
    modelo = prompt("Escoge entre Basquet o fútbol")
}
    alert("Elegiste " +eleccion1+ " modelo " +modelo);

