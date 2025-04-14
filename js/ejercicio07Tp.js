/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.
 */
const numero1 = parseInt(prompt("Ingrese primer número")),
  numero2 = parseInt(prompt("Ingrese segundo número")),
  numero3 = parseInt(prompt("Ingrese tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
  document.writeln("El número " + numero1 + " es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  document.writeln("El número " + numero2 + " es el mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
  document.writeln("El número " + numero3 + " es el mayor");
}
