function mostrar()
{
//tomo la edad  

	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);


	if (edadIngresada >= 18)
		{
			mensaje = "mayor de edad";
		}
	else
		{ 
			if (edadIngresada >= 13 && edadIngresada <= 17)
			{
				mensaje = "un adolescente";
			}	
			else 
			{
				mensaje = "un niño";
			}
		}
	

		alert("Usted es " + mensaje);




}//FIN DE LA FUNCIÓN