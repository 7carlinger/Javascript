// 003
 /**
  * Hacer un sistema para restaurant.
  * Para esto necesitamos.
  * 1. Lista de mesas - agregar, eliminar
  * 2. Lista de productos con precio - Agregar, eliminar, modificar
  * 
  * Y que nos permita obtener
  * 3. Una cuenta por mesa (la mesa se abre, se cargan los productos, y 
  * se cierra pidiendo el total consumido. Lista de cuentas con objetos)
  * 4. Obtener el producto mas vendido
  * 
  * Las funciones deben tener validaciones correspondientes.
  * 
  * Y esto debe estar todo accesible desde una pagina web.
  * TESTS de las funciones que no requieran DOM
  * 
  * En el GUI (graphical user interface, o interfaz grafica de usuario), o sea
  * la pagina, vamos a tener varias acciones relacionadas a inputs.
  * Resetear el valor de los inputs cada vez que hago click en el boton que le 
  * corresponde al input. O sea, si agrego un nuevo numero de mesa, el input
  * debe quedar vacio una vez agregado.
  * 
  * Por ultimo, puede hacerse con objetos o con clases.
  */

 const listaMesas = []; //Probamos esta const acá a ver si era eso lo que no la hacía accesible

 //---Chicas dice Fede que esto lo va a explicar el martes o jueves el por qué no se unen bien
 
 const agregarMesa = event => {
   const input = document.querySelector("#nro-mesa").value;
   const mesa = new Mesa(input); //que onda que no reconoce las clases del otro archivo clases.js
   
   //this.listaMesas.push(mesa);
   const table = document.querySelector("table");
   const tr = document.createElement("tr");
   const tdMesa = document.createElement("td");
   const tdCuenta = document.createElement("td");
   const tdCerrar = document.createElement("td");
   const botonCerrar = document.createElement("button"); 
   const textBoton = document.createTextNode("Cerrar");
   const textTdCuenta = document.createTextNode("$0");
   
   table.appendChild(tr);
   tr.appendChild(tdMesa);
   tr.appendChild(tdCuenta);
   tr.appendChild(tdCerrar);
   tdCerrar.appendChild(botonCerrar);
   botonCerrar.appendChild(textBoton);
   tdCuenta.appendChild(textTdCuenta);
   
   
   tdMesa.textContent = input;
   
   document.querySelector("input").value = "";
 
 }
 
 /*Const agregarProducto = event () => {
   //codigo de agreggar producto
 }*/
 
 const loadEvents = () => {
   const buttonAdd = document.querySelector("#boton-agregar-mesa");
   buttonAdd.addEventListener("click", agregarMesa);
 //   const buttonAddProd = document.querySelector("#boton-agregar-producto");
 //   buttonAddProd.addEventListener(); 
     
 }
 
 ///////----Mi idea del tema de constructor / clases
 // Lo de crear un objeto me parece bien
 // Lo de que la lista sea dentro de mesas creo que no, porque la lista de mesas es una sola, no una por mesa

