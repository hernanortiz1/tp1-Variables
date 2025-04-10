/*4-Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número 
y determinar si es par o impar. Mostrar el resultado.
 */

const numero = parseInt(prompt("Ingrese número"));
if(numero % 2 == 0){
    document.writeln("Número par");
} else{
    document.writeln("Número impar");
}