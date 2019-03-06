function mostrar()
{
	var letra;
	var numero;
	var respuesta = true;
	var contador = 0;
	var pares = 0;
	var impares = 0;
	var ceros = 0;
	var positivos = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var promedio;
	var letraMax;
	var letraMin;
	var numeroMax;
	var numeroMin;
	


	while(respuesta == true)
	{
		letra = prompt("Ingrese una letra");
		while(isNaN(letra) == false || letra.length > 1)
		{
			letra = prompt("Error. Vuelva a ingresar una letra");
		}

		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);
		while(isNaN(numero) == true || numero < - 100 || numero > 100)
		{
			numero = prompt("Error. Vuelva a ingresar un numero");
			numero = parseInt(numero);
		}

		if(numero != 0)
		{
			if (numero %2==0)
			{
				pares++;
			}
			else
			{
				impares++;
			}
		}
		else
		{
			ceros++;
		}
		

		if (numero > 0)
			{
				sumaPositivos = sumaPositivos + numero;
				positivos++;
		
			}
			else
			{	
				sumaNegativos = sumaNegativos + numero;

			}

		if (contador==0) 
		{
			numeroMin = numero;
			letraMin = letra;
			numeroMax = numero;
			letraMax = letra;

		}
		else
		{
			if (numero < numeroMin) 
			{
				numeroMin = numero;
				letraMin = letra;
			}

			if (numero > numeroMax) 
			{
				numeroMax = numero;
				letraMax = letra;
			}
		}

		contador++;
		respuesta = confirm("¿Desea ingresar mas datos?");
	}

	promedio = sumaPositivos / positivos;

	document.write("Cantidad de numeros pares: " + pares + "<br>" + "Cantidad de numeros impares: " + impares + "<br>" + "Cantidad de ceros: " + ceros + "<br>" + "Promedio de numeros positivos: " + promedio + "<br>" + "Suma de numeros negativos: " + sumaNegativos + "<br>" + "Letra maxima: " + letraMax + "<br>" + "Numero maximo: " + numeroMax + "<br>" + "Letra minima: " + letraMin + "<br>" + "Numero minimo: " + numeroMin + "<br>");
}
