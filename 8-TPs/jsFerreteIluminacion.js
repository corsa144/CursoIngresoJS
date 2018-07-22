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
	var marca;
	var cantidadDeLamparitas;
	var precio=35;
	var precioFinal;
	var ingresosBrutos;

	marca=document.getElementById('Marca').value;
	cantidadDeLamparitas=document.getElementById('Cantidad').value;
	cantidadDeLamparitas=parseInt(cantidadDeLamparitas);

 	if(cantidadDeLamparitas>=6)
 	{
 		precioFinal=(cantidadDeLamparitas*0.5*precio);
 	}
 	else if(cantidadDeLamparitas==5&&marca=="ArgentinaLuz")
 	{
 		precioFinal=(5*0.6*precio);
 	}
 	else if(cantidadDeLamparitas==5)
 	{
 		precioFinal=(5*0.7*precio);
 	}
 	else if(cantidadDeLamparitas==4&&(marca=="ArgentinaLuz"||marca=="FelipeLamparas"))
 	{
 		precioFinal=(4*0.75*precio);
 	}
 	else if(cantidadDeLamparitas==4)
 	{
 		precioFinal=(4*0.8*precio);
 	}
 	else if(cantidadDeLamparitas==3&&marca=="ArgentinaLuz")
 	{
 		precioFinal=(3*0.85*precio);
 	}
 	else if(cantidadDeLamparitas==3&&marca=="FelipeLamparas")
 	{
 		precioFinal=(3*0.9*precio);
 	}
 	else if(cantidadDeLamparitas==3)
 	{
 		precioFinal=(3*0.95*precio);
 	}
 	else
 	{
 		precioFinal=(cantidadDeLamparitas*precio);
 	}

 	if(precioFinal>120)
 	{
 		ingresosBrutos=precioFinal*0.1;
 		document.getElementById('precioDescuento').value=precioFinal;
 		alert(" usted pago " + ingresosBrutos + " de IIBB ");
 	}
 	else
 	{
 		document.getElementById('precioDescuento').value=precioFinal;
 	}

}

