let catalogo = [];

const cargar = (id, titulo, descripcion, precio) => {
    const producto = {
        id,
        titulo,
        descripcion,
        precio,
    }
    catalogo.push(producto);
};

cargar("1", "mesa", "mesa de comedor", "13000");
cargar("2","silla campanita", "silla de comedor", "4500");

const buscarXId = (idAbuscar) => {
    let index;
    index = catalogo.findIndex(element => {
        return element.id == idAbuscar;
    } ) 
    return index;
}

const modificar = (id, titulo, descripcion, precio) => {
    let index = buscarXId(id);
    catalogo[index].titulo = titulo;
    catalogo[index].descripcion = descripcion;
    catalogo[index].precio = precio; 

}
