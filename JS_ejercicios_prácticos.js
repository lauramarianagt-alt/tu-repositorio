console.log("PRESENTACIÓN DE LAURA");

const myProfile = {
    name: "Laura",
    surname: "Guillén Toman",
    skills: ["Python", "Javascript", "VisualStudio", "Github"],
    devExperience: false,
    socialMedia: {
        name: "GITHUB",
        LINK: "https://github.com/lauramarianagt-alt",
    }

}

console.log(myProfile);
myProfile.freeze;



console.log("EJERCICIO 2: CAZADOR DE BUGS ================================");

function count_vowels(text) {
    const vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    let counter = 0;

    for(let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())){
            counter++;

        }
    }

    return counter;
}

const phrase = "Antes no programaba. Ahora sí!";
const phrase2 = "Las clases de JAVASCRIPT han sido muy interesantes"
const result = count_vowels(phrase);
const result2 = count_vowels(phrase2);
console.log(`La frase tiene ${result} vocales`);
console.log(`La frase tiene ${result2} vocales`);

/**  1. Identifica el bug: hace distinción entre mayúsculas y minúsculas
//  2. Explica el problema: - no detecta mayúscula. 
//.                         - el código nuevo transforma texto completo en minúsculas dando el resultado correcto.
//.                         - He hecho una modificación a la fuerza con las tildes también.
//  3. Arregla el código: DONE! 
//  4. Prueba con varios casos: DONE! */



console.log(" EJERCICIO 2.2 ==============================================");


function duplicateNumbers (numbers) {
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i] * 2; // aquí se modifica el valor, se MUTA el array original.
    }
    return numbers;
}

/** 
 1. La función opera sobre el parámetro de numbers directamente. 
    Al pasar el array a una función estás pasando una referencia al lugar de la memoria en el que está ubicado el array
    Es lo que ocurre en la línea 57, se modifica el valor por lo que acaba mutando
 2. "Pasar por la referencia" sería algo así como modificar el original, no se crea una copia de un original
   y se modifica el otro. Ambos "archivos" se modificarían. P.D: He intentado explicarlo como buenamente he podido
*/

const original = [1, 2, 3, 4, 5];
const duplicated = duplicateNumbers(original);
console.log(original);
const original2 = [3, 9, 11];
const duplicated2 = duplicateNumbers(original2);
console.log(original2);


// En este caso, la variable no está definida ya que se encuentra entre paréntesis y no en un array, por lo que .map no lo recorrería.

// Funcíon corregida ===>

function duplicateNumbers2(numbers){
    let result = []; //nuevo array
    for(let i = 0; i < numbers.length; i++){
        result.push(numbers[i] * 2);
    }
    return result;
}
const original3 = [1, 2, 3, 4, 5];
const duplicated3 = duplicateNumbers2(original3);

console.log("Original:", original3);
console.log("Duplicated:", duplicated3);
const ori = [5, 7, 8, 9, 10];
const oriOri = duplicateNumbers2(ori);
console.log(oriOri);

console.log("PROBLEMA VISTO EN CLASE");

// Estilo funcional con .map visto en clases:
console.log("BONUS .MAP ---->");
const numbers = [1, 2, 3, 4, 5];
const duplicateMap = numbers.map(num => num * 2);
console.log("Duplicado funcional", duplicateMap); 



console.log("EJERCICIO 3: TRANSFORMACIONES ================================");

const data = [
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["JavaScript", "HTML", "CSS"],
        proyectos: [
            {id: 1, nombre: "Proyecto 1"},
            {id: 2, nombre: "Proyecto 2"}
        ]
    },
    {
        id: 2,
        nombre: "María",
        habilidades: ["Python", "SQL", "Django"],
        proyectos: [
            {id: 3, nombre: "Proyecto 3"},
            {id: 4, nombre: "Proyecto 4"}
        ]
    },
    {
        id: 3,
        nombre: "Miriam",
        habilidades: ["UX", "Figma", "HTML", "JavaScript"],
        proyectos: [
            {id: 5, nombre: "Proyecto 5"},
            {id: 6, nombre: "Proyecto 6"}
        ]
    },

];

const devJS = data.filter(dev => dev.habilidades.includes("JavaScript"));
console.log(devJS);
// extrar un array con todos los nombres de proyectos sin duplicados

const everyProyects = []; // "aplanado"
data.forEach(dev => {dev.proyectos.forEach(proyecto => {
    if(!everyProyects.includes(proyecto.nombre)){
        everyProyects.push(proyecto.nombre);
    }
  });

});

/** const everyProyects = data.map(dev => dev.proyectos); ==> 
   al principio pensé en hacerlo así, pero entiendo que es un array de arrays
   aunque devuelva todos los proyectos
console.log(everyProyects); */



console.log("EJERCICIO 4: ARREGLAR BUG ASÍNCRONO ==========================");

function getUser(id) {
    let user;
    setTimeout (() => {
        if (id === 1) {
            user = { id: 1, name: "John Doe" };
        }
    }, 2000);
    return user;
}

const user = getUser(1);
console.log(user);


/**    TAREAS:
1. Identifica el problema: el orden de ejecución. Intenta usar un valor que aún no existe.
   La variable user todavía no tiene valor, por esod evuelve undefined.
2. Explica qué es asincronía y por qué causa este problema:
    - La asincronía permite realizar tareas largas y evitar un bloqueo integral.
    - setTimeout es una "cola de espera". Contrareloj para ejecutar una función.
    - Una función se ejecuta cuanto termina una operación.
3. Arréglalo usando Promises
4. Arréglalo tambien usando async/await */


console.log("ARREGLO CON PROMISES ---->");


function getUser2(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 1) {
                const user2 = { id: 1, name: "John Doe"};
                resolve(user2);

            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

const user2 = getUser2(1).then(user2 => console.log("Usuario (promise):", user2)).catch(error => console.error(error));

console.log("SOLUCIÓN CON ASYNC/AWAIT ---->");

async function showUser() {
    try {
        const user2 = await getUser2(1); 
         console.log("Usuario (async/await)", user2);
    } catch (error) {
        console.error(error);  
    }    
} showUser();

console.log("EJERCICIO 6: VALIDACIONES CON REGEX ==========================");

/** const formData = {
    
    email: "ana@example.com",
    password: "Pass123",
    phone: "+34 612 345 678",
    dni: "12345678A",
    birthdate: "15/03/1990",
}

// salida esperada:

{
    valid: true, // o false si hay errores
      errors [
        {field: "email", message: "Formato de email inválido"},
        {field: "password", message: "La contraseña debe tener al menos 8 caracteres"},
        //... más errores
      ];
        data: {
        email: "ana@example.com",
        password: "Pass123",
        phone: "+34 612 345 678",
        dni: "12345678A",
        birthdate: "15/03/1990",
        age: 35,
        //... más datos procesados

      }
    
}
*/


// Función principal: validateForm


function validateForm(data) {
    const result = {
        valid: true,
        errors: [],
        data: {
            email: "ana@example.com",
            password: "Pass123",
            phone: "+34 612 345 678",
            dni: "12345678A",
            birthdate: "15/03/1990",
        }
    };
    //Validar email:
    function validarEmail(email) {
        const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return {
            valido: patron.test(email),
            email
        };    
    };

    //Validar Password:
    function validatePwd(password) {
        const requirements = {
            longitud: password.length >= 8,
            mayuscula: /[A-Z]/.test(password),
            minusculas: /[a-z]/.test(password),
            numero: /\d/.test(password),
            especial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        }

  const valid = Object.values(requirements).every(r => r)
  return {
    valid,
    requirements,
    message: valid ? "Contraseña segura" : "Contraseña débil"
   };

   //Validar teléfono:
   function validarTelefonoES(telefono) {
    const patron = /^(\+34|0034)?[\s.-]?[6-7]\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}$/;
    if (patron.test(telefono)) {
        const limpio = telefono.replace(/[\s.-]/g, '').replace(/^(\+34|0034)/, '');
        return {
             valido: true,
             telefono: telefono,
             normalizado: `+34 ${limpio}`
            };
  }
  return {
    valido: false,
    telefono: telefono
  };

   //Validar DNI:
   function validarDNI(dni) {
    const patronDNI = /^\d{8}[A-Z]$/; // este patrón no lo he encontrado en los apuntes
       return {
        valido: patronDNI.test(dni),
        dni
    };

    //CALCULO DE EDAD:

    function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const mesNacimiento = nacimiento.getMonth();
        
        
        if (mesActual < mesNacimiento ||
            (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
                edad--;
  }
  
  return edad;
}
   }
}
    }
}

const data1 = {
    email: "ana@example.com",
    password1: "Pass123",
    phone: "+34 612 345 678",
    dni: "12345678A",
    birthdate: "15/03/1990"   
};

const data2 = {
    email: "laura@example.com",
    password1: "Pass567",
    phone: "+34 611 222 333",
    dni: "23456789B", 
    birthdate: "03/10/1995"  
};


const registros = [data1, data2];
const allOk = registros.every(data1 =>{
    const result = validateForm(data1);
    return result.valid;
});

console.log("¿Son todos correctos?:", allOk);



/**function validateForm(data) {
    const result = {
        valid: true,
        errors: [],
        data: {
            email: "ana@example.com",
            password: "Pass123",
            phone: "+34 612 345 678",
            dni: "12345678A",
            birthdate: "15/03/1990",
        }
    };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(data.email))
    { result.errors.push({ field: "email", message: "Formato no válido"});
} else {
    result.data.emailNormal = data.email.trim().toLowerCase(); // normalización con trim y evitar espacios y con toLowerCase convertis texto a minúsculas
}
}

//VALIDAR PASSWORD

/**function validatePwd(password) {

  const requirements = {
    longitud: password.length >= 8,
    mayuscula: /[A-Z]/.test(password),
    minusculas: /[a-z]/.test(password),
    numero: /\d/.test(password),
    especial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  }

  const valid = Object.values(requirements).every(r => r)

  return {
    valid,
    requirements,
    message: valid ? "Contraseña segura" : "Contraseña débil"
  }
}

// VALIDAR TELÉFONO

function validarTelefonoES(telefono) {
  // Acepta: +34 612345678, 612345678, 612 34 56 78, 612-345-678
  const patron = /^(\+34|0034)?[\s.-]?[6-7]\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}$/;

  if (patron.test(telefono)) {
    // Limpiar el teléfono
    const limpio = telefono.replace(/[\s.-]/g, '').replace(/^(\+34|0034)/, '');
    return {
      valido: true,
      telefono: telefono,
      normalizado: `+34 ${limpio}`
    };
  }

  return {
    valido: false,
    telefono: telefono
  };
}

// VALIDAR DNI:

const validarDNI = (dni) => {
    const patronDNI = /^\d{8}[A-Z]$/; 
    // este patrón no lo he encontrado en los apuntes
    return patronDNI.test(dni);
};
const DNIList = ["12345678A", "34566789B", "45678901C"];
const allOK = DNIList.every(dni => /^\d{8}[A-Z]$/.test(dni));
console.log(allOK); //devolvería un booleano y funciona 



// CÁLCULO DE EDAD: 
// Por esta parte ya me llamo Ana@example.com y tengo un TIC en el ojo


function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const mesNacimiento = nacimiento.getMonth();

  // Si aún no cumplió años este año
  if (mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}*/




// GRACIAS POR LOS EXTRA CONTENT!*/






