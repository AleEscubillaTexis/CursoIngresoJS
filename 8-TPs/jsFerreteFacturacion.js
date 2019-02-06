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

	precio1 = parseint(precio1);
	precio2 = parseint(precio2);
	precio3 = parseint(precio3);

	resultado = (parseInt(precio1) + parseInt(precio2) + parseint (precio3))

	//resultado = (precio1 + precio2 + precio3);

	alert("La suma es: " + resultado);


	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;


	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseint(precio1);
	precio2 = parseint(precio2);
	precio3 = parseint(precio3);

	resultado = ((precio1 + precio2 + precio3) / 3);
	
	alert("El promedio es: " + resultado);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;


	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseint(precio1);
	precio2 = parseint(precio2);
	precio3 = parseint(precio3);

	resultado = (((precio1 + precio2 + precio3) * 21) / 100);
	
	alert("El precio final es: " + resultado);


}