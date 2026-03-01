console.log("STRING METHODS");

// length, includes,trim, tolowercase, touppercase, charat, indexof
// slice, replace, chaining


let message = "Hello Keepcoding!     ";
let course = "Introducción a JavaScript";

console.log("Original:", message);
console.log("Curso:", course);


// LENGTH: Longitud de un string

const messageLength = message.length;
console.log(messageLength);
console.log(course.length);

// INCLUDES() - verificar si contiene texto:

console.log(course.includes("JavaScript"));

// caso práctico - cómo validar un email:

let testEmail = "user@keepcoding.com";
const tieneArroba = testEmail.includes("@");
const tienePunto = testEmail.includes(".");

if(tieneArroba && tienePunto) {
    console.log("Email válido");
} else {
    console.log("Email inválido");
}

// TRIM - elimina espacios al inicio y al final

console.log(`Original: ${message}`);
console.log(`Trim: ${message.trim()}`);

//toLowerCase - convertir en minúsculas:
console.log(message.toLowerCase());

const messageClean1 = message.trim().toLowerCase();
console.log(messageClean1);

// toUpperCase: convierte a mayúsculas:

const userInput =  "Keepcoding";
const correctAnswer = "KeepCoding";

console.log(userInput.toUpperCase());

if(userInput.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log("Las respuestas coinciden");
}

// CharAt() ---> obtener un carácter en una posición dada

let text = "Javascript";
console.log("charAt(6):", text.charAt(6));
console.log("charAt(0):", text.charAt(0));

// indexOf ---> buscar la posición de un carácter
console.log("En course, la letra a", course.indexOf("a"));
console.log(course.indexOf("Python"));

if(course.indexOf("JavaScript") !== -1) {
    console.log("Este curso es de JS");
} 

// slice() ---> Extraer parte de un string, recibe dos parámetros (inicio y final):

// let course = "Introducción a JavaScript";
console.log("slice(0,12):", course.slice(0, 12));
console.log("slice(17):", course.slice(17));
console.log("slice(- 10):", course.slice(-10));//-> desde el final


// caso práctico, extraer un nombre de usuario de un email:

let email = "ana.garcia@keepcoding.io";
let userName = email.slice(0, email.indexOf("@"));
console.log(userName);

// replace() ---> remplaza la PRIMERA ocurrencia dentro de un texto:
let greeting = "Hello World";
console.log(greeting);

const greetingReplace = greeting.replace("World", "Keepcoding");
console.log(greetingReplace);

const repeated = "hello hello hello";
console.log(repeated.replace("hello", "hi"));

//todas las ocurrencias
console.log(repeated.replaceAll("hello", "hi"));

//encadenar métodos:
let result = "  Javascript es alucinante!   "
   .trim()
   .toUpperCase()
   .replace("ALUCINANTE", "CHACHI");

   console.log(result);


//Método para pasar number strings a number   
const parseAge = parseInt("36");
console.log(parseAge);   








// === Conversor y analizador de texto

console.log("\nEJERCICIO CASA - Analizador de texto");

let texto = "   Me gusta aprender JavaScript cada día   ";

// 1. Eliminar espacios
let textoLimpio = texto.trim();
console.log("Texto limpio:", textoLimpio);

// 2. Mostrar en mayúsculas
// COMPLETAR
let upperCaseText = textoLimpio.toUpperCase();
console.log("Texto en mayúsculas:", upperCaseText);

// 3. Mostrar en minúsculas
// COMPLETAR
let lowerCaseText = textoLimpio.toLowerCase();
console.log("Texto en minúscula: ", lowerCaseText);

// 4. ¿Contiene la palabra "javascript"?
// COMPLETAR
let haveJavascript = textoLimpio.includes("JavaScript");
console.log("¿Contiene la palabra JavaScript?", haveJavascript );

// 5️. Mostrar los primeros 5 caracteres
// COMPLETAR
let firstFiveChars = textoLimpio.slice(0, 5);
console.log("Los primeros 5 caracteres son:", firstFiveChars);

// 6️. Tiene más de 20 caracteres?
// COMPLETAR
let more20 ;
if(textoLimpio.length > 20) {
    console.log(`Tiene más de 20 caracteres: ${textoLimpio.length}`);
} else {
    console.log(`Tiene menos de 20 caracteres: ${textoLimpio.length}`);
}
