function mostrar()
{
//tomo la edad  
	var edadIngresada;

	edadIngresada = edad.value;
	edadIngresada = parseInt(edadIngresada);



	/*if(edadIngresada  && <=13)
		{}
	else
		{alert("Usted no es adolecente");}*/

	if((edadIngresada <= 13) || (edadIngresada >=18))
	{
		
		alert("Usted NO es adolescente");
	}
		
	

}//FIN DE LA FUNCIÓN