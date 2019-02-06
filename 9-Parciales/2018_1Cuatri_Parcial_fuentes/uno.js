
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt ("Ingrese el ancho del rectangulo");
	largo = prompt ("Ingrese el largo del rectangulo");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (ancho + largo);

	//perimetro = (parseint(ancho) + parseint(largo))

	alert("El perimetro es: " + perimetro);



}
