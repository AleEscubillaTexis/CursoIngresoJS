/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeIngresado;
	var aumento;
	var importeFinal;


	importeIngresado = sueldo.value;

	importeIngresado = parseInt(importeIngresado);

	aumento = ((importeIngresado * 10) / 100);
	console.log(aumento);

	importeFinal = (importeIngresado + aumento);

	resultado.value = importeFinal;


	
}
