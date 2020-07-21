function Receta(nombre)


function Ingredientes(ingrediente, cantidad) {
    this.ingrediente = ingrediente;
    this.cantidad = cantidad;
};


function Receta(nombre) {
    this.nombre = nombre;
    this.ingredientes = [];
    this.agregarIngredientes = (ingrediente, cantidad) => {
        const ingredientes = new Ingredientes(ingrediente, cantidad);
        this.ingredientes.push(ingredientes);
    };
    
    this.getReceta = () => {
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}.`);//ingrediente se refiere a los elementos del array
        return texto;
    };
       
};

function CatalogoDeRecetas () {
    this.listaRecetas = [];
    this.agregar = nombre => {
        const receta = new Receta(nombre);
        this.listaRecetas.push(receta);
    };

    this.buscarRecetaPorNombre = nombre => this.listaRecetas.findIndex(receta => receta.nombre === nombre); 

    this.agregarIngredientes = (nombre, ingrediente, cantidad) => {
        const indice = this.buscarRecetaPorNombre(nombre);
        this.listaRecetas[indice].agregarIngredientes(ingrediente,cantidad);
    };
}; 

Test ('que cargue correctamente una nueva receta',  )