/*5-Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto
 y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.
*/

const precio = parseFloat(prompt("Ingrese precio"));
let precioDescuento;
if(precio > 1000){
    precioDescuento = precio*0.85;
    document.writeln("Precio: "+ precio + " con 15% de descuento "+ precioDescuento.toFixed(2));
} else{
    document.writeln("El precio ingresado es menor a 1000");
}