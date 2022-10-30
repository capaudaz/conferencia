// Ejercicios JavaScript Nivel 1

// Ejercicio 1
// let miNombre = "Marcos Antonio";
// let miApellido = "Riquelme Virgala";
// let miComision = "22582";
// let misHobbies = "Ver peliculas, ver series, videogames, tenis";
// console.log("Mi nombre es:", miNombre);
// console.log("Mi apellido es:", miApellido);
// console.log("Mi comisión es:", miComision);
// console.log("Mis hobbies son:", misHobbies);

// Ejercicio 2
// let frase = prompt("Ingrese una frase:");
// console.log("Su frase es:", frase);

// Ejercicio 3
// let suNombre = prompt("Ingrese su nombre");
// console.log("Hola", suNombre, "!");

// Ejercicio 4
// let suNombreApellido = prompt("Ingrese su nombre y apellido");
// console.log(suNombreApellido);

// Ejercicio 5
// let suEdad = prompt("ingrese su edad");
// console.log("tienes", suEdad, "años");

// Ejercicio 6
// let suPeso = prompt("Ingrese su peso");
// let suAltura = prompt("Ingrese su altura");
// suPeso = parseFloat(suPeso);
// suAltura = parseFloat(suAltura);
// let bmi = suPeso / (suAltura*suAltura);
// console.log("Su BMI =", bmi);

// Ejercicio 10
// let variable = false;
// console.log("boolean:", variable);
// variable = 'Hola';
// console.log("String:", variable);
// variable = 0;
// console.log("Number:", variable);
// variable = 'Minions';
// console.log("String:", variable);

// Ejercicio 11
// let base = prompt("Ingrese la base en cm");
// let altura = prompt("Ingrese la altura en cm");
// base = parseFloat(base);
// altura = parseFloat(altura);
// let perimetro = altura + base + (Math.sqrt((altura*altura)+(base*base)));
// let superficie = (base * altura) / 2;
// console.log("Base:", base);
// console.log("Altura:", altura);
// console.log("Perímetro:", perimetro);
// console.log("Superficie:", superficie);

// Ejercicio 12
// let suPesoLibras = prompt("Ingrese su peso en libras");
// suPesoLibras = parseFloat(suPesoLibras);
// let suPesoKilos = suPesoLibras * 0.4536;
// console.log("Su peso en libras de", suPesoLibras, "son", suPesoKilos, "kilogramos");

// Ejercicio 13
// let suSueldo = prompt("ingrese su sueldo");
// suSueldo = parseFloat(suSueldo);
// console.log("Su sueldo de", suSueldo, "con un aumento de 15% queda en", suSueldo*1.15);

// Ejercicio 14
// let notaAlumno = prompt("Ingrese nota alumno");
// notaAlumno = Number(notaAlumno);
// if(notaAlumno > 7){
//     alert("Alumno Aprobado");
// }else{
//     alert("Alumno Desaprobado");
// }

// Ejercicio 16
// let matriculaAlumno = prompt("Matricula alumno");
// let nota1 = prompt("Nota 1");
// let nota2 = prompt("Nota 2");
// let nota3 = prompt("Nota 3");
// let nota4 = prompt("Nota 4");
// let nota5 = prompt("Nota 5");
// let promedioAlumno = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4)+Number(nota5))/5;
// if(promedioAlumno >= 7){
//     console.log("Matricula:", matriculaAlumno, "APROBADO con promedio:", promedioAlumno);
// }else{
//     console.log("Matricula:", matriculaAlumno, "DESAPROBADO con promedio:", promedioAlumno);
// }

// Ejercicio 17
// let numero1 = prompt("Ingrese primer número");
// let numero2 = prompt("Ingrese segundo número");
// let numero3 = prompt("Ingrese tercer número");
// numero1 = Number(numero1);
// numero2 = Number(numero2);
// numero3 = Number(numero3);
// if (numero1 >= numero2 && numero1 >= numero3){
//     console.log("Primer número", numero1);
// }
// if (numero2 >= numero1 && numero2 >= numero3){
//     console.log("Segundo número", numero2);
// }
// if (numero3 >= numero1 && numero3 >= numero2){
//     console.log("Tercer número", numero3);
// }


// Ejercicios JavaScript Nivel 2

// Ejercicio 1
// let variable_a = 33;
// let variable_b = 77;
// let resultado = variable_a + variable_b;
// console.log("Resultado:", resultado);

// Ejercicio 2
// let a = 10;
// let b = 8;
// let c = 5;
// let d = 6;
// let e = 3;
// let promedio = (a+b+c+d+e)/5;
// console.log("Promedio:", promedio);

//Ejercicio 3
// let nota1 = 3;
// let nota2 = 7;
// console.log("NOTA1:", nota1, "NOTA2:", nota2);
// if (nota1 > nota2){
//     console.log("nota1 es mayor a nota2");
// }else{
//     console.log("nota1 es menor o igual a nota2");
// }

//Ejercicio 4
// let montoCompra = prompt("Monto de la compra");
// montoCompra = Number(montoCompra);
// if (montoCompra > 100){
//     let montoDescuento = (montoCompra * 1.15) - montoCompra;
//     montoCompra = montoCompra - montoDescuento;
// }
// console.log("Monto a abonar:", montoCompra);

//Ejercicio 5
// let cantidadPersonas = prompt("Ingrese la cantidad de personas");
// cantidadPersonas = Number(cantidadPersonas);
// if (cantidadPersonas > 8){
//     let montoPagar = 0.5 * cantidadPersonas;
//     console.log("Monto a abonar:", montoPagar);
// }else{
//     let montoPagar = 1.5 * cantidadPersonas;
//     console.log("Monto a abonar:", montoPagar);
// }

//Ejercicio 7
// let puntuacionPelicula = prompt("Ingrese la puntuación d ela pelicual [0-4]");
// puntuacionPelicula = Number(puntuacionPelicula);
// switch (puntuacionPelicula){
//     case 0:
//         console.log("mala");
//         break;
//     case 1:
//         console.log("regular");
//         break;
//     case 2:
//         console.log("buena");
//         break;
//     case 3:
//         console.log("muy buena");
//         break;
//     case 4:
//         console.log("excelente");
//         break;
//     default:
//         console.log("Ingrese un valor entre correcto");
//         break;
// }

//Ejercicio 8
// for (let i=59; i>=0; i--){
//     console.log(i);
// }

//Ejercicio 9
// for (let i=0; i<=100; i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

//Ejercicio 11
// const numeros = [];
// let nuevoNumero = prompt("Ingrese un número [-1 termina]");
// while (nuevoNumero != "-1"){
//     numeros.push(nuevoNumero);
//     nuevoNumero = prompt("Ingrese un número [-1 termina]");
// }
// console.log(numeros);

//Ejercicio 12
