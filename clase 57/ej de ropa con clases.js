/*
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * Crear varios tipos distintos de ropa.
 * 
 * hecho en grupete de clase y probado en consola
*/ 

class Ropa {
    constructor(nombre, tipo, talle, material, color, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.talle = talle;
        this.material = material;
        this.color = color;
        this.precio = precio;
        this.puesto = false;
    }
    calzar(){
        if(this.tipo !== "calzado") throw new Error ("Esta prenda no se puede calzar :(");
        this.puesto = true;
        console.log("Que lindo calzado tienes puesto!")
    }
    vestir(){
        if(this.tipo == "calzado") throw new Error ("Esta prenda no se puede vestir :(");
        this.puesto = true;
        console.log("Estas pipi cucu!")
    }
    abrochar(){
        if(this.tipo !== "camisa" && this.tipo !=="pantalon") throw new Error ("Esta prenda no se puede abrochar(");
        this.puesto = true;
        console.log("Estas re abrochado!")
    }
    static listarTiposDePrendas (){
        return [
        "calzado",
        "pantalon",
        "remera",
        "camisa",
        "campera",
        "sombrero"
        ];
    };
};
class Pantalon extends Ropa {
    constructor (nombre, tipo, talle, material, color, precio) {
        super (nombre, tipo, talle, material, color, precio);
    };
    maquinaDeLavar () {
        if (this.material !== 'jean' && this.material !=='gabardina') throw new Error ("no puedes ingresarlo a la lavadora");
        console.log("metelo en la lavadora, lavado corto, el planeta esta muriendo");
    };
    chequearColorParaLavar () {
        if (this.color === 'blanco') throw new Error ('Solo lavar con ropa blanca');
        console.log ("perdon, mala mia, segui lavando");
    };
    
};
class Camisa extends Ropa {
    constructor (nombre, tipo, talle, material, color, precio, estilo) {
        super (nombre, tipo, talle, material, color, precio);
        this.estilo = estilo;
        this.planchado = false;
    };
    get temporada () {
        if (this.estilo === 'manga corta') {
            return 'es para verano';
        } else if (this.estilo === 'manga larga') {
            return 'es para invierno';
        } else {
            throw new Error ("Esa no es una camisa, vuelve a intentarlo")
        }
    }; 
    planchar () {
        if(this.material === 'seda') throw new Error ("Por favor no planchar esta prenda");
        console.log("La puedes planchar sin problemas");
        this.planchado = true;
    };  
}
class Calzado extends Ropa {
    constructor(nombre, talle, material, color, precio) {
        super (nombre, 'calzado', talle, material,color,precio);
    };

}
class Zapatilla extends Calzado {
    constructor(nombre, talle, material, color, precio)
}   

// 2
 /**
  * Transformar los distintos tipos de ropa
  * del ejercicio anterior a nuevas clases
  * que extiendan de la clase principal.
  * **********************************************************
  este ejercicio lo hicimos en grupo en clase con Maria y otras chicas*/