function mostrar()
{
	var letra;
	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var pares = 0;
	var impares = 0;
	var ceros = 0;
	var promedioPos;
	var sumaNeg;
	var letraMax;
	var letraMin;
	var numeroMax;
	var numeroMin;

	while(respuesta = true)
	{
		letra = prompt("Ingrese una letra");
		while(isNaN(letra) == false)
		{
			letra = prompt("Error. Vuelva a ingresar una letra");
		}

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero) == true || numero < -100 || numero > 100)
		{
			numero = prompt("Error. Vuelva a ingresar un numero");
			numero = parseInt(numero);
		}

		respuesta = confirm("¿Desea ingresar mas datos?");
		document.write(letra);
		document.write(numero);

		acumulador = acumulador + pares;






		contador++;
	}







}
