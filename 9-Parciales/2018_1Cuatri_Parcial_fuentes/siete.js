function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadVarones = 0;
	var contador = 0;
	var acumulador = 0;
	var mensaje;


	while(contador < 5)
	{
		nota = prompt("Ingrese una nota");
		nota = parseInt(nota);
		while(isNaN(nota) == true || nota < 0 || nota > 10)
		{
			nota = prompt("Error. Vuelva a ingresar una nota");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese el sexo");
		while(isNaN(sexo) == false || sexo != "m" && sexo != "f")
		{
			sexo = prompt("Error. Vuelva a ingresar el sexo");
		}

		acumulador = acumulador + nota;
		promedio = acumulador / 5;

		if (contador == 0)
		{
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
		}
		else
		{
			if(notaMasBaja > nota)
			{
				notaMasBaja = nota;
			}
		}

		if(sexo == "m" && nota >= 6)
		{
			cantidadVarones = cantidadVarones + 1;
		}
		contador++;
	}
	alert("El promedio de las notas totales es " + promedio + ". La nota mas baja es " + notaMasBaja + ", y su sexo es " + sexoNotaMasBaja + ". La cantidad de varones con nota mayor/igual a 6 es " + cantidadVarones);
}
