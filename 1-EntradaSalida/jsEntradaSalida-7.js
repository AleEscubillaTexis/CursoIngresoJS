/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;

	parseInt(numero1);
	parseInt(numero2);

	//resultado = (numero1 + numero2);
	resultado = (parseInt(numero1) + parseInt(numero2))


	alert("La suma es: " + resultado);	
}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;

	parseInt(numero1);
	parseInt(numero2);

	resultado = (numero1 - numero2);

	alert("La resta es: " + resultado);	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;

	parseInt(numero1);
	parseInt(numero2);

	resultado = (numero1 * numero2);

	alert("La multiplicacion es: " + resultado);	
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;

	parseInt(numero1);
	parseInt(numero2);

	resultado = (numero1 / numero2),

	alert("La division es: " + resultado);	
}

