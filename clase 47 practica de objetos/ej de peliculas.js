/*************************************
  * Crear una funcion que me devuelva un objeto
  * Este objeto va a permitirme guardar 
  * peliculas que quiera ver, haya visto, o este viendo
  * O  sea, tengo un objeto con una lista de peliculas,
  * cada pelicula tiene su nombre, su director, su año, 
  * su genero, y un estado que puede ser (pendiente, viendo, vista).
  * Lo que tengo que poder hacer es
  * 1. Agregar peliculas
  * 2. Cambiar el estado
  * 3. Remover peliculas
  * 4. Obtener una lista legible con console.log de peliculas 
  * por estado. Es decir, le pido un estado y me deuvelve las peliculas
  * correspondientes. (`nombre del año tanto, dirigida por quien`)
  */
const contenedorDePeliculas = () => {    
  const misPeliculas = {
    lista: [],
    camposValidos: ["nombre", "director", "año", "genero", "estado"],
    buscarPorNombre: function(nombre) {
     return this.lista.findIndex(pelicula => nombre === pelicula.nombre);
    },
    //tarea 1 agregar pelicula
    agregar: function(nombre, director, año, genero, estado) {
        const pelicula = {
            nombre, 
            director, 
            año, 
            genero, 
            estado
        };
        this.lista.push(pelicula);
    },
    //tarea 2 modificar estado
    modificarEstado: function(nombre, estado) {
        const comoEstaEstaPeli = this.buscarPorNombre(nombre);
        this.lista[comoEstaEstaPeli].estado = estado;
    },
    //tarea 3 remover pelicula 
    remover: function(nombre){
      this.lista = this.lista.filter(pelicula => pelicula.nombre !== nombre);
    }, 
    //tarea 4 listar por estado
    porEstado: function(estado) {
      this.lista.filter(pelicula => pelicula.estado == estado);
      let texto = `Las peliculas ${this.estado} son: `;
      this.lista.forEach(item => texto += `${item.nombre}.`);
      alert(texto);
    },
  }

return misPeliculas;

}



        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}.`);//ingrediente se refiere a los elementos del array
        return texto;
  /*
  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2