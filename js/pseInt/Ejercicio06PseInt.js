/* 6-Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar
 una temperatura en grados Fahrenheit y convertirla a grados Celsius. 
 La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)​*(F−32)
*/

const grados = parseFloat(prompt("Ingrese grados"));
const celsius = (5 / 9) * (grados - 32);

document.writeln(
  "Fahrenheit: " + grados + " celsius: " + celsius.toFixed(2)
);
