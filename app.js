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

// const numeroUno = prompt("Ingrese un numero");
// const numeroDos = prompt("Ingrese otro numero");

// const suma = `La suma de los números ingresados es ${Number(numeroUno) + Number(numeroDos)}`;

// document.write(suma);

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


//✅ Nos pidieron un programa que permita ingresar el nombre de una playlist y el título de tres canciones, mediante los siguiente mensajes:

// ¿Cuál es el nombre de la playlist?
// ¿Cuál es la primera canción?
// ¿Cuál es la segunda canción?
// ¿Cuál es la tercera canción?
// Con está información el programa deberá mostrar el siguiente mensaje: Se ha creado la playlist {playlist} con las canciones {cancion1}, {cancion2}, {cancion3}

// const playlist = prompt('¿Cuál es el nombre de la playlist?');
// const cancion1 = prompt('¿Cuál es la primera canción?');
// const cancion2 = prompt('¿Cuál es la segunda canción?');
// const cancion3 = prompt('¿Cuál es la tercera canción?');

// alert(`Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2}, ${cancion3}`);

// ✅Necesitamos un programa que pida ingresar los siguientes datos de una dirección: calle, número, departamento, código postal, ciudad y país, mediante los siguiente mensajes respectivamente:

// ¿Cuál es la calle?.
// ¿Cuál es el número?.
// ¿Cuál es el departamento?
// ¿Cuál es el código postal?
// ¿Cúal es la ciudad?
// ¿Cúal es el país?
// Con está información el programa deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigoPostal}, {ciudad}, {pais}

// const calle = prompt('¿Cuál es la calle?.');
// const numero = prompt('¿Cuál es el número?.');
// const departamento = prompt('¿Cuál es el departamento?');
// const codigoPostal = prompt('¿Cuál es el código postal?');
// const ciudad = prompt('¿Cúal es la ciudad?');
// const pais = prompt('¿Cúal es el país?');

// alert(`Con está información el programa deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`);

// Necesitamos un programa que pida una cantidad de minutos con el siguiente mensaje:

//✅ Ingresá una cantidad de minutos.
// Con esta información, el programa deberá mostrar el resultado de la conversión en segundos mediante el mensaje: El resultado de la conversión de {minutos} minutos a segundos es: {resultado}

// const minutos = prompt('Ingresá una cantidad de minutos.');
// const resultado = Number(minutos)*60;

// alert(`El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}`)
