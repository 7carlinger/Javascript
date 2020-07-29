// 03
 /**
  * Escribir un HTML con un div.
  * Luego, por ID, modificar el contenido del DIV
  * agregando una lista de 5 elementos.
  * Una vez agregada la lista, agregar 
  * programaticamente un numero a cada elemento
  * 
  * por ejemplo, si son 5 elementos deberia verse:
  * 1
  * 2
  * 3
  * 4
  * 5
  */
 const llenarDiv = () => {
    const div = document.querySelector("div");
    div.id = "david";
    /*let ul = document.createElement("ul").innerHTML = "hola";
    ul.innerText = david;
    console.log(ul.innerText);*/
    const item = document.createElement("li");
    div.appendChild(item);
    div.innerHTML = item,item,item,item,item;
    //dios querido
 };