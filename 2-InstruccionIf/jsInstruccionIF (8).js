function mostrar()
{
//tomo la edad  

	var edadIngresada;
	var estadoIngresado;

	edadIngresada = edad.value;
	estadoIngresado = estadoCivil.value;

	edadIngresada = parseInt(edadIngresada);

	
	if ((edadIngresada >= 18) && (estadoIngresado == "Soltero"))
	{
		alert("Es soltero y no es menor");
	}


	/*if ((edadIngresada < 18) && (estadoIngresado != "Soltero"))
	{
		else if ((estadoIngresado = "Soltero") && (edadIngresada >= 18))
		{
			alert("Es soltero y no es menor");
		}
	}*/

}//FIN DE LA FUNCIÓN