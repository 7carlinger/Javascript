let edad = parseint.(prompt("cuál es tu edad"));

if(1 !== 2){
    console.log("Debe entrar");
}

// === o !==
if(2 !== 2) {
    console.log("NO debe entrar");
}
// >, >= o <
if(1 >= 1) {
    console.log("Debe entrar");
}

if(
    1 !== 2 // >, >=, !==
    && 
    5 >= 5 // <, <=, >, >= 
) {
    console.log("Debe entrar");
}
// 02
/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser SI o NO
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es SI. 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/
let largoPelo = prompt("¿tienes pelo largo?");
let barba = prompt("¿tienes baraba?");
if (largoPelo === "si" && barba === "si") {
    alert ("ah viniste por un corte y afeitada!");
} else if (largoPelo === "si" && barba === "no") {
    alert ("ok viniste solo por un corte");
} else if (largoPelo !== "si" && barba === "no") {
    alert ("salga de la peluquería");
}
