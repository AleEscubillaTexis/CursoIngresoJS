function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var notaRandom;
	var mensaje;


	notaRandom = Math.floor(Math.random() * 10) + 1;
	console.log(notaRandom);


	if (notaRandom >= 9)
	{
		mensaje = "EXCELENTE";
	} 
	else
	{
		if (notaRandom >= 4)
		{
			mensaje = "APROBO";
		}
		else 
		{
			mensaje = "Vamos, la proxima se puede";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN