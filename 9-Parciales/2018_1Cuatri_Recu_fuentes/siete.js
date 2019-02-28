function mostrar()
{	
	var contador = 0;
	var acumulador = 0;
	var notas;
	var sexo;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadVarones = 0;

	while(contador < 5)
	{
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		while(isNaN(nota) == true || nota < 0 || nota > 10 )
		{
			nota = prompt("Error. Vuelva a ingresar la nota");
			nota = parseInt(nota);
		}
		
		sexo = prompt("Ingrese el sexo");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error. Vuelva a ingresar el sexo");
		}

		acumulador = acumulador + nota;
		promedio = acumulador / 5

		if (contador == 0 )
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

		if (sexo == "m" && nota >= 6)
		{
			cantidadVarones = cantidadVarones + 1
		}

		contador = contador + 1;
	}

	alert("El promedio de las notas es " + promedio + ". La nota mas baja es " + notaMasBaja + ", y su sexo " + sexoNotaMasBaja + ". La cantidad de varones con nota mayor o igual a seis es " + cantidadVarones);
}
