function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta = true;
	var contador = 0;
	var temperaturaPar = 0;
	var marcaProductoMasPesado;
	var productosMenoresACero = 0;
	var sumaPeso = 0;
	var contadorPeso = 0;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;

	while(respuesta == true)
	{
		marca = prompt("Ingrese la marca del producto");
		while(isNaN(marca) == false)
		{
			marca = prompt("Error. Vuelva a ingresar la marca del producto");
		}

		peso = prompt("Ingrese el peso del producto (entre 1 y 100)");
		peso = parseInt(peso);
		while(isNaN(peso) == true || peso < 1 || peso > 100)
		{
			peso = prompt("Error. Vuelva a ingresar el peso del producto (entre 1 y 100)");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese la temperatura de almacenamiento (entre -30 y 30)");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error. Vuelva a ingresar la temperatura de almacenamiento (entre -30 y 30)");
			temperatura = parseInt(temperatura);
		}
	//A
		if (temperatura %2==0)
		{
			temperaturaPar++;
		}


	//C
		if (temperatura < 0)
		{
			productosMenoresACero++;
		}
	//D
		sumaPeso = sumaPeso + peso;
		contadorPeso++;
	//F y B
		if (contador == 0)
		{
			pesoMinimo = peso;
			pesoMaximo = peso;
			marcaProductoMasPesado = marca
		}
		else
		{
			if(peso < pesoMinimo)
			{
				pesoMinimo = peso;
			}
			if(peso > pesoMaximo)
			{
				pesoMaximo = peso;
				marcaProductoMasPesado = marca
			}
		}

		contador++;
		respuesta = confirm("¿Desea ingresar mas datos?");
	}
		promedioPeso = sumaPeso / contadorPeso;

	document.write("Cantidad de temperaturas pares: " + temperaturaPar + "<br>" + "Marca del producto mas pesado: " + marcaProductoMasPesado + "<br>" + "Cantidad de productos que se conservan a menos de 0 grados: " + productosMenoresACero + "<br>" + "Promedio del peso de todos los productos: " + promedioPeso + "<br>" + "Peso maximo: " + pesoMaximo + "<br>" + "Peso minimo: " + pesoMinimo + "<br>");
}
