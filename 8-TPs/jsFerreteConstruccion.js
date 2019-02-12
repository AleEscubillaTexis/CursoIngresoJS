/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var suma;
	var alambre;

	largoTerreno = Largo.value;
	anchoTerreno = Ancho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	
	largoTerreno = (largoTerreno * 2);
	anchoTerreno = (anchoTerreno * 2);
	console.log(largoTerreno);
	console.log(anchoTerreno);

	suma = (largoTerreno + anchoTerreno);
	console.log(suma);

	alambre = suma * 3;
	console.log(alambre);

	alert("La cantidad de alambre a comprar es de " + alambre + "m");

}
function Circulo () 
{
	var radioTerreno;
	var resultado;

	radioTerreno = Radio.value;

	radioTerreno = parseInt(radioTerreno);

	resultado = (radioTerreno * 3);

	alert("La cantidad de alambre a comprar es de " + resultado + "m");

}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var cemento;
	var cal;
	var sumaTerreno;
	var bolsasCemento;
	var bolsasCal;
	

	cemento = 2;
	cal = 3;
	largoTerreno = Largo.value;
	anchoTerreno = Ancho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);
	
	largoTerreno = (largoTerreno * 2);
	anchoTerreno = (anchoTerreno * 2);
	console.log(largoTerreno);
	console.log(anchoTerreno);

	sumaTerreno = (largoTerreno + anchoTerreno);
	console.log(sumaTerreno);

	bolsasCemento = (sumaTerreno * cemento);
	bolsasCal = (sumaTerreno * cal);
	console.log(bolsasCemento);
	console.log(bolsasCal);
	alert("Se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal");

	

	
	
}