function mostrar()
{
  
  	var precio;
 	var recargo;
 	var precioFinal;

 	precio = elNombre.value;

 	precio = parseInt(precio);

 	recargo = ((precio * 10) /100);
 	console.log(recargo);

 	precioFinal = (precio + recargo)
 	console.log(precioFinal); 

	alert("El precio del producto en efectivo es: $" + precio + ", con tarjeta tiene un recargo del 10% que seria $" + recargo + " de recargo, costandole final $ " + precioFinal);



}
