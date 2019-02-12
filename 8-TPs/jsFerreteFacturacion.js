/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1 + precio2 + precio3);
	
	alert("La suma es " + resultado);
	
	//suma = (parseInt(precio1) + parseInt(precio2 + parseInt (precio3));
	//console.log ("La suma es " + resultado)
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	promedio = (precio1 + precio2 + precio3) / 3;

	alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
	
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var iva;
	var precioFinal;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = (precio1 + precio2 + precio3);
	console.log(suma);

	iva = ((suma * 21) / 100);
	console.log(iva);

	precioFinal = (suma + iva);
	console.log(precioFinal);

	alert("El precio final el " + precioFinal);

}