function validar(a, b) {
    let dato;
    do {
        dato = parseInt(prompt("[" + a + "-" + b + "]"));
    } while (dato < a || dato > b);
    return dato;
}

const pelicula = ["Doctor Strange","Sonic","Top Gun","Lightyear"];
let horaFuncion,i,numSala,afirmacion,peli;
    afirmacion = prompt ("¿Desea retirar una entrada?");
while (afirmacion!='no'){
    alert ("Las peliculas que se encuentran en funcion son: Doctor Strange, Sonic, Top Gun, Lightyear");
    peli = prompt("¿Que pelicula verá?");
    peli = peli.toUpperCase();
    switch (peli) {
        case "DOCTOR STRANGE": 
        i=0;
        break;
        case "SONIC": 
        i=1;
        break;
        case "TOP GUN": 
        i=2;
        break;
        case "LIGHTYEAR": 
        i=3;
        break;
        default:
        alert("Usted a ingresado una pelicula incorrecta");
    }
    alert("Ingrese el horario de la funcion [0-24]");
    horaFuncion = validar(0,24);
    alert("Ingrese el numero de la sala [1-3]");
    numSala = validar(1,3);
    console.log(`Usted vera la pelicula ${pelicula[i]} a las: ${horaFuncion}:00hs en la sala ${numSala}`);
    afirmacion = prompt("¿Desea retirar otra entrada?");
    afirmacion = afirmacion.toLowerCase();
}

const comment = document.createComment("Comentario");