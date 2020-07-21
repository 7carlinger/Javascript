/*Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.*/

const contenedorDeTareas = () => {
    const misTareas = {
        lista: [],
        campos: ['titulo', 'descripcion', 'estado' = false,],
        buscarPorTitulo: function(titulo) {
            return this.lista.findIndex(tarea => titulo === tarea.titulo);
        },
        agregar: function(titulo, descripcion, estado) {
            const tarea = {
                titulo,
                descripcion,
                estado: false,
            };
            this.lista.push(tarea);
        },
        modificarEstado: function (titulo, estado) {
            const Estado = this.buscarPorTitulo(titulo);
            this.lista[Estado].estado = estado;
        },
        remover: function (titulo) {
            this.lista = this.lista.filter(tarea => tarea.titulo !== titulo);
        },
        porEstado: function(estado) {
            this.lista.filter(tarea => tarea.estado == estado);
            let texto = `Las tareas ${this.estado} son: `;
            this.lista.forEach(item => texto += `${item.titulo}.`);
            alert(texto);
        },
    }
    return misTareas;
}

const tareasDeCarla = contenedorDeTareas();

test ('carga correctamente la tarea 4, kjkj', )





/* DEJO ESTO POR ACA PORQUE LO HICE CON CONTENEDOR DE PELICULAS DE LA CLASE 48
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
  //para que funcione...instanciar
  const peliculasDeCarla = contenedorDePeliculas();
  peliculasDeCarla.agregar('batman', 'milipili', '1999', 'triller', 'vista');
  
Test ('que cargue correctamente una nueva receta',  )*/