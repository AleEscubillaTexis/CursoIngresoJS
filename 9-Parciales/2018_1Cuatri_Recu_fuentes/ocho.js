function mostrar()
{
	var letra;
	var numero;
	var respuesta = true;
	var contador = 0;
	var acumulador = 0;
	var pares;
	var impares;
	var ceros;
	var promedioPositivos;
	var sumaNegativos;
	var maximo;
	var minimo;


	while(respuesta = true)
	{
		letra = prompt("Ingrese la letra");
		while(isNaN(letra) == false)
		{
			letra = prompt("Error. Vuelva a ingresar la letra");
		}

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero) == true || numero < -100 || numero > 100)
		{
			numero = prompt("Error. Vuelva a ingresar un numero");
			numero = parseInt(numero);
		}
		respuesta = confirm("¿Desea seguir ingresando valores?");





		contador = contador + 1
	}





}
