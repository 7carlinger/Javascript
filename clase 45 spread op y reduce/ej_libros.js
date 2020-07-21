
/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */


const libro = {
    nombre: `Harry Potter`,
    autor: `J K Rowling`,
    año: `2002`,
    isbn: `abc123`,
    reviews: [],
    addReview: function(nombre,review,valoracion) {
        this.validarValoracion(valoracion);
        const objReview = {
           nombre,
           valoracion,
           review
        }
        this.reviews.push(objReview);     
    },
    validarValoracion: function(valoracion) {
       if(!valoracion >= 1 && valoracion <= 5) throw new Error (`La valoración debe ser entre 1 y 5`);
    },
    promediarValoracion: function() {
        let totReviews = this.reviews.length;
        let sumaValoracion = this.reviews.reduce((acumulador,element) => acumulador + element.valoracion ,0);
        return sumaValoracion/totReviews;
    },
    get promedio() {
        return this.promediarValoracion();
    },
    get info() {
        return `El titulo del libro es ${this.nombre} \nEl autor/a es ${this.autor} \nISBN: ${this.isbn}`
    }
    /*
         get promedio() {
            let totReviews = this.reviews.length;
            let sumaValoracion = this.reviews.reduce((acumulador,element) => acumulador + element.valoracion ,0);
            return sumaValoracion/totReviews;
    }
    */
}
