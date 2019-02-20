function mostrar()
{
	var cantidad;
	var precio;
	var descuento;
	var descuentoAdicional;
	var recargo;
	var pago;
	var precioFinal;

	cantidad = prompt("Ingrese la cantidad de productos. Si lleva mas de 2 productos se le hara un 10% de descuento.");
	precio = prompt("Ingrese el precio de la compra. Si hace una compra mayor a $2000 se le hara un %15 de descuento adicional.");
	pago = prompt ("Ingrese el medio de pago. Si paga con tarjeta se le hara un recargo del 10%.");
	
	cantidad = parseInt(cantidad);
	precio = parseInt(precio);

	precio = (cantidad * precio);
	console.log(precio);


	if (cantidad == 1)
	{
		precioFinal = precio;
	}		

	if (cantidad >= 2)
	{	
		descuento = ((precio * 10) / 100);
		console.log(descuento);
		precioFinal = (precio - descuento);
		console.log(precioFinal);

		 if (precio >= 2000)
		{
			descuentoAdicional = ((precioFinal * 15) / 100);
			console.log(descuentoAdicional);
			precioFinal = (precioFinal - descuentoAdicional);
			console.log(precioFinal);
		}			
	}	
	
	if (pago == "tarjeta")
		{
			recargo = ((precioFinal * 10) / 100);
			console.log(recargo);
			precioFinal = (precioFinal + recargo);
		}

	alert("Se compro " + cantidad + " producto/s. El precio final es de $" + precioFinal);


	/*switch (cantidad)
	{
		case 1:
			precioFinal = precio;
			break;

		case 2:
			descuento = ((precio * 10) / 100);
			precioFinal = (precio - descuento);
			console.log(precioFinal);
			if (precio >= 2000)
			{
				descuentoAdicional = ((precioFinal * 15) / 100);
				precioFinal = (precioFinal - descuentoAdicional);
				console.log(precioFinal);
			}
	}
			
	if (pago == "tarjeta")
	{
		recargo = ((precioFinal * 10) / 100);
		console.log(recargo);
		precioFinal = (precioFinal + recargo);
	}

	alert("Se compro " + cantidad + " producto/s. El precio final es de $" + precioFinal);*/

}
