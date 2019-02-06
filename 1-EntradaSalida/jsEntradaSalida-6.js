/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;


	numero1 = numeroUno.value;
	numero2 = numeroDos.value;

	//parseInt(numero1);
	//parseInt(numero2);
	//(numero1 + numero2) = resultado;
	
	resultado = parseInt(numero1)+parseInt(numero2);
	
	alert("El resultado es: " + parseInt(resultado));


}

