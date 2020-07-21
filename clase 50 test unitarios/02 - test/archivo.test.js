const Obj = {
    
}





const getMes = (dia) => {
    switch(dia) {
        case "enero" || 1: 
            return 1;
        case "febrero":
            return 2;
        case "marzo":
            return 3;
        case "abril":
            return 4;
        case "mayo":
            return 5;
        case "junio":
            return 6;
        case "julio":
            return 7;
        case "agosto";
            return 8; 
        case "septiembre";
            return 9;
        case           
        default:
            throw "El día no existe, guache.";
    }
};

test('le paso "lunes" y devuelve 1', () => {
    expect(getDia("lunes")).toBe(1);
});
test('le paso "martes" y devuelve 2', () =>{
    expect(getDia("martes")).toBe(2);
});

test('le paso "miercoles" y devuelve 3', () =>{
    expect(getDia("miercoles")).toBe(3);
});
test('le paso "sabado" y devuelve 6', () =>{
    expect(getDia("sabado")).toBe(6);
});
test('le paso "domingo" y devuelve 7', () =>{
    expect(getDia("domingo")).toBe(7);
});

test('le paso "demango" tira error', () =>{
    expect(() => {
        getDia("demango");
    }).toThrow("El día no existe, guache.");
});