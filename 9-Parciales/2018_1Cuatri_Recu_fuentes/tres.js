function mostrar()
{
	var descuento;
	var precio;
	var precioConDescuento;
	var valorDelDescuento;
	var iva;
	var precioFinal;

	precio=prompt("el precio");
	descuento=prompt("descuento");
	valorDelDescuento=( precio*descuento / 100);
	precioConDescuento=( precio- valorDelDescuento);
	iva=(precioConDescuento*21/100);
	precioFinal=(precioConDescuento+iva);

	alert("el descuento es de "+valorDelDescuento+"entonces queda "+precioConDescuento+"mas iva "+iva);

	document.getElementById('elPrecioFinal').value=precioFinal;
}
