console.log("OPERADORES");

// Qué son los operadoes
/**
 * Son símbolos que nos permiten realizar operaciones con valores y variables
 * 
 * sumar, restar, dividir, multiplicar
 */

//Operadores aritméticos

// realizan operaciones matemática básicas

const suma = 5 + 3;
console.log(suma);

const precio1 = 100;
const precio2 = 5;
const total = precio1 + precio2;
console.log("total: ", total);

// resta
const resta = 10 - 4;
console.log(resta);

const saldo = 1000;
const gasto = 2500;
const saldoRestante = saldo - gasto;
console.log("saldoRestante: ", saldoRestante);

//multiplicaciones
const multiiplicacion = 5 * 4;
console.log(multiiplicacion);

//división
const division = 20 / 4;
console.log(division);

// Módulo (%) - resto de una división
const modulo = 10 % 3;
console.log("10 % 3 = ", modulo);

//Caso práctico si es par o impar
const numero = 17;
const resto = numero % 2 === 0;
console.log(resto);

// potencia
const potencia = 2 ** 3;
console.log(potencia);

/**
 * orden de mayor a menor prioridad
 * 1. Paréntesis ()
 * 2. Potencia **
 * 3. Multiplicación, división, módulo
 * 4. Sumas y restas
 */

// OPERADORES DE ASIGNACIÓN
//asignación simple
let x = 10;

//asignación. con suma (+-)
let puntos = 100;
console.log(puntos);

puntos +- 50;
console.log("despues de +- 50", puntos);

// asignación con resta

let vidas = 5;
console.log(vidas);

vidas -= 2;
console.log("despues de -= 2: ", vidas);

// OPERADORES DE COMPARACIÓN
//IGUALDAD

//igualdad laxa (no)
console.log("5 == 5:", 5 == "5");
console.log(true == 1);

//comparación estricta === compara tipo y valor

console.log("5 == 5:", 5 === "5");
console.log(true === 1);

// desigualdad !=  !==
console.log(5 != 3); //true

//estricto
console.log(5 !== 3); //true

// MAYOR QUE >

console.log(5 > 3); //true
console.log("10 >= 10", 10 >= 10); //true

// MENOR QUE <

console.log(1 < 8); // true
console.log("1 <= 8", 1 <= 8); // true

// CASO PRÁCTICO
 const edadUsuario = 17;
 const esMayor = edadUsuario >= 18;

 console.log(`Edad ${edadUsuario} es mayor de edad?:`, esMayor);

 console.clear()

 // OPERADORES LÓGICOS
 // AND (&&) Y OR (||)

 //AND -> todas las condiciones han de ser verdaderas

 console.log(true && true && true);
 console.log(true && false);
 console.log (false && false);

 const tieneEdad = true;
 const tienePermiso = true;
 const puedeEntrar = tieneEdad && tienePermiso;
 console.log("Puede entrar?", puedeEntrar);

 // OR (||) -> una de ellas es verdadera

 console.log(true || true); //true
 console.log(true ||false); //true
 console.log(false || false); //false

const esAdmin = false;
const esModerador = true;
const esUser = false;
const tieneAcceso = esAdmin || esModerador || esUser;
console.log("Tiene acceso?", tieneAcceso);

// NOT (!) -> invertir el valor de un booleano
console.log("!true", !true);
console.log("!false", !false);

const estaLogueado = false;
const noEstaLogueado = !estaLogueado;
console.log("El usuario está logueado?", noEstaLogueado);

//OPERADOR DE NEGACIÓN
// !valor -> lo convierte en boolean y lo niega
// !!valor -> lo convierte en booleano sin negarlo

//COMBINACIONES DE OPERADORES
const edad3= 20;
const tieneLicencia = true;
const puedeConducir = (edad3 >= 18) && tieneLicencia;

console.log("Puede conducir?", puedeConducir); // false

const esEstudiante = true;
const esTrabajador = false;
const tieneDescuento = esEstudiante || esTrabajador;
console.log("¿Tiene descuento?:", tieneDescuento); // true

console.clear();

// Operadores incremento y decremento

let contador = 0;
console.log("contador", contador);

contador++;
console.log("contador incremento 1", contador);

// decremento

let vidas2 = 5;
console.log("vidas: ", vidas2);

vidas2--;
console.log("vidas decremento 1", vidas2);

// delante o después:

let a = 5;
console.log("a++", a++);// 5 (muestra el valor y luego lo incrementa);

console.log("a++", a); // 6

let b = 5;
console.log("++b", ++b);
console.log("b final: ", b);
