/* Las clases son otra forma de efinir objetos, en una sintaxis distinta, pero que funciona
contienen un constructor en donde se incializan las variables.
Se utilizan tambien setters y getters.
En que se diferencian objetos de clases?: en la forma en que se crea un objeto.*/
class Pelaje {
    constructor (color) {
        this.color = color;
    }
}
class Gato {
    constructor (nombre, edad, vidas = 7) {
        this.nombre  = nombre;
        this.edad    = edad;
        this.vidas   = vidas;
        this.especie = "felino";
        this.cosas   = {
            esObjeto: true
        };
        this.pelaje = newPelaje ("Amarillo");
    }

    get edadGatuna () {
        return this.calcularEdadGatuna (); //invoco la funcion que defini
    }

    calcularEdadGatuna () { //defino la funcion
        return this.edad * 9;
    }
 }