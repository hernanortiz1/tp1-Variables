/*2-Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario 
y determine si es mayor de edad (18 años o más).
 */
let edad = parseInt(prompt("Ingresa tu edad"));
if(edad >= 18){
    document.writeln("Mayor de edad");
} else{
    document.writeln("No es mayor de edad");
}