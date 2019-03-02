function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta =  true;
	var contadorTemperaturaPar = 0;
	var maxPeso;
	var maxMarca;
	var flagPesoMaximo = false;
	var contador = 0;
	var acumulador = 0;
	var promedio;



	do
	{
		marca = prompt("Ingrese marca");
		while(isNaN(marca) == false)
		{
			marca = prompt("Error. Vuelva a ingresar marca");	
		}
		
		peso = prompt("Ingrese peso");
		peso = parseInt(peso);
		while(isNaN(peso) == true || peso < 1 || peso > 100)
		{
			peso = prompt("Error. Vuelva a ingresar peso");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese temperatura");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error. Vuelva a ingresar temperatura");
			temperatura = parseInt(temperatura);
		}


		if (temperatura % 2 == 0)
		{
			contadorTemperaturaPar++;
		}

		if(flagPesoMaximo == false || peso > maxPeso)
		{
			maxMarca = marca;
			maxPeso = peso;
			flagPesoMaximo = true;
		}

		if (temperatura > 0)
		{
			contadorTempMenosCero++;
		}
		contadorPeso++:
		acumuladorPeso = acumuladorPeso + peso;

		respuesta = confirm("¿Desea ingresar mas productos?");
	}	
	while(respuesta == true);
	promedio = acumuladorPeso + 
	document.write("Cantidad de temperaturas pares " + contadorTemperaturaPar);
	
	
}
