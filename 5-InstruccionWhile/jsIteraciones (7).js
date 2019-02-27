function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var numero;

	while(respuesta != "no")
	{
		do
		{	
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			acumulador = acumulador + numero;
			console.log(acumulador);
		}
		while(isNaN(numero));
		
		respuesta = confirm("¿Desea ingresar mas numeros?")
		if (respuesta == "no")
		{
			break;
		}

		contador++;
		console.log(contador);
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN