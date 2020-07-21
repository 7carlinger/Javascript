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
 * cargar personas.
*/
let lasTareas = [];

const agregarTarea = (titulo, descripcion, estado = false) => {
    const laLista = {
        titulo,
        descripcion,
        estado = false
    }
    lasTareas.push(laLista)
    return laLista
}

const eliminarTarea = (titulo) => {
    return lasTareas.filter(a => a.titulo !== titulo),
    
}

Test ('Debe mostrar el listado de tareas', () => {
    agregarTarea('comprar', 'leche y pan', false)
    expect(lasTareas[0]), toEqual({
        titulo: 'comprar',
        descripcion: 'leche y pan',
        estado: false,
    });
});
