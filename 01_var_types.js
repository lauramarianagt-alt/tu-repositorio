console.log("Hola Keepcoding");
console.log(" === 01. VARIABLES Y TIPOS DE DAToS");

// Declarar una variable
// let, const, var
let nombre;

// Asignar un valor
nombre = "Laura";

let apellido = "Guillén";

console.log(nombre);
console.log(apellido);
console.log(nombre, apellido);

const edad = 31;
console.log(edad);

// Diferencias entre let y const
const edad2 = 37;
console.log(edad2);

//VAR - forma antigüa no recomendada
var ciudad = "Madrid";
console.log(ciudad);

// reglas para nombrar variables
let miNombre = "Laura"; //camelCase
let mi_nombre = "Laura"; // snake_case
let nombre3 = "Laura"; // con número no al inicio
let _privado = "secreto"; // guión al inicio
let $precio = 23; // con signo de dólar
// No son adecuados: let 2nombre; let mi-nombre; const let

// las variables de tipo CONST no se RE-DECLARAN
const modulo = "Intro JS";

const modulo2 = "HTML Y CSS";
console.log(modulo);
console.log(modulo2);

// Buenas prácticas
// Nombres declarativos: precioProducto mejor

//magic number
const MAX_RETRY = 3;
console.log(MAX_RETRY);


const nombreUsuario = "Kevin";
const edadUsuario = 25;
const emailUsuario = "kevin@email.com";
const estaActivo = true;

console.log("Usuario: ", nombreUsuario);
console.log("Edad:", edadUsuario);
console.log("Email:", emailUsuario);

let userName = "Kevin", usrAge = 24, userEmail = "kevin@email.com";

console.log("User email", userEmail);

// TIPOS DE DATOS PRIMITIVOS (los más básicos de JS)

/*
1. Number (números)
2. String (texto)
3. Boolean ( true/false)
4. Undefined
5. Null
*/

// Tipo Number
console.clear();
console.log("Tipo Number");

const entero = 42;
const decimal = 34.1;
const negativo = -7;
const big = 1000000;

console.log("entero:", entero);
console.log("decimal:", decimal);
console.log("negarivo: ", negativo);
console.log("big:", big);

const infinito = Infinity;
const nan = NaN; // not a number

// TIPO STRING
const name1 = "Miriam";
const apellido2 = "San Antonio";
const frase = "Hola a todos, mi nombre es Laura";
const stringVacio = "";

console.log(name1, apellido2);
console.log(frase);

// TEMPLATE LITERALS

const nombreCompleto = "Laura Martínez";
const edadPersona = 28;

// concatenación de strings con el símbolo "+"

console.log("Hola, mi nombre es " + nombreCompleto + " y tengo " + edadPersona + " años");
    
const mensaje = `Hola mi nombre es ${nombreCompleto} y tengo ${edadPersona}`; // backtips, se loguea en consola

console.log(mensaje);

// Tipo boolean
console.log("Boolean (verdadero/falso)");

const esVerdadero = true;
const esFalso = false;

const mayorDeEdad = true;
const tienePermiso = false;

console.log("Es mayor de edad? ", mayorDeEdad);
console.log("tiene permiso para salir ", tienePermiso);

// Undefined
let sinValor;
console.log(sinValor);

// NULL
const valorNulo = null;
console.log("valor nulo: ", valorNulo);

console.clear();

// TYPEOF -> Se usa para comprobar qué tipo de valor tiene una variable

console.log("typeof 42:", typeof 42); // number
console.log("typeof 3.14:", typeof 3.14); //number
console.log("typeof hola:", typeof "hola");
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);

let valueNull = null;
console.log(valueNull === null); // true
console.log(typeof valueNull === null); //false

// con variables
const miNumero = 100;
const miTexto = "Javascript";
const miBoolean = true;

console.log(typeof miNumero);
console.log(typeof miTexto);
console.log(typeof miBoolean);

// Validación de datos
const nombreInput = "Ana García";
const edadInput = 25;
const emailInput = "ana.garcia@email.com";
const onlineInput = true;

console.log("validando datos de usuario...")
console.log("NOmbre es texto?", typeof nombreInput === "string");
console.log("Edad es número?", typeof edadInput === "number");
console.log("Está online?", typeof onlineInput === "boolean");


// conversión de tipos

//String a number
const textoNumero = "42";
console.log(typeof textoNumero);

const numero = Number(textoNumero);
console.log(typeof numero);

//Number a string
const valor = 100;
console.log("valor:", typeof valor);
const valorTexto = String(100);
console.log("valorTexto:", typeof valorTexto);

// conversión automática

console.log("'5' + 3: ", "5" + 3);
console.log("'5' + 3: ", "5" - 3);

/*
EJERCICIO 1:
Crea variables para almacenar la siguiente información de un producto:
- Nombre del producto (string)
- Precio (number)
- Disponible (boolean)
- Cantidad en stock (number)

Muestra toda la información con console.log
*/

let nameProduct = "notebook";
let price = 5;
let available = false;
let stock = 0;

console.log("El artículo: ", + nameProduct + " con el precio de: ", + price + " hay diponibles: ", + available + " disponible en stock ", + stock);

let nombreProducto = "ordenador";
let precio = 990;
let disponible = true;
let cantidadStock = 200;

console.log("Nombre: ", nombreProducto);
console.log("Precio: ", precio);
console.log("Disponible: ", disponible);
console.log("Cantidad Stock: ", cantidadStock);

let nameProducts='Infinix Zero 30';
let costProduct=34.5;
let availability= true;
let inStock = 34
console.log(`El producto ${nameProducts}, tiene un precio de ${costProduct}. actualmente se encuentra disponible ${availability}`);
console.log(`Actualmente se encuentra disponible ${availability}, con un stock de ${inStock}`);
