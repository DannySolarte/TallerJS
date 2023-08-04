// operadores aritmeticos

//1. Calcular la suma de dos números e imprimir el resultado.

// let numero = parseInt(prompt("Ingrese el primer numero: "));
// let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
// let resultado = numero + numero2;
// alert ("La suma es: " + resultado)

//2. Calcular el precio total de una compra que incluye 3 artículos con diferentes precios y cantidades. A la compra le aplicaremos el 10% de impuestos.

// let articulo1 = parseInt(prompt("Ingrese el precio del articulo 1: "));
// let articulo2 = parseInt(prompt("Ingrese el precio del articulo 2: "));
// let articulo3 = parseInt(prompt("Ingrese el precio del articulo 3: "));
// let suma = articulo1 + articulo2 + articulo3
// let impuesto = suma*0.1;
// alert("El total de los articulos es: " + suma + " mas 10% de impuestos: " + impuesto);
// alert("El total a pagar es: " + (suma+impuesto))

//3. Calcular el monto de propina a dejar en un restaurante basado en el costo total de la comida y el porcentaje de propina 15%.

// let consumo = parseInt(prompt("Ingrese el valor del consumo"))
// let propina = consumo*0.15;
// alert ("La propina que debe dejar es de: " + propina)

//4. Calcular el IMC de una persona utilizando su peso en kilogramos y su altura en metros.

// let peso = parseFloat(prompt("Ingrese su peso"))
// let altura = parseFloat(prompt("Ingrese su altura"))
// let imc = peso/Math.pow(altura,2)
// alert("Su indice de masa corporal es: " + imc)

//___________________________________________________________________________________________________________________________________________________________

// Operadores de asignacion

//1. Multiplica un número por 2 utilizando un operador de asignación

// let num = parseFloat(prompt("Ingrese el numero a multiplicar por 2"));
// alert("El resultado es: " + (num * 2));

//2. Utiliza operadores de asignación para actualizar una variable equivalente a sumas y multiplicación.
// let suma = 30;
// suma+=22;
// let numeromulti = 10;
// numeromulti *= 5;
// alert (suma)
// alert (numeromulti);

//___________________________________________________________________________________________________________________________________________________________
// Condicional if

//1. Verifica si un número es par o impar y muestra un mensaje.

// let num = parseInt(prompt("Ingrese un numero entero"))
// if (num%2 === 0){
//     alert ("El numero es par")
// } else {
//     alert ("El numero es impar")
// }

//2. 2.	Calcula el bono de un empleado según su rendimiento siendo mayor o igual a 90 = bono de 500 Mayor o igual de 80 = bono de 300 Menor a 80 de bono de 100

// let valor= parseInt(prompt("Ingrese valor de sus ventas del mes"))
// if (valor >= 90){
//     alert ("Ganaste un bono de 500")
// } else if (valor >= 80){
//     alert("Ganaste un bono de 300")
// }else{
//     alert ("Ganaste un bono de 100")
// }

//3. Simula un cajero automático para retirar dinero con límite de saldo.

// let totalEnCuenta = 1000;
// alert("Saldo en la cuenta: " + totalEnCuenta)
// let retiro = parseInt(prompt("Ingrese el valor a retirar: "));
// if (retiro<=totalEnCuenta){
//     alert ("Retiro exitoso")
//     alert ("Saldo en tu cuenta: " + (totalEnCuenta - retiro))
// } else {
//     alert("Fondos insuficientes")
// }

//___________________________________________________________________________________________________________________________________________________________

// Bucle for

//1. Utiliza un bucle for para contar desde 1 hasta un número dado capturado con un prompt.

// let num = parseInt(prompt("Ingrese numero a contar"));
// for (let i = 1;i <= num;i++){
//     document.write(i + "- ")
// }

//2. Imprime un patrón de números triangulares

// const num = parseInt(prompt("Ingrese numero"));
// for (let i = 1;i<=num;i++){
//     let linea = "";
//     for (let j = 1;j<=i;j++){
//         linea+= j + " ";
//     }
//     console.log(linea);
// }

//3. Categoriza los números de un arreglo en un rango como positivos, negativos o cero.

// let positivo = [];
// let negativo = [];
// let cero = [];
// alert ("Ingrese 5 numeros enteros")
// for (let i = 1;i<=5;i++){
//     let num = parseInt(prompt("Ingrese numero "+ i))
//     if (num >= 1){
//         positivo.push(num)
//     } else if (num<0){
//         negativo.push(num)
//     }else{
//         cero.push(num)
//     }
// }
// alert("Ingresaste estos numeros positivos: " + positivo)
// alert("Ingresaste estos numeros negativos: " + negativo)
// alert("Ingresaste estos ceros: " + cero)

//4. Verifica si una palabra es un palíndromo (se lee igual de izquierda a derecha y viceversa)

// let palabra = prompt("Ingrese palabra");
// let palabra1 = "";
// for (var i = palabra.length - 1; i >= 0; i--) {
//     palabra1 += palabra[i];
// }
// if (palabra == palabra1){
//     alert("La palabra es palindromo")
// } else {
//     alert ("La palabra no es palindromo")
// }

//5. Busca y muestra la posición de un carácter específico en una cadena.

//___________________________________________________________________________________________________________________________________________________________

//Bucle While

//1. Realiza un conteo regresivo desde un número dado hasta 1

// let num = parseInt(prompt("Ingrese numero"));
// let contador = num;
// while(contador=num){
//     console.log(num)
//     num = num -1;
// }

// 2. Imprime un patrón de asteriscos

// let num = parseInt(prompt("Ingrese un numero de filas a imprimir"))
// let asteriscos = "";
// let contador = num;
// while (contador=num){
//     asteriscos = asteriscos + "*";
//     console.log(asteriscos)
//     num=num-1
// }

//3. Crearemos un programa que permita a un profesor registrar las notas de los estudiantes, calcular el promedio de cada estudiante y el promedio de toda la clase.

let numalumnos = parseInt(prompt("Ingrese el numero de alumnos de su clase"))
let consulta = numalumnos;
let nombres = [];
let notas = [];
let contador = numalumnos;
let cont = 1;
while(contador = numalumnos){
    nombres.push(prompt("Ingrese nombre del alumno " + cont))
    let nota1 = parseFloat(prompt("Ingrese nota 1"))
    let nota2 = parseFloat(prompt("Ingrese nota 2"))
    let nota3 = parseFloat(prompt("Ingrese nota 3"))
    let notafinal = (nota1 + nota2 + nota3) / 3
    console.log(notafinal)
    notas.push(notafinal)
    numalumnos = numalumnos - 1;
    cont++;
}
let promedio = 0;
let sumapromedio = 0;

for(let i=0;i<consulta;i++){
    alert ("El alumno " + nombres[i] + " tiene un promedio de " + notas[i])
    promedio = notas[i];
    sumapromedio = sumapromedio + promedio;
}
 let total = sumapromedio/consulta;

alert ("El promedio de la clase es " + total)


