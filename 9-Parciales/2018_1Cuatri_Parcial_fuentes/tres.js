function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el porcentaje de descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	descuento = (precio * descuento) / 100;
	precioFinal = (precio - descuento);

	elPrecioFinal.value = precioFinal;

}
