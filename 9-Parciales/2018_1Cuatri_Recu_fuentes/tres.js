function mostrar()
{	
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingresar el precio");
	descuento = prompt("Ingresar el porcentaje de descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	descuento = (precio * descuento) / 100;
	precioFinal = (precio - descuento);

	elPrecioFinal.value = precioFinal;

}
