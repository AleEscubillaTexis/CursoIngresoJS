/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var precio;
 	var cantidad;
 	var marcaLampara;
 	var descuento;
 	var ingresosBrutos;
 	var precioFinal;

 	marcaLampara = Marca.value;
 	cantidad = Cantidad.value;
 	cantidad = parseInt(cantidad);

	
	precio = 35;

	precio = (precio * cantidad);
	console.log(precio);

 	if (cantidad >= 6)
 	{
 		descuento = ((precio * 50) / 100);
 		console.log(descuento);
 		precioFinal = (precio - descuento);
 		console.log(precioFinal);
 	}
 	else
 	{
	 	if ((cantidad == 5) && (marcaLampara == "ArgentinaLuz"))
	 	{
	 		descuento = ((precio * 40) / 100);
	 		console.log(descuento);
	 		precioFinal = (precio - descuento);
	 		console.log(precioFinal);
	 	}
	 	else
	 		{
	 			if (marcaLampara =! "ArgentinaLuz")
	 			{
	 				descuento = ((precio * 30) / 100);
	 				console.log(descuento);
	 				precioFinal = (precio - descuento);
	 				console.log(precioFinal);
	 			}
	 		}

	 	if ((cantidad == 4) && ((marcaLampara == "ArgentinaLuz") || (marcaLampara == "FelipeLamparas")))
	 	{
	 		descuento = ((precio * 25) / 100);
	 		console.log(descuento);
	 		precioFinal = (precio - descuento);
	 		console.log(precioFinal);
	 	}
	 	else
	 	{
	 		if ((marcaLampara =! "ArgentinaLuz") && (marcaLampara =! "FelipeLamparas"))
	 		{
	 			descuento = ((precio * 20) / 100);
	 			console.log(descuento);
	 			precioFinal = (precio - descuento);
	 			console.log(precioFinal);
	 		}
	 	}

	 	if ((cantidad == 3) && (marcaLampara == "ArgentinaLuz"))
	 	{
	 		descuento = ((precio * 15) / 100);
	 		console.log(descuento);
	 		precioFinal = (precio - descuento);
	 		console.log(precioFinal);
	 	}
	 	else
	 	{
	 		if (marcaLampara == "FelipeLamparas")
	 		{
	 			descuento = ((precio * 10) / 100);
	 			console.log(descuento);
	 			precioFinal = (precio - descuento);
	 			console.log(precioFinal);
	 		}
	 		else
	 		{
	 			descuento = ((precio * 5) / 100);
	 			
	 			precioFinal = (precio - descuento);
	 			console.log(precioFinal);
	 		}
	 	}
	 }	

 	precioDescuento.value = precioFinal;

 	/*if (precioFinal > 120)
 	{
 		ingresosBrutos = ((precioFinal * 10) / 100);
 		precioFinal = (precio + ingresosBrutos);

 		alert("IIBB. Usted pago $" + precioFinal + ", siendo $" + ingresosBrutos + "el impuesto que se pago.");
 	}*/

}
