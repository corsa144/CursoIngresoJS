function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	descuento=prompt("ingrese el porcentaje de descuento");
	precioFinal=(precio - precio*descuento/100);

	//console.log(precioFinal);
	document.getElementById('elPrecioFinal').value=precioFinal;
	//console.log(precioFinal);
}
