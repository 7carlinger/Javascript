const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];
const ventas = [
[ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000',
'Motherboard ASUS 1500'] ],
[ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000',
'Motherboard ASUS 1500'] ],
[ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543',
'Motherboard MZ'] ],

[ 'Motherboard ASUS 1200', 100 ],
[ 'Motherboard MZI', 30 ],
[ 'HDD Toyiva', 90 ],
[ 'HDD Wezter Dishital', 75 ],
[ 'RAM Quinston', 110 ],
[ 'RAM Quinston Fury', 230 ]
];
const sucursales = ['Centro', 'Caballito'];

const obtenerIdVenta = () => {
    return Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
    
};
console.log(obtenerIdVenta());

/*9. agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): recibe por
parámetro todos los datos de una venta, y los agrega en el array de ventas. Al igual
que las ventas que ya están previamente creadas, además de estos datos
necesitamos agregar el primer dato que es un identificador de la venta. Para agregar
este dato, tenemos que usar la función desarrollada en el punto anterior
obtenerIdVenta**/

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes)  => {
    const id = obtenerIdVenta();
    ventas.push(id, dia, mes, anio, vendedora, sucursal, componentes);

};
