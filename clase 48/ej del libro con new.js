function biblioteca () {

    const book = {
        nombre: `Harry Potter`,
        autor: `J K Rowling`,
        año: `2002`,
        isbn: `abc123`,
        reviews: [],
        
        addbook: function (nombre, autor, año, isbn, reviews) {
            this.book.push ({
                nombre,
                autor,
                año,
                isbn,
                reviews
            
            })
        }
            
        
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

        
    }
    
 }

const bibliotecaDeCarla = new biblioteca();
