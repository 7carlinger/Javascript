// 02
 /**
  * Dado el siguiente HTML
  */
 //<input type="text" id="miInput" name="miInput"></input>
/**
 * cambiar el atributo name a miExInput
 */

 const cambiarInput = () => {
    const input = document.querySelector("#miInput");
    input.setAttribute("name" , "miExinput");
    console.log(input);
 };