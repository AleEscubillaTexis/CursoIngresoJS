function mostrar()
{

	var num = prompt("ingrese un número entre 0 y 9.");

	while(num < 0 || num > 9)
	{	
		console.log(num);
		num = prompt("ingrese un número entre 0 y 9.");

	}

	document.getElementById("Numero").value = num;

}//FIN DE LA FUNCIÓN