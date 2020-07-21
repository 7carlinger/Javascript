
class Catalogo {
    lista = [];
    camposValidos = ["titulo", "descripcion", "precio"];

    constructor(nombre) {
        this.nombre = nombre;
    }
    
    agregar(producto) {      
        if(!(producto instanceof Producto)) throw new Error ('Esto no es un producto del catálogo');
        this.lista.push(producto);
    }  
    
    buscarIndicePorId(id) { 
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

    obtenerListaProducto() {
        this.lista.forEach(producto => {
            if(producto instanceof Chocolates) {
                console.log(`Chocolate:` + `\n` +`ID: ${producto.id} Descripción: ${producto.descripcion}, Precio: $${producto.precio}, Marca: ${producto.marca}, Porcentaje cacao: ${producto.porcentajeCacao}%, Contiene leche: ${producto.leche}, Peso:${producto.peso} grs, Extras: ${producto.extras} contiene`);
            } else if (producto instanceof Perfumes) {
                console.log(`${producto.id} ${producto.descripcion}, ${producto.precio}, ${producto.marca}, ${producto.volumen}`);
            } else {
                console.log(`${producto.id} ${producto.descripcion}, ${producto.precio}, ${producto.wireless}, ${producto.tipo}`);
            }
        });
    }
}

const cataloguito = new Catalogo('Compras')
//catalogo --> lista [prod1, prod2, prod3]

class Carrito {
    listaCarrito = [];
    nextId = 1
    buscarIDdeCatalogo(catalogoId) {
        return this.listaCarrito.findIndex(producto => producto.catalogoId === catalogoId);
    }
    agregar(catalogo, catalogoId, cantidad) {
        if(!(catalogo instanceof Catalogo)) throw new Error (`El catalogo no es un Catalogo`);
        const catalogoIndex = catalogo.buscarIndicePorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe en el catálogo.");
        const carritoIndex = this.buscarIDdeCatalogo(catalogoId)
        if (carritoIndex === -1) {
            const producto = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.listaCarrito.push(producto);
            this.nextId++;
        } else {
            this.listaCarrito[carritoIndex].cantidad += cantidad;
        }
    }
}


class Producto {    
    descuento = 0;
    
    constructor(id, descripcion, precio) {
        this.id = id;
        // this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    obtenerPrecioFinal() {
        const aplicarDescuento = 1 - (this.descuento / 100);
        this.precio *= aplicarDescuento;
    }


}

class Perfumes extends Producto{
    constructor(id, descripcion, precio, marca, volumen){
        super(id, descripcion, precio)
        this.marca = marca;
        this.volumen = volumen;
    }
}
const channel = new Perfumes(0022, 'dulce', 3500, 'Channel', 200)

class Chocolates extends Producto{
    constructor(id, descripcion, precio, marca, porcentajeCacao, leche = false, peso, extras = 'No'){
        super(id, descripcion, precio)
        this.marca = marca;
        this.porcentajeCacao = porcentajeCacao;
        this.leche = leche;
        this.peso = peso;
        this.extras = extras;
    }
}

const cabdbury = new Chocolates(9990, 'con leche', 125, 'Cadbury', 25, true, 200)
const milka = new Chocolates(8890, 'amargo', 195, 'Milka', 70, false, 400)
// cataloguito.agregar(cabdbury) esto para agregar productos
cabdbury.descuento = 25

class Auriculares extends Producto{
    constructor(id, descripcion, precio, marca, wireless = false, tipo){
        super(id, descripcion, precio)
        this.marca = marca;
        this.wireless = wireless;
        this.tipo = tipo;
    }
}




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
 * porcentaje. //
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