function mostrar()
{
	var precioHabitaciones;
	var pago;
	var paquete;
	var descuento;
	var precioFinal;

	precioHabitaciones = prompt("Ingrese el precio por habitacion");
	paquete = prompt("Ingrese el paquete elegido");
	pago = prompt("Ingrese el tipo de pago");

	precioHabitaciones = parseInt(precioHabitaciones);


	switch(pago)
	{
		case "visa":
		case "mercadopago":
			descuento = 10;
			break;
		
		
		case "paypal":
			
			switch(paquete)
			{
				case "todoIncluido":
					descuento = 25;
					break;
				
				default:
					descuento = 15;
					break;
			}
			break;
			
		case "efectivo":
			
			switch(paquete)
			{
				case "soloDesayunos":
					descuento = 30;
					break;
				
				case "todoIncluido":
					descuento = 35;
					break;
				
				default:
					descuento = 20;
					break;
			}
			break;

		default:
			descuento = 5
			break;

	}

	descuento = ((precioHabitaciones * descuento) / 100);
	precioFinal = (precioHabitaciones - descuento);

	alert("El precio final de la compra es $" + precioFinal);














}
