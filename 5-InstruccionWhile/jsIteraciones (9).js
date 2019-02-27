function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var max;
	var min;
	var bandera = true


	while(respuesta!='no')
	{
		var nota;
		nota = prompt();
		nota = parseInt(nota)
		while ( isNaN(nota) == true || nota < 0 || nota > 10 )
		{
			nota = prompt("error");
			nota = parseInt(nota)
		}
		alert(nota);

		var sexo
		sexo = prompt("");
		while ( isNaN(nota) == false || sexo != "f" && sexo != "m" )
		{
			sexo = prompt("error");
		}
		alert(sexo);
		respuesta = prompr("continuar");
	}


	if (bandera)
	{
		max = num
		min =
	}



}//FIN DE LA FUNCIÓN