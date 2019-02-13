function mostrar()
{
	var cantidad;
	var precio;
	var descuento;
	var descuentoAdicional;
	var recargo;
	var precioFinal;
	var pago;

	cantidad = prompt("Ingrese la cantidad de productos");
	precio = prompt("Ingrese el precio de la compra");
	pago = prompt ("Ingrese el medio de pago");
	
	cantidad = parseInt(cantidad);
	precio = parseInt(precio);

	
	if (cantidad >= 2)
	{	
		descuento = ((precio * 10) / 100);
		precioFinal = (precio - descuento);

		//alert("Se compraron " + cantidad + " productos y se realizo un descuento del 10%. El precio a pagar es de $ " + precioFinal);

		 if (precio >= 2000)
		{
			descuentoAdicional = ((precio * 15) / 100);
			precioFinal = (precio - descuentoAdicional)
			//alert("La compra supero los $2000 y se realiza un descuento adicional del 15%. El precio a pagar es de $" + precioFinal);
		}			
	}	
	
	if (pago == "tarjeta")
		{
			recargo = ((precio * 10) / 100);
			precioFinal = (precio + recargo);
			//alert("Al pagar con tarjeta se le agrega un 10% de recargo. El precio a pagar es de $" + precioFinal);
		}

	alert("Se compro " + cantidad + " producto/s. El precio final es de $" + precioFinal);	


	
	



}
