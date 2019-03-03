function mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	var mensaje;

	numero1 = prompt("Ingrese el primer numero");
	numero2 = prompt("Ingrese el segundo numero");

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if(numero1 == numero2)
	{
		resultado = numero1 + " y " + numero2;
		mensaje = "El resultado es " + resultado;
	}
	else
	{
		if(numero1 > numero2)
		{
			resultado = (numero1 - numero2);
			mensaje = "El resultado es " + resultado;
		}
		else
		{
			resultado = (numero1 + numero2);

			if(resultado > 10)
			{
				mensaje = "la suma es " + resultado + " y supero el 10";
			}
			else
			{
				mensaje = "El resultado es " + resultado;
			}
		}
	}
		alert(mensaje);
}
