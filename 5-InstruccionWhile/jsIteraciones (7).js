function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numero;

	while(respuesta)
	{
		respuesta = confirm("¿Desea ingresar mas numeros?")
		contador++;
		console.log(contador);

		do
		{	
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			acumulador = acumulador + numero;
		}
		while(isNaN(numero));
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN