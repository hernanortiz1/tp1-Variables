/*7-Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar 
el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son:

Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho */

const largo = parseInt(prompt("Ingrese largo")),
  ancho = parseInt(prompt("Ingrese ancho"));
let perimetro, area;
perimetro = 2 * (largo + ancho);
area = largo * ancho;
document.writeln("Perimetro: " + perimetro + " Area: " + area);
