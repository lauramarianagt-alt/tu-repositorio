console.log("TRUTHY Y FALSY");

// En Js todos los valores se pueden evaluar como true o false, 
// Es útil para condiciones

// 6 valores falsy


//FALSE

if(false) {
    console.log("esto NO se ejecuta");
} else {
    console.log("Si se ejecuta");
}


// el número 0
if (0) {
    console.log(" no se ejecuta 0");
} else {
    console.log("0 es falsy");
}


// string vacío
const emptyString = "";
if(emptyString) {
    console.log("empty string no se ejecuta");
} else {
    console.log("si se ejecuta");
}

//null
if(null) {
    console.log("esto no se ehecuta");
} else {
    console.log("null es falsy");
}


//undefined
const value1= undefined;
const message1 = value1 ? "Existe el value1" : "No existe value1";
console.log(message1);


// NaN ( not a number
if(NaN) {
    console.log("esto no se ejecuta");
} else {
    console.log("NaN es falsy");
    console.log(typeof NaN);
}


// TODO LO DEMÁS ES TRUTHY...

//cualquier número diferente de 0
if(42) {
    console.log(" 42 es truthy");
}

if(-5) {
    console.log("-5 es truhty");
}

// cualquier string diferente de string vacío ( o con vacío)

const saludo = " ";
if (saludo) {
    console.log(" Mi crush me ha saludado!");
}

if("0") {
    console.log(" 0 en string es truhty");
}

// true (obvio)
if(true) {
    console.log("true es truthy");
}

//caso de validación de usuario

let userName = "";

if(userName) {
    console.log(`Hola $(userName)`);
} else {
    console.log("Por favor, introduzca username");
}

// validación de edad
let age = 0;

if (age) {
    console.log(`Tu edad es ${age}`);
} else {
    console.log("No hay edad");
}

if(age !== undefined && age !== null) {
    console.log(`tu edad es ${age}`);
} else {
    console.log("No hay edad");
}

// Nullish Coalescing(??)

// Solo considera null y undefined como "vacíos"

const displayAge = age ?? "Age not provided";
console.log(displayAge);


const config1 = { timeout: 0 };
const config2 = { timeout: null} ;
const config3 = {};

console.log("Con ||:", config1.timeout || 3000);
console.log("Con ??:", config2.timeout ?? 3000);

// Valores que confunden: string "false" y "0"

// Negación !
let value = "";
if(!value) {
    console.log("No hay valor");
} else {
    console.log("Value tiene contenido");
}

