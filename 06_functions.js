console.log("FUNCIONES");

//Declaración de funciones
/**
 * function nombreDeFuncion(){
 * 
 * }
 */

function saludo() {
    console.log("Hola y bienvenido a Keepcoding");
}
saludo();

//Parámetros que vamos a utilizar dentro de la función
function saludar_usuario(name) {
    console.log(`Hola, ${name}, bienvenido!`);
}
saludar_usuario("Alicia");
saludar_usuario("Laura");

// Calcular precio con descuento
function calcular_descuento(price, discount) {


    if(discount === 100){
        console.log("Enhorabuena, este producto es gratis");
        return;
    }

    const precio_final = price - (price * discount / 100);
    console.log(`Precio original: ${price} €. Descuento: ${discount} %. Precio final: ${precio_final} €`);
}

calcular_descuento(100, 10);
calcular_descuento(100, 25);
calcular_descuento(95, 100);

// === Return ===

function calcular_total(price, cantidad) {
    return price * cantidad;
}

let subtotal = calcular_total(10, 3);
let tax = subtotal * 0.21;
let total = subtotal + tax;

console.log(`Subtotal ${subtotal} €. Tax: ${tax.toFixed(2)}. Total: ${total.toFixed(2)}`);


// Verificador de contraseña:
// Comprobar que tenga una longitud mínima de 8
// Números del 0 al 9, mayus y minus

function comprobar_password(password) {

   // 1. Verificar que tiene longitus minima de 8 charts
   if(password.length < 8) {
    return "Contraseña muy corta!";
   } 

   let has_number = false;
   if(password.includes("0") || password.includes("1") ||
   password.includes("2") || password.includes("3") ||
   password.includes("4") ||
   password.includes("5") || password.includes("6") ||
   password.includes("7") || password.includes("8") ||
   password.includes("9")) {
    has_number = true;
   }

   // 2. Verificar si contiene número
   if(!has_number) {
    return "La contraseña debe tener un número al menos";
   }

   // 3. Verificar si contiene mayúsculas
   const has_upper_case = password !== password.toLowerCase();
   if(!has_upper_case){
    return "La contraseña debe tener al menos una mayúscula";
   }

   //Verificar si contiene minúsculas

   const has_lower_case = password !== password.toUpperCase();
   if (!has_lower_case) {
    return "La contraseña debe tener al menos una minúscula"
   }

   return "Contraseña es válida";



}

console.log(comprobar_password("abcdef"));
console.log(comprobar_password("Absoffiudh"));
console.log(comprobar_password("abcdefgh1"));
console.log(comprobar_password("ABCDEFGH1"));


// Early return: salida temprana de una función:
function ejemplo_vacio() {
    console.log("Paso 1");

    return;
    console.log("Paso 2");
}

ejemplo_vacio();

function validar_edad(age) {
    if(age < 18) {
        console.log("Eres menor de edad");
        return;
    }

    console.log("puedes continuar");
}
validar_edad(15);
validar_edad(25);


// para evitar if encadenados:
function procesarPago(cantidad) {
    if(cantidad <= 0) {
        console.log("Cantidad inválida");
        return;
    }

    if(cantidad > 1000) {
        console.log("No puedo procesar tanto dinero");
        return;
    }
    console.log(`Procesando pago de ${cantidad} €.`)
}

procesarPago(0);
procesarPago(3000);
procesarPago(400);

//Es más limpio, reduce anidaciones if..else if..else
    //Mejora la legibilidad del código


// 1. Error con return implícito
const sumar = (a, b) => a + b;

console.log("Suma:", sumar(4, 6));


// 2. Error con paréntesis faltantes
const saludar = (nombre, apellido) => {
  return "Hola " + nombre + " " + apellido;
};

console.log(saludar("Ana", "López"));


// 3. Error llamando antes de definir

const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 5));


// 4. Error lógico
const esPar = numero => {
  if (numero % 2 === 0) {
     return("Es par");
  } else {
     return("Es impar");
  }
};

console.log(esPar(4));

/*
Vamos a crear un sistema sencillo para validar una reserva de hotel.

Un cliente quiere reservar una habitación y debemos comprobar:

Su nombre

Número de noches

Precio por noche

Si tiene código de descuento
*/

const nombre = "Laura";
const noches = 3;
const precioPorNoche = 100;
const codigoDescuento = "DESC10";

// Nombre: validar que sea mayor de 3 caracteres y que no sea vacío
// Número de noches: mayor de 0
// Precio por noche: mayor de 0
// Código de descuento, si existe y es DESC10, aplicar un 10% descuento al precio total
// Pista: crear varias minifunciones que hagan las validaciones, y aplicar early return



const validateReservation = (
  nombre,
  noches,
  precioPorNoche,
  codigoDescuento,
) => {
  if (!validateName(nombre)) {
    return 'Nombre no válido'
  }
  if (!validateNights(noches)) {
    return 'Noches no válidas'
  }
  if (!validatePrice(precioPorNoche)) {
    return 'Precio no válido'
  }
  if (!validateDiscount(codigoDescuento)) {
    return 'Código descuento no válido'
  }
  const totalPrice = getTotalPrice(noches, precioPorNoche)
  const discount = getDiscount(noches, precioPorNoche)
  return `El precio total es de ${totalPrice}€, con un descuento es de ${discount}€`
}

const validateName = name => name.length > 2

const validateNights = nights => nights > 0

const validatePrice = price => price > 0

const validateDiscount = discountCode =>
  discountCode === 'DESC10' ? true : false

const getTotalPrice = (nights, pricePerNight) => nights * pricePerNight

const getDiscount = (nights, pricePerNight) => {
  const totalPrice = getTotalPrice(nights, pricePerNight)
  return totalPrice * 0.9
}

console.log(
  validateReservation(nombre, noches, precioPorNoche, codigoDescuento),
);


function validarNombre(nombre) {
  return nombre.trim().length >= 3;
}

function validarNoches(noches) {
  return noches > 0;
}

function validarPrecio(precio) {
  return precio > 0;
}

function calcularTotalHotel(noches, precio) {
  return noches * precio;
}

function aplicarDescuento(total, codigo) {

  if (codigo === "DESC10") {
    return total * 0.9;
  }

  return total;
}

function procesarReserva(nombre, noches, precio, codigo) {

  if (!validarNombre(nombre)) {
    console.log("Nombre inválido");
    return;
  }

  if (!validarNoches(noches)) {
    console.log("Número de noches inválido");
    return;
  }

  if (!validarPrecio(precio)) {
    console.log("Precio inválido");
    return;
  }

  let total = calcularTotalHotel(noches, precio);
  total = aplicarDescuento(total, codigo);

  console.log(`Reserva confirmada para ${nombre}`);
  console.log(`Total a pagar: ${total}`);
}


procesarReserva(nombre, noches, precioPorNoche, codigoDescuento);