// console.log("Hola, soy console log.");

// console.log("Hola, soy otro console log.");

// let numero = 55;
// const numero2 = 100;

// numero = 44;

// numero = 22;

// numero = 53;

// console.log(numero)
// console.log(numero2)

////////////////////////////////////////
//JAVASCRIPT 25/03/2024/////////////////
////////////////////////////////////////

//1DECLARACION DE VARIABLES Y OPERACIONES BÁSICAS

// let numero1 = 544;

// let numero2 = 455;

// console.log(numero1 + numero2);

// let resultado = numero1 + numero2;

// resultado = 100;

// console.log(resultado)

//2OPERACIONES BÁSICAS ARITMÉTICAS

// let numero1 = 100;
// let numero2 = 500;

// let resultado = numero1 - numero2
// console.log("El resultado de la resta es.... ", resultado)

// resultado = numero1 + numero2
// console.log("El resultado de la suma es....", resultado)

// resultado = numero1 * numero2
// console.log("El resultado de la multiplicacion es....", resultado)

// resultado = numero1 / numero2
// console.log("El resultado de la division es.....", resultado)

// //MÓDULO

// resultado = 17 % 2;
// console.log("El resultadod del módulo es.....", resultado)

// //Cerciórate de si un número es par o impar

// if(resultado !== 0){

//     console.log("No se trata de un número par.")

// }

//ESTRUCTURA DE CONTROL DE PROGRAMACIÓN CONDICIONAL "IF"

// let nombre = "Pepe"

// if(nombre === "Daniel"){

//     console.log("Hola Daniel")

// }else{

//     console.log("Tu no eres Daniel")
// }

// let numero1 = 10;

// let numero2 = 35;

// let resultado = numero1 + numero2;

// if(resultado > 80){
//     console.log("Si, resultado es mayor que 20")
// }

//OPERACIONES ARITMETICAS DE INCREMENTO Y DECREMENTO

// let numero = 5;

// numero++;
// console.log(numero)

// numero--;
// console.log(numero)

// let numero = prompt("Dime el número que quieras");

// if(numero > 10){
//     console.log("El número es mayor a 10.")
// }

//NEGACION UNARIA Y UNARIO POSITIVO

// let numero = 5;

// let numero2 = -2;

// console.log(-numero2);

//OPERADORES LÓGICOS

//&& ... and...(si)

// let numero = 10;

// if((numero > 2) && (numero < 20)){
//     console.log("Hola, habremos entendido esto??")
// }

// // || .... or...(o)

// let numero2 = 20;

// if((numero2 > 1000) || (numero2 < 21)){
//     console.log("Hola, esto también????")
// }

// let variable3 = false;

// if(!variable3){
//     console.log("esto saldría???")
// }

//OPERACIONES DE ASIGNACIÓN

// let numero = 1;
// let numero2 = 50;

// //Esto sería una forma
// numero = numero + 10;

// //Esto sería otra equivalente y un poco más "pro"
// numero += 10;

//esto es válido para todas las operaciones artiméticas....

/*

    < Menor que
    <= Menor igual que
    == Igual
    > Mayor que
    >= Mayor o igual ue
    != Diferente
    === Estrictamente igual
    !== Estrictamente diferente

*/

// let a = 5;

// let b = "5";

// if(a == b){
//     console.log("son iguales")
// }

// if(a === b){
//     console.log("son estrictamente iguales")
// }

// let c = 5150;

// let d = "5150";

//REPASO DE ESTRUCTURAS DE CONTROL

// let a = 3;

// if(a >= 5){
//     console.log(a, "hola ....")
// }

// if(a >=5){
//     console.log(a, "hola, soy mayor o igual que 5.....")
// } else {
//     console.log(a, "soy menor que 5")
// // }

// if(a >= 5){
//     console.log("A es mayor o igual que 5")
// } else if (a === 3){
//     console.log("A es 3")
// } else {
//     console.log("A es menor que 5")
// }

// let total_compra = 300;

// if(total_compra >= 250){
//     console.log("Los gastos de envio son gratuitos")
// } else if (total_compra === 350){
//     console.log("Gastos gratuitos y un ejemplar de prueba valorado en 20 euros")
// } else {
//     console.log("Los gastos de envio son 15 euros")
// }

// //ESTO SERÍA UNA MALA PRÁCTICA, CONOCIDA COMO CASTILLO DE ELSE IF
// let nombre = "Pepito"

// if(nombre === "Juan"){
//     console.log("Hola ", nombre)
// } else if (nombre === "Manolo"){
//     console.log("Hola ", nombre)
// } else if (nombre === "Luis"){
//     console.log("Hola ", nombre)
// } else if (nombre === "Mario"){
//     console.log("Hola ", nombre)
// } else {
//     console.log ("Hola, no te conozco")
// }

// //NO SE RECOMIENDA USAR ELSE IF CUANDO SE TRATA DE MÁS DE DOS CASOS

//ESTRUCTURA CONDICIONAL.... SWITCH

// let nombre = "Daniel";

// switch (nombre) {
//   case "Roberto":
//     console.log("Hola ", nombre);
//     break;

//   case "Daniel":
//     console.log("Hola ", nombre);

//     break;

//   case "Julián":
//     console.log("Hola ", nombre);

//     break;

//   case "Marcos":
//     console.log("Hola ", nombre);
//     break;

//   default:
//     console.log("No conozco a nadie...");
// }

// //SWITCH ES RECOMENDADO CUANDO SE TRATA DE ANALIZAR MUCHOS CASOS...

// let edad = 2
// let pelicula = "El Rey León"

// if(pelicula === "El Rey León"){

//     if(edad >= 4){
//         console.log("Calienta las palomitas ven a disfrutar")
//     }else {
//         console.log("Lo sentimos mucho pero no puedes ver la película")
//     }

// } else {
//     console.log("No hay otra peli")
// }

//FORMA MODERNA DE ESCRIBIR UN IF ELSE..LLAMADA....TERNARIA

// let nombre = "Anna"

// if(nombre === "Anna"){
//     console.log("Hola Anna")
// } else {
//     console.log("No te conozco")
// }

// nombre === "Anna" 
//     // El interrogante corresponde al SI o TRUE
//     ? console.log("Hola Anna") 
//     // Los dos puntos corresponden al ELSE o FALSE
//     : console.log("No te conozco")


//MÉTODO PARSEINT

// let numero = "665"

// console.log(typeof(numero))

// numero = parseInt(numero)

// console.log(typeof(numero))

let nombre = "Manolin"
let numero = 5555555
let interruptor = false
let numeroComplejo = 55.6

console.log(typeof(nombre))
console.log(typeof(numero))
console.log(typeof(interruptor))
console.log(typeof(numeroComplejo))


//SIGUIENTE SESION..... DATOS COMPLETOS.....