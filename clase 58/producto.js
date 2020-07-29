// 4
/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */
class Catalogo {
    lista = []; 
    //camposValidos = ["titulo", "marca", "precio"];
    siguienteId = 1;

    constructor(nombre) {
        this.nombre = nombre;
    }
    
    agregar(productoType, marca, precio, genero = null, tamaño = null, porcentaje = null, tipo = null, color = null) { 
        switch(productoType) {
            case Producto.ProductosTypes.Perfumes: 
                const perfumito  =  new Perfumes (this.siguienteId, marca, precio, genero, tamaño); 
                this.lista.push(perfumito);
                this.siguienteId++;
                break;

            case Producto.ProductosTypes.Chocolates: 
                const chocolatito  =  new Chocolates (this.siguienteId, marca, precio, porcentaje, tipo); 
                this.lista.push(chocolatito);
                this.siguienteId++;
                break;

            case Producto.ProductosTypes.Auriculares:
                const auris  =  new Auriculares(this.siguienteId, marca, precio, color); 
                this.lista.push(auris);
                this.siguienteId++;
                break;
        }
    } 
   buscarIndicePorId(id) { 
        return this.lista.findIndex(producto => id === producto.id);
    } 
}
    ///RESTO DE CATALOGO

    /*buscarIndicePorId(id) { 
        return this.lista.findIndex(producto => id === producto.id);
    } 

    buscarProductoPorId(id) {
        return this.lista.find(producto => id === producto.id); // Funciona, me devuelve el producto
        //return this.lista.filter(producto => id === producto.id); // Filter me devuelve una array
    }
    borrarProducto(id){
        this.lista = this.lista.filter(producto => id !== producto.id);
    }

    validarModificacion(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    }

    modificarProducto(id, campo, valor) {
        const index = this.buscarIndicePorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }

}*/

class Producto {    
    constructor(id, titulo, marca, precio) {
        this.id = id;
        this.titulo = titulo; 
        this.marca = marca;
        this.precio = precio;
    }
    static get ProductosTypes() {
        return {
            Perfumes: 1,
            Chocolates: 2,
            Auriculares: 3
        }
    }
}

class Perfumes extends Producto {
    constructor(id, marca, precio, genero, tamaño) {
        super(id, "Perfume", marca, precio);
        this.genero = genero;
        this.tamaño = tamaño
    }

}

class Chocolates extends Producto {
    constructor(id, marca, precio, porcentaje, tipo) {
        super(id, "Chocolate", marca, precio);
        this.porcentaje = porcentaje;
        this.leche = false;
        this.tipo = tipo;
        this.extras = []
    }
    agregarExtras(ingredienteExtra) {
        this.extras.push(ingredienteExtra);
        console.log("Seguro?.. okay, sobre gustos");
    }
}

class Auriculares extends Producto {
    constructor(id, marca, precio, color) {
        super(id, "Auriculares", marca, precio);
        this.wireless = true; 
        this.color = color
        this.microfono = false
    }
    comprarConMic() {
        this.microfono = true;
        console.log("Se le agrego microfono")
    }
    comprarSinWireless() {
    this.wireless = false
    console.log("Eligió auriculares no-wireless")
    }
}




