//Ejercicio 01

// Declarar variables con datos de un usuario (user, age, email)
// Mostrar estos datos por consola
// Mostrar el tipo de dato de cada variable por consola

// let user = "Maria";
// let age = 28;
// let email = "maria28@gmail.com";

// console.log(user);
// console.log(age);
// console.log(email);

// console.log(typeof user);
// console.log(typeof age);
// console.log(typeof email);

// Ejercicio 2:
// Pedir al usuario sus datos personales (nombre, edad, pais, profesion)
// Mostrar esos datos por consola usando concatenacion
// Mostrar por consola la edad + 10

// let nombre = prompt("Ingrese su nombre");
//let edad = prompt("Ingrese su edad");
// let pais = prompt("Ingrese su pais de origen");
// let profesion = prompt("Ingrese su profesion");

// const mensaje = `${nombre} tiene ${edad} años, es de ${pais} y trabaja de ${profesion}`;

// console.log(mensaje);

//console.log(Number(edad) + 10);

// Ejercicio 3:
// Tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert (hagan de a uno por vez, comentando y probando) y utilizar template literals. Recordar: document.write() y alert()

//alert(`${user} tiene ${age} años y su email es ${email}`);
//document.write(`${user} tiene ${age} años y su email es ${email}`);


// Ejercicio 4:
// Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico. Ejemplo: El resultado de la suma es: ${resultado}

const numeroUno = prompt("Ingrese un numero");
const numeroDos = prompt("Ingrese otro numero");

const suma = `La suma de los números ingresados es ${Number(numeroUno) + Number(numeroDos)}`;

document.write(suma);

// const resta = `La  de resta los números ingresados es ${Number(numeroUno) - Number(numeroDos)}`;

// console.log(resta);

// const division=`La division de los números ingresados es ${Number(numeroUno)/ Number(numeroDos)}`

// console.log(division);

// const multiplicacion=`La multiplicacion de los números ingresados es ${Number(numeroUno)*Number(numeroDos)}`

// console.log(multiplicacion);


// Bonus:
// A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo. Mostrar por consola y analizar que paso en cada caso. Obtuviste los resultados esperados?

// const numeroUno = prompt("Ingrese un numero");
// const numeroDos = prompt("Ingrese otro numero");


// const suma = `La suma de los números ingresados es ${Number(numeroUno) + Number(numeroDos)+ 10}`;

// console.log(suma);

// const resta = `La  de resta los números ingresados es ${Number(numeroUno) - Number(numeroDos) - 10}`;

// console.log(resta);

// const division=`La division de los números ingresados es ${Number(numeroUno)/ Number(numeroDos)/ 10}`

// console.log(division);

// const multiplicacion=`La multiplicacion de los números ingresados es ${Number(numeroUno)*Number(numeroDos)* 10}`

// console.log(multiplicacion);

