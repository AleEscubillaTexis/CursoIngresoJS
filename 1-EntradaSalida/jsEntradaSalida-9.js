/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Sueldo;
	var resultado;

	Sueldo = sueldo.value;
	//Sueldo = document.getElementById(sueldo).value;
	
	Sueldo = parseInt(Sueldo);

	resultado = (Sueldo + ((Sueldo * 10) / 100));
	

	alert(" el resultado es " + resultado);

	
}
