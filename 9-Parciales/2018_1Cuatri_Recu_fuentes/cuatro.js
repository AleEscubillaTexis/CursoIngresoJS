function mostrar()
{
	//igresar 4 importes siempre
	//mostrar el mayor de esos numeros (mayor de la compra)
	//decir cuanto es el total (la suma de los cuatro) del total
	//si supera 100 pesos hacer un descuento del 10%
	//si supera los 50 pesos el descuento es del 5%
	//en el caso de ser menos de 50 pesos sumar el 15%

	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var mayor;
	var descuento;
	var recargo;
	var precioFinal;
	var suma;
	var mensaje;

	importe1 = prompt("Ingrese el primer importe");
	importe2 = prompt("Ingrese el segundo importe");
	importe3 = prompt("Ingrese el tercer importe");
	importe4 = prompt("Ingrese el cuarto importe");

	importe1 = parseInt(importe1);
	importe2 = parseInt(importe2);
	importe3 = parseInt(importe3);
	importe4 = parseInt(importe4);

	if (importe1 > importe2 && importe1 > importe3 && importe1 > importe4)
	{
		mayor = importe1;
	}
	else
	{
		if (importe2 > importe1 && importe2 > importe3 && importe2 > importe4)
		{
			mayor = importe2;
		}
		else
		{
			if (importe3 > importe1 && importe3 > importe2 && importe3 > importe4)
			{
				mayor = importe3;
			}
			else
			{
				mayor = importe4;
			}
		}
	}
	
	suma = (importe1 + importe2 + importe3 + importe4);

	if(suma >= 100)
	{
		descuento = 10	
	}
	else
	{
		if(precioFinal >= 50)
		{
			descuento = 5	
		}
		else
		{
			recargo = 15
		}
	}

	descuento = ((suma * descuento) / 100);
	precioFinal = (suma - descuento);
	recargo = ((suma * recargo) / 100);
	precioFinal = (suma + recargo);

	
	mensaje = ("El importe mayor es " + mayor + ". El precio final es $" + precioFinal);
	alert(mensaje);


}
