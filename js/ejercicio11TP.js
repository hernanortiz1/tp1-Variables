/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)
 */
const numero = parseInt(prompt("Ingrese número"));
let mensaje = "El número " + numero;
let divisible = false;

if (numero % 2 === 0) {
  mensaje += " es divisible por 2";
  divisible = true;
}

if (numero % 3 === 0) {
  if (divisible) {
    mensaje += ", 3";
  } else {
    mensaje += ", 3";
    divisible = true;
  }
}

if (numero % 5 === 0) {
  if (divisible) {
    mensaje += ", 5";
  } else {
    mensaje += ", 5";
    divisible = true;
  }
}

if (numero % 7 === 0) {
  if (divisible) {
    mensaje += ", 7";
  } else {
    mensaje += ", 7";
    divisible = true;
  }
}

if (divisible) {
  document.writeln(mensaje);
} else {
  document.writeln("El número " + numero + " no es divisible por 2, 3, 5 ni 7");
}
