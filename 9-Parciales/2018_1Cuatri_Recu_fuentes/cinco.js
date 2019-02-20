function mostrar()
{
	var precioHabitaciones;
	var precio;
	var pago;
	var paquete;
	var descuento;

	cantidad = prompt("Ingrese la cantidad de habitaciones");
	pago = prompt("Ingrese el tipo de pago");

	precio = (precio * cantidad);

	switch(pago)
	{
		case "visa":
		case "mercadopago":
			precio = ((precio * 10) / 100);
			
			break;
		
		case "paypal":
			precio = ((precio * 15) / 100);
			break;
		
		case "efectivo":
			precio = ((precio * 20) / 100);
			break;
		
		default:
			precio = ((precio * 5) / 100);




	}
















}
