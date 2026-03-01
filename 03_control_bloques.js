console.log("ESTRUCTURAS DE CONTROL");

// IF/ELSE
//Son condicionales que nos permiten ejecutar código solo SI SE CUMPLE UNA CONDICIÓN

// if...else(si...si no...)

const temperatura = 30;
if (temperatura > 25){
    console.log("Hace calor");
}

const esAdulto = true;
if (esAdulto){
    console.log("Eres adulto");
}

// bifurcar la condición ( si es una cosa u otra) if...else

const edad = 16;

if(edad >= 18) {
    console-log("Puedes entrar");
} else {
    console.log("No puedes entrar, bye");
}

const miEdad = 29;

if(miEdad >= 18){
    console.log("Puedes entrar ahora");
}
console.log("Bienvenido!");

const nombreProducto1 = "T-Shirt";
const precioProducto1 = 50;
let cantidadProducto1 = 2;

const nombreProducto2 = "Jeans";
const precioProducto2 = 40;
let cantidadProducto2 = 1;

const totalDespuesDeDescuento = 45;

if (totalDespuesDeDescuento > 50) {
    console.log("Tienes envío gratis");
} else {
    console.log("Costes de envío aplicados");
}

let message; // no vale const
if(precioProducto1 < precioProducto2) {
    message = "Producto T-Shirt tiene mejor precio que Jeans"
} else {
    message = `Producto ${nombreProducto1} es más caro que ${nombreProducto2}`
}

console.log(message);

//ENCADENAMIENTO DE CONDICIONALES
// if..... else if.....else

const nota = 95;

if(nota >= 90){
    console.log("sobresaliente");
} else if(nota >= 70) {
    console.log("notable");
} else if(nota >= 50) {
    console.log("aprobado");
} else {
    console.log("suspendido");
}

let mensaje2;
const score = 95;
if(score >= 90) {
    console.log("Excelente");
} else if (score >= 70) {
    console.log("Bien");
} else {
    console.log("Necesitas mejorar");
}

console.log(mensaje2);


// Hoisting -> elevar

//var:
console.log(userName);
var userName = "Alicia";

// con let
//crossOriginIsolated.log(userAge);
//let userAge = 30;

// CONDICIONES COMBINADAS:

const edad5 = 25;
const tieneLicencia = true;
const puedeConducir = edad5 >= 18 && tieneLicencia;

if(puedeConducir) {
    console.log("puedes conducir");
} else {
    console.log("no puedes conducir");
}

// caso práctico descuentos
const precioOriginal = 100;
const esEstudiante = true;
const esMiembro = false;

let precioFinal = precioOriginal;

if(esEstudiante) {
    precioFinal = precioOriginal * 0.8;
    console.log(" Descuento de estudiante aplicado");
} else if ( esMiembro) {
    precioFinal = precioOriginal * 0.2;
    console.log("Descuento de miembro aploicado");
}

console.log(`Precio original: ${precioOriginal} €`);
console.log(`Precio final: ${precioFinal} €`);

/*
EJERCICIO 1: Par o Impar
Determinar si un número es par o impar
*/
console.log("\nEJERCICIO 2 - Par o Impar:");
const numero2 = 18;

if (numero2 % 2 === 0) {
    console.log(" es par!");
} else {
    console.log ("No es par!")
}

//operador ternario

// ? "" : ""; equivale al if...else

const edad3 = 20;
const mensaje4 = (edad3 >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje4);    

let mensaje3;
if(edad3 >= 18) {
    mensaje3 = "Mayor de edad";
} else {
    mensaje3 = "Menor de edad";
}
console.log(mensaje4);

// Caso práctico

const puntos2 = 150;
const estado = puntos2 >= 100 ? "VIP" : "Regular";
console.log("Estado del cliente:", estado);

let isLoggedIn;
const mensajeHome = isLoggedIn ? "Welcome back" : "Please login";
console.log(mensajeHome);

let isAdmin = true;
const mensajeHome3 = isLoggedIn && isAdmin ? "admin panel" : isLoggedIn ? "User panel" : "Login";
console.log(mensajeHome3);

// Nos camos o no. a Disney

const tenerVacaciones = true;
const suficienteDinero = true;
const hijaGustaDisney = false;

let mensajeFamilia;

if (tenerVacaciones && suficienteDinero && hijaGustaDisney) {
    mensajeFamilia = "Nos vamos a Disney!!";
} else if ( tenerVacaciones && suficienteDinero) {
    mensajeFamilia = "Vamos a Murcia";
} else {
    mensajeFamilia = "No podemor ir aún";
}
console.log(mensajeFamilia);

console.clear();

// SWITCH

// Podemos tener varias opciones encadenadas, pero podemos mejorar la legibilidad y la mantenibilidad
const role = "viewer";

if (role === "admin") {
    console.log("Full access IF");
} else if (role === "editor") {
    console.log("Edit acces IF");
} else if (role === "viewer") {
    console.log("Read access IF");
} else {
    console.log("No access");
}

// REACTOR com Switch... case ....default
// VALIDA VALOR Y TIPO:
switch(role) {
    case "admin":
        console.log("Full access SWITCH");
        break;
    case "editor":
        console.log("Edit access SWITCH");
        break;
    case "viewer":   
         console.log("Read access SWITCH");
         break;
    default:
        console.log("No access SWITCH");      
}

const dia = 6;

let diaDeLaSemana;

switch (dia) {
    case 1:
        diaDeLaSemana = "lunes";
        break;
    case 2:
        diaDeLaSemana = "Martess";
        break;
    case 3:
        diaDeLaSemana = "Miércoles";
        break;
    case 4:
        diaDeLaSemana = "Jueves";
        break;
    case 5:
        diaDeLaSemana = "Viernes";
        break;  
    case 6:
        
    case 7:
        diaDeLaSemana = "Fin de semana!!";
        break;  
    default:
        diaDeLaSemana = "dia no valido"                        

}

console.log(diaDeLaSemana);


// Caso práctico calculadora:
const num1 = 10;
const num2 = 5;
const operation = "+";
let resultado;

switch(operation) {
    case "+":
        resultado= num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;    
    case "*":
        resultado= num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        resultado = "Operación no válida";          
}

console.log(resultado);


/**
 * Dados los productos:
 *
 * Calcula el precio total de todos los productos sumando los subtotales de cada uno (precio * cantidad).
*/

const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

/**

Usa una estructura condicional (if, else if, else) para mostrar un mensaje según el total:
Si el total es menor a 50, muestra "Puedes agregar más productos".
Si el total es entre 50 y 100, muestra "Estás cerca de tu límite de compra".
Si el total es mayor a 100, muestra "Has alcanzado el límite de tu compra".

Muestra el total y el mensaje en un único console.log.
*/


let mensajeABC;

//total = ;

// Cálculo subtotales
const subtotalA = productAPrice * productAQuantity
const subtotalB = productBPrice * productBQuantity
const subtotalC = productCPrice * productCQuantity

// Cálculo total
const total = subtotalA + subtotalB + subtotalC


// Lógica condicional
if (total < 50) {
  mensajeABC = 'Puedes agregar más productos'
} else if (total >= 50 && total <= 100) {
  mensajeABC = 'Estás cerca de tu límite de compra'
} else {
  mensajeABC = 'Has alcanzado el límite de tu compra'
}

console.log(`El total es: ${total}. ${message}`);


