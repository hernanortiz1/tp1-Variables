/*Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor. */

const numero1 = parseInt(prompt("Ingrese primer número")),
  numero2 = parseInt(prompt("Ingrese segundo número"));
if (numero1 > numero2) {
  document.writeln("El número " + numero1 + " es mayor a " + numero2);
} else {
  document.writeln("El número " + numero2 + " es mayor a " + numero1);
}
