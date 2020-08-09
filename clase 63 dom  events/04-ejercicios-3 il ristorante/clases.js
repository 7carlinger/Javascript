

class Mesa {
    listaProductos = []; // acá van a ir los productos que agreguemos a la mesa. 
    constructor(numero){
      this.numero = numero;
      this.cuenta = 0;
    }
    calcularCuenta(){
        
    }
    cerrarMesa() {
        //
        //para mi cerrar mesa solo la elimina, porque lo otro está en la otra función que dices Car
    }
    cargarProductos(producto){
        
    }
  }
  
  class ProductosPorMesa {
    constructor (nombre) {
      this.id = 1; 
      this.lista = [];
      this.siguienteId = 1;
    }
  }
  const siguienteProductoId = 1;
  class Producto { 
      constructor(nombre, precio) {
          this.id = siguienteProductoId; // de donde sale siguienteID?
          siguienteProductoId++;
          this.nombre = nombre;
          this.precio = precio;
           
      }
      eliminarProducto(){}
  }
  
    
    ///Id no va como parametro
    